'use client';

import { CustomerSegments } from './customer-segments';
import Link from 'next-intl/link';
import Image from 'next/image';
import { FaEnvelope, FaPhoneFlip, FaTruck, FaRegHeart, FaUser } from 'react-icons/fa6';
import { TextWithIcon } from '../_components/text-with-icon';
import { NavbarSearch } from './navbar-search';
import ShopMethodNavbar from './shop-method-navbar';

export default function MainHeader() {

  return (
    <header className='sticky top-0 left-0 w-full z-[999]'>
      <CustomerSegments />
      <div className='w-full bg-primary-dark text-white px-8 py-4'>
        <nav className='max-w-screen-2xl m-auto'>
          <div className='flex md:flex-row flex-col w-full justify-between rounded p-2 md:gap-12 gap-4'>
            <Link href='/home' className='flex-none w-[160px] block relative md:h-auto h-12'>
              <Image alt='estorephil-logo'
                src='/static_images/estorephil_logo.svg'
                fill />
            </Link>
            <NavbarSearch />
            <div className='md:block hidden space-x-3 w-auto'>
              <ShopMethodNavbar>
                <Image alt='profile-image'
                  src='/static_images/static_profile_img.png'
                  width={48}
                  height={48}
                  className='rounded-full border border-white w-12 h-12 inline-block' />
              </ShopMethodNavbar>
            </div>
          </div>
          <div className='flex py-2 text-primary-light text-sm'>
            <div className='flex-1 divide-x divide-[#6D96FF]'>
              <TextWithIcon text='ESTOREPHIL@GMAIL.COM' icon={<FaEnvelope className='inline-block' />} />
              <TextWithIcon text='(413)599-6034' icon={<FaPhoneFlip className='inline-block' />} />
            </div>
            <div className='divide-x divide-[#6D96FF] md:block hidden'>
              <TextWithIcon text='TRACK MY ORDER' icon={<FaTruck className='inline-block' />} />
              <TextWithIcon text='FAVORITES' icon={<FaRegHeart className='inline-block' />} />
              <TextWithIcon text='JAYRICK GACAYAN' icon={<FaUser className='inline-block' />} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}