import { NextRequest, NextResponse } from 'next/server';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'JonnyMarcus';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers: Record<string, string> = {
  Accept: 'application/vnd.github.v3+json',
  'User-Agent': 'JonnyMarcus-Portfolio',
};

if (GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
}

async function fetchWithCache<T>(url: string, cacheKey: string): Promise<T> {
  const response = await fetch(url, {
    headers,
    next: { revalidate: 3600, tags: [`github-${cacheKey}`] },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'all';

    // Fetch user data
    const user = await fetchWithCache<any>(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      'user'
    );

    // Fetch repos
    const repos = await fetchWithCache<any[]>(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      'repos'
    );

    // Filter public repos
    const publicRepos = repos.filter(r => !r.private && !r.fork);

    // Get languages for each repo (limited to recent 10)
    const recentRepos = publicRepos.slice(0, 10);
    const reposWithLangs = await Promise.all(
      recentRepos.map(async (repo) => {
        try {
          const langs = await fetchWithCache<Record<string, number>>(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/languages`,
            `langs-${repo.name}`
          );
          return { ...repo, languages: langs };
        } catch {
          return { ...repo, languages: {} };
        }
      })
    );

    // Calculate language stats
    const languageStats: Record<string, number> = {};
    for (const repo of reposWithLangs) {
      for (const [lang, bytes] of Object.entries(repo.languages || {})) {
        languageStats[lang] = (languageStats[lang] || 0) + (bytes as number);
      }
    }

    const topLanguages = Object.entries(languageStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8)
      .map(([name, bytes]) => ({ name, bytes }));

    // Contribution data (simplified - would need GraphQL for real heatmap)
    const contributions = {
      total: user.contributions || 0,
      // Note: Real contribution calendar requires GraphQL API
    };

    const responseData = {
      user: {
        login: user.login,
        name: user.name,
        bio: user.bio,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
        created_at: user.created_at,
      },
      repos: type === 'all' ? publicRepos : recentRepos,
      reposWithLangs,
      topLanguages,
      contributions,
      fetchedAt: new Date().toISOString(),
    };

    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error('GitHub API error:', error);

    // Return cached/stale data if available, or fallback
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}