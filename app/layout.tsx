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
import Providers from './_sections/providers';

export default function RootLayout({ children }: { children: ReactNode; }) {

  return (
    <Providers>
      <html>
        <body className={`${montserrat.className} text-default-dark relative`} >
          {children}
        </body>
      </html>
    </Providers>
  );
}
