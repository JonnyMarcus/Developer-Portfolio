import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jonnymarcus.dev'),
  title: 'Portfólio – Jonny Marcus',
  description: 'Portfólio de Jonny Marcus, Desenvolvedor Full Stack em formação. Estudante de Ciência da Computação na UNIFEI.',
  keywords: [
    'Jonny Marcus',
    'Desenvolvedor Full Stack',
    'UNIFEI',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Portfólio',
  ],
  authors: [{ name: 'Jonny Marcus' }],
  creator: 'Jonny Marcus',
  icons: {
    icon: '/assets/61a71057a4089ccd6be31f5025f751e3.jpg',
  },
  openGraph: {
    title: 'Portfólio – Jonny Marcus',
    description: 'Estudante de Ciência da Computação na UNIFEI, apaixonado por tecnologia, desenvolvimento de software e soluções digitais.',
    type: 'website',
    images: [
      {
        url: '/assets/61a71057a4089ccd6be31f5025f751e3.jpg',
        width: 800,
        height: 600,
        alt: 'Jonny Marcus Portfólio',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0715',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
