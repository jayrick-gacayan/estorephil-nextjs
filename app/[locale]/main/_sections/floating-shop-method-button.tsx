'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import Image from 'next/image';
import { modalProductDeliveryAddressOpened } from '../_redux/main-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { MainState } from '../_redux/main_state';
import { useMemo } from 'react';

export default function FloatingCardButton(): JSX.Element | null {
  const dispatch: AppDispatch = useAppDispatch();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });

  const purchaseMethod: string = useMemo(() => { return mainState.purchaseMethod; }, [mainState.purchaseMethod]);

  return purchaseMethod === '' ? null :
    (

      <div className='fixed bottom-8 right-[184px] z-[1999] cursor-pointer bg-primary-dark shadow-xl ml-auto flex items-center justify-center h-44 w-44 text-white rounded-full border-4 border-white p-4'
        onClick={() => {
          dispatch(modalProductDeliveryAddressOpened({ open: true, type: 'changeShopMethod' }));
        }}>
        <div className='space-y-1 '>
          <Image alt={`${purchaseMethod === 'Shopping Cart' ? 'custom_cart' : 'balik_box'}-icon-alt`}
            src={`/others/${purchaseMethod === 'Shopping Cart' ? 'custom_cart' : 'balik_box'}_icon.svg`}
            width={88}
            height={88}
            className='h-[88px] w-[88px] block m-auto' />
          <span className='block text-center'>Change</span>
        </div>
      </div>
    )
}