import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Inter is the display sans for H1s and large text (per BRAND.md).
// Body and HUD chrome stay on JetBrains Mono (loaded via CSS).
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Bold And Digital — Visual Storytelling Studio',
  description:
    'A design and engineering studio for brands shaping tomorrow. We fuse three-dimensional web, AI automation and razor-sharp brand strategy into one shipping crew.',
  metadataBase: new URL('https://boldandigital-visual-storytelling-v.vercel.app'),
  applicationName: 'Bold And Digital',
  authors: [{ name: 'Bold And Digital' }],
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    title: 'Bold And Digital — Visual Storytelling Studio',
    description: 'Three-dimensional web, AI automation, brand strategy. For the bold.',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'Bold And Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bold And Digital — Visual Storytelling Studio',
    description: 'Three-dimensional web, AI automation, brand strategy. For the bold.',
    images: ['/icon-512.png'],
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#000408',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
