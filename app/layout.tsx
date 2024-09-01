// app/layout.tsx
import type { Metadata } from 'next';

import './globals.css';

import { Footer, NavBar } from '@/components';

export const metadata: Metadata = {
  title: 'QuikCarZ App',
  description:
    'Discover the easiest way to find, book, and rent the perfect car',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative max-w-[1440px] mx-auto">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
