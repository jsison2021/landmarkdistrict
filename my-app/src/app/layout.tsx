import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif, Schibsted_Grotesk } from 'next/font/google';
import './globals.css';

const display = Schibsted_Grotesk({ subsets: ['latin'], variable: '--font-schibsted', display: 'swap' });
const italic = Instrument_Serif({ subsets: ['latin'], weight: '400', style: 'italic', variable: '--font-instrument', display: 'swap' });
const body = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });

const description = 'Restaurants, retail and services in the heart of Old Louisville, Kentucky.';

export const metadata: Metadata = {
  metadataBase: new URL('https://landmarkdistrict.com'),
  title: 'Shops at Landmark District | Old Louisville',
  description,
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Landmark District',
    title: 'Shops at Landmark District',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shops at Landmark District',
    description,
  },
};

export const viewport: Viewport = {
  themeColor: '#111412',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${italic.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
