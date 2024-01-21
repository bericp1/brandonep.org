import type { Metadata } from 'next';
import clsx from 'clsx';
import { Cabin } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const primaryFont = Cabin({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brandon Phillips - Software Engineer',
  description:
    "Hey there! I'm a principal-level software engineer who " +
    'specializes in infrastructure, DevOps, automation, and backend.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(primaryFont.className, 'bg-paper')}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
