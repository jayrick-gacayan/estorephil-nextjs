import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '400', '700', '900'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

import './globals.css';

export default function RootLayout({ children }: { children: ReactNode; }) {

  return (
    <html>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
