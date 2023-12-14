import { ReactNode } from 'react';
import { Footer } from './_sections/footer';
import MainHeader from './_sections/main-header';
import { MobileStickyFooter } from './_sections/mobile-sticky-footer';
import FloatingCartTypeButton from './_sections/floating-cart-type-button';
import MainLayoutModal from './_sections/main-layout-modal';

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <>
      <MainHeader />
      {children}
      <Footer />
      <FloatingCartTypeButton />
      <MobileStickyFooter />
      <MainLayoutModal />
    </>
  )
}