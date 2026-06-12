import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nilakshi Rahangdale — Full-Stack Developer',
  description:
    'Final-year CS student and full-stack developer. Building production-grade web apps, APIs, and IoT systems.',
  openGraph: {
    title: 'Nilakshi Rahangdale',
    description: 'Full-Stack Developer · Next.js · React · Node.js',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nilakshi Rahangdale — Full-Stack Developer',
    description: 'Final-year CS student and full-stack developer.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
