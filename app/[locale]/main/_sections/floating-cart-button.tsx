'use client';

import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import Image from 'next/image';
import { onModalProductDeliveryAddressOpened } from '../_redux/main-slice';

export default function FloatingCardButton() {
  const dispatch = useAppDispatch();

  return (
    <div className='fixed bottom-8 right-0 w-full z-[1999]'>
      <div className='max-w-screen-2xl m-auto'>
        <div className='cursor-pointer bg-primary-dark shadow-xl ml-auto flex items-center justify-center h-44 w-44 text-white rounded-full border-4 border-white p-4'
          onClick={() => {
            dispatch(onModalProductDeliveryAddressOpened('enterAddress'))
          }}>
          <div className='space-y-1 '>
            <Image alt='custom-cart-icon'
              src='/others/custom_cart_icon.png'
              width={88}
              height={88}
              className='h-[88px] w-[88px] block m-auto' />
            <span className='block text-center'>Change</span>
          </div>
        </div>
      </div>
    </div>
  )
}