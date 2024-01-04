import './globals.css';

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '@nhui | Nextjs template',
  description: 'Nextjs template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn('bg-black text-neutral-50', font.className)}>
        {children}
      </body>
    </html>
  );
}
