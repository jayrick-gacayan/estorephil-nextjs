import { ReactNode } from 'react';
import { Footer } from './_sections/footer';
import MainHeader from './_sections/main-header';
import { MobileStickyFooter } from './_sections/mobile-sticky-footer';
import FloatingCardButton from './_sections/floating-cart-button';
import ProductDeliveryAddressModal from './_sections/product-delivery-address-modal';

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <>
      <MainHeader />
      {children}
      <Footer />
      <FloatingCardButton />
      <MobileStickyFooter />
      <ProductDeliveryAddressModal />
    </>
  )
}