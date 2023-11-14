import { ReactNode } from 'react';
import { Footer } from './_sections/footer';
import MainHeader from './_sections/main_header';
import { MobileStickyFooter } from './_sections/mobile_sticky_footer';

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <>
      <MainHeader />
      {children}
      <Footer />
      <MobileStickyFooter />
    </>
  )
}