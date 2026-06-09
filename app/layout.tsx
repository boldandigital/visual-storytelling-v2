import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bold And Digital — Scroll-Driven Visual Storytelling',
  description:
    'We design, build and ship scroll-driven 3D websites, AI automations, brand imagery and high-performance hosting for the next generation of digital-first companies.',
  metadataBase: new URL('https://boldandigital.com'),
  openGraph: {
    title: 'Bold And Digital',
    description:
      'Scroll-driven 3D web, AI automations, and high-performance hosting for ambitious brands.',
    type: 'website',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'Bold And Digital' }],
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
