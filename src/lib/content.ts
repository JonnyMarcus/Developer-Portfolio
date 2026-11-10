import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  type: "web" | "mobile" | "desktop" | "automation" | "game";
  stack: string[];
  repo: string;
  demo: string | null;
  featured: boolean;
  order: number;
  content: string;
}

export interface Skill {
  category: string;
  items: { name: string; icon?: string; level?: number }[];
}

export interface JourneyItem {
  year: string;
  title: string;
  icon: string;
  description: string;
}

export interface EducationItem {
  category: string;
  items: { name: string; icon: string; description?: string }[];
}

export interface StudyingItem {
  name: string;
  icon: string;
  category: string;
}

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) return [];
  return fs.readdirSync(projectsDirectory)
    .filter(file => file.endsWith(".mdx"))
    .map(file => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(projectsDirectory, slug + ".mdx");
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    summary: data.summary,
    type: data.type,
    stack: data.stack || [],
    repo: data.repo,
    demo: data.demo,
    featured: data.featured ?? true,
    order: data.order ?? 999,
    content,
  };
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map(slug => getProjectBySlug(slug))
    .filter((p): p is Project => p !== null)
    .sort((a, b) => a.order - b.order);
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter(p => p.featured);
}

export function getProjectsByType(type: Project["type"]): Project[] {
  return getAllProjects().filter(p => p.type === type);
}

// Skills data (could also be from file)
export const skillsData = {
  frontend: [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind CSS", icon: "tailwind" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Python", icon: "python" },
    { name: "C", icon: "c" },
    { name: "C#", icon: "csharp" },
    { name: "SQLite", icon: "sqlite" },
    { name: "Supabase", icon: "supabase" },
    { name: "Strapi", icon: "strapi" },
    { name: "Streamlit", icon: "streamlit" },
    { name: "APIs REST", icon: "api" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Linux", icon: "linux" },
    { name: "Servidores", icon: "server" },
  ],
  automation: [
    { name: "Make", icon: "make" },
    { name: "n8n", icon: "n8n" },
    { name: "Claude", icon: "claude" },
    { name: "Ollama", icon: "ollama" },
    { name: "Notion", icon: "notion" },
  ],
  office: [
    { name: "Excel", icon: "excel" },
    { name: "Word", icon: "word" },
    { name: "PowerPoint", icon: "powerpoint" },
    { name: "Power BI", icon: "powerbi" },
    { name: "Google Drive", icon: "googledrive" },
  ],
};

export const journeyData = [
  { year: "2024", title: "Início na UNIFEI", icon: "unifei", description: "Graduação em Ciência da Computação." },
  { year: "2025", title: "Dev-U", icon: "devu", description: "Projetos de jogos e arte digital." },
  { year: "jan/2026", title: "Trainee na byron", icon: "byron", description: "Gestão, processos e automações na empresa júnior." },
  { year: "Em paralelo", title: "Redes e infraestrutura", icon: "forum", description: "Cursos do Fórum Telecom: Proxmox, Zabbix, Grafana e MikroTik." },
  { year: "Agora", title: "Em busca de estágio", icon: "briefcase", description: "Desenvolvimento full stack, com projetos publicados no GitHub." },
];

export const githubRepos = [
  { name: "Portifolio_byron", lang: "HTML", color: "#e34c26", url: "https://github.com/JonnyMarcus/Portifolio_byron" },
  { name: "Portifolio_Faculdade", lang: "C", color: "#a8b9cc", url: "https://github.com/JonnyMarcus/Portifolio_Faculdade" },
  { name: "Web-Site-Barber-Projeto-Final", lang: "TypeScript", color: "#3178c6", url: "https://github.com/JonnyMarcus/Web-Site-Barber-Projeto-Final" },
  { name: "Gerador-Automatico-de-Certificados", lang: "Python", color: "#4b8bbe", url: "https://github.com/JonnyMarcus/Gerador-Automatico-de-Certificados" },
  { name: "whatsapp-bulk-sender", lang: "Python", color: "#4b8bbe", url: "https://github.com/JonnyMarcus/whatsapp-bulk-sender" },
  { name: "DailyTasks", lang: "JavaScript", color: "#f1e05a", url: "https://github.com/JonnyMarcus/DailyTasks" },
];

export const studyingData = [
  { name: "TypeScript", icon: "typescript", category: "core" },
  { name: "React", icon: "react", category: "core" },
  { name: "Docker", icon: "docker", category: "devops" },
  { name: "Kubernetes", icon: "kubernetes", category: "devops" },
  { name: "Arquitetura de Software", icon: "architecture", category: "core" },
  { name: "Estruturas de Dados", icon: "datastructures", category: "cs" },
  { name: "Inteligência Artificial", icon: "ai", category: "ai" },
];

export const educationData = {
  university: {
    name: "Ciência da Computação",
    institution: "Universidade Federal de Itajubá (UNIFEI)",
    degree: "Bacharelado",
    status: "Em andamento",
    logo: "unifei",
  },
  courses: [
    { category: "Programação e Jogos", items: [
      { name: "Python", icon: "python" },
      { name: "C#", icon: "csharp" },
      { name: "Game Dev", icon: "gamedev" },
      { name: "Aseprite", icon: "aseprite" },
    ]},
    { category: "Automação e IA", items: [
      { name: "Make", icon: "make" },
      { name: "n8n", icon: "n8n" },
    ]},
    { category: "Infraestrutura e DevOps", items: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
    ]},
    { category: "Redes e Servidores · Fórum Telecom", items: [
      { name: "Analista de Redes", icon: "forum" },
      { name: "Servidores e Proxmox", icon: "proxmox" },
      { name: "Zabbix 7 + Grafana", icon: "zabbix" },
      { name: "MikroTik v7", icon: "mikrotik" },
      { name: "Hermes Agente para Redes com IA", icon: "hermes" },
    ]},
    { category: "Idiomas", items: [
      { name: "Inglês (Mairo Vergara)", icon: "mairo" },
    ]},
  ],
};
