import { ReactNode } from 'react';
import { Footer } from './_sections/footer';
import MainHeader from './_sections/main-header';
import { MobileStickyFooter } from './_sections/mobile-sticky-footer';
import FloatingCartTypeButton from './_sections/floating-cart-type-button';
import MainLayoutModal from './_sections/main-layout-modal';
import { cookies } from 'next/headers';

export default async function Layout({ children }: { children: ReactNode }) {
  let cookieStore = cookies();

  let countryCookie = cookieStore.get('country_code');

  async function setCountryCookie(countryCode: string) {
    'use server';

    let cookieStore = cookies();


    countryCode === 'ph' ? cookieStore.delete('country_code') :
      cookieStore.set({
        name: 'country_code',
        value: countryCode,
        httpOnly: true,
        path: '/',
        secure: true,
        expires: Date.now() + (7 * 24 * 60 * 60 * 1000)
      });

  }

  return (
    <>
      <MainHeader countryCookie={countryCookie?.value ?? 'ph'}
        onCountryCookieSet={setCountryCookie} />
      {children}
      <Footer />
      <FloatingCartTypeButton />
      <MobileStickyFooter />
      <MainLayoutModal />
    </>
  )
}