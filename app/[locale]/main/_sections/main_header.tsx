'use client';

import { CustomerSegments } from './customer_segments';
import Link from 'next-intl/link';
import Image from 'next/image';
import { FaCartShopping, FaEnvelope, FaPhoneFlip, FaTruck, FaRegHeart, FaUser } from 'react-icons/fa6';
import { TextWithIcon } from '../_components/text-with-icon';
import { BsBox2 } from 'react-icons/bs';
import { NavbarSearch } from './navbar_search';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, StoreState } from '@/redux/store';
import { MainState } from '../_redux/main_state';
import { useMemo } from 'react';
import { onModalProductDeliveryAddressOpened } from '../_redux/main-slice';

export default function MainHeader() {
  const mainState: MainState = useAppSelector((state: StoreState) => { return state.main });
  const dispatch: AppDispatch = useAppDispatch();

  const shoppingMethod = useMemo(() => { return mainState.shoppingMethod; }, [mainState.shoppingMethod]);

  return (
    <header className='sticky top-0 left-0 w-full z-[999]'>
      <CustomerSegments />
      <div className='w-full bg-primary-dark text-white px-8 py-4'>
        <nav className='max-w-screen-2xl m-auto'>
          <div className='flex md:flex-row flex-col w-full justify-between overflow-hidden rounded p-2 md:gap-12 gap-4'>
            <Link href='/home' className='flex-none w-[160px] block relative md:h-auto h-12'>
              <Image alt='estorephil-logo'
                src='/static_images/estorephil_logo.svg'
                fill />
            </Link>
            <NavbarSearch />
            <div className='md:block hidden space-x-3 w-auto'>
              {
                shoppingMethod === '' ?
                  (
                    <button className='text-white border border-white py-2 px-4 h-full rounded text-xl align-middle'
                      onClick={() => { dispatch(onModalProductDeliveryAddressOpened('enterAddress')) }}>
                      Create Order
                    </button>
                  ) :

                  (
                    <div className='inline-flex gap-4 items-center text-sm'>
                      <div className='flex-none relative w-auto'>
                        {
                          shoppingMethod === 'Shopping Cart' ?
                            (<FaCartShopping className='w-10 h-10 inline-block align-middle' />) :
                            (<BsBox2 className='w-10 h-10 inline-block align-middle' />)
                        }
                        <span className='absolute -top-3 -right-3 rounded-full w-auto p-1.5 bg-danger'>12</span>
                      </div>
                      <div className='space-y-1'>
                        <span className='block'>CART</span>
                        <span className='block'>C&#36; {(9999).toFixed(2)}</span>
                      </div>
                    </div>
                  )
              }

              <Image alt='profile-image'
                src='/static_images/static_profile_img.png'
                width={48}
                height={48}
                className='rounded-full border border-white w-12 h-12 inline-block' />
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