import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bold And Digital — 3D Web Storytelling for Visionary Brands',
  description:
    'We design, build and ship scroll-driven 3D websites, AI automations, brand imagery and high-performance hosting for the next generation of digital-first companies.',
  metadataBase: new URL('https://boldandigital.com'),
  openGraph: {
    title: 'Bold And Digital',
    description:
      '3D web storytelling, AI automations, and high-performance hosting for ambitious brands.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#051E40',
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
