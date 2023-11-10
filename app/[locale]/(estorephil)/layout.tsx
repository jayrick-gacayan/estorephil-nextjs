import { ReactNode } from 'react';
import Image from 'next/image';
import { FaCartShopping, FaEnvelope, FaPhoneFlip, FaRegHeart, FaTruck } from 'react-icons/fa6';
import { TextWithIcon } from '../_components/text_with_icon';
import { NavbarSearch } from './_sections/navbar_search';
import { Footer } from './_sections/footer';
import Link from 'next-intl/link';
import { MobileStickyFooter } from './_sections/mobile_sticky_footer';

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <>
      <header className='sticky top-0 left-0 w-full z-[9999]'>
        <div></div>
        <div className='w-full bg-primary text-white px-8 py-4'>
          <nav className='max-w-screen-2xl m-auto'>
            <div className='flex md:flex-row flex-col w-full justify-between overflow-hidden rounded p-2 md:gap-12 gap-4'>
              <Link href='/home' className='flex-none w-[160px] block relative md:h-auto h-12'>
                <Image alt='estorephil-logo'
                  src='/static_images/estorephil_logo.svg'
                  fill />
              </Link>
              <NavbarSearch />
              <div className='md:block hidden space-x-2'>
                <FaCartShopping className='w-8 h-8 inline-block' />
                <Image alt='profile-image'
                  src='/static_images/static_profile_img.png'
                  width={48}
                  height={48}
                  className='rounded-full border border-white w-12 h-12 inline-block' />
              </div>
            </div>
            <div className='flex py-2 text-[#6D96FF] text-sm '>
              <div className='flex-1 divide-x divide-[#6D96FF]'>
                <TextWithIcon text='ESTOREPHIL@GMAIL.COM' icon={<FaEnvelope className='inline-block' />} />
                <TextWithIcon text='(413)599-6034' icon={<FaPhoneFlip className='inline-block' />} />
              </div>
              <div className='divide-x divide-[#6D96FF] md:block hidden'>
                <TextWithIcon text='TRACK MY ORDER' icon={<FaTruck className='inline-block' />} />
                <TextWithIcon text='FAVORITES' icon={<FaRegHeart className='inline-block' />} />
              </div>
            </div>
          </nav>
        </div>
      </header>
      {children}
      <Footer />
      <MobileStickyFooter />
    </>
  )
}