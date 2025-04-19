import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InvestFlow - Smart Stock Analysis & Portfolio Optimization',
  description:
    'Make data-driven investment decisions with powerful stock analysis and portfolio allocation based on Modern Portfolio Theory.',
  keywords: [
    'stock analysis',
    'portfolio optimization',
    'investment',
    'modern portfolio theory',
    'financial analysis',
    'stock market',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
