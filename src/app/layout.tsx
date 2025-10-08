import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/layout/Footer';
import { Source_Code_Pro, Inter, Space_Grotesk, Kalam } from 'next/font/google';

// Inter (Main Sans-Serif / UI Font)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap', // Retains the original display setting
});

// Source Code Pro (Monospace Font for Code)
const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-source-code-pro',
  display: 'swap',
});

// Space Grotesk (Display / Heading Font)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

// Kalam (Handwriting / Cursive Font)
const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-kalam',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SkullBrain',
  description: 'Coding is a skibidi rizz.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.className} ${sourceCodePro.variable} ${spaceGrotesk.variable} ${kalam.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
