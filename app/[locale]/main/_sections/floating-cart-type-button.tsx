'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import Image from 'next/image';
import { isToChangeSet, mainModalOpened } from '../_redux/main-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { useMemo } from 'react';
import { MainState } from '../_redux/main-state';
import { useSession } from 'next-auth/react';

export default function FloatingCartTypeButton(): JSX.Element | null {
  const dispatch: AppDispatch = useAppDispatch();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const { data: sessionData } = useSession()
  const cartType = useMemo(() => {
    const cartType = mainState.cartType;
    return cartType === 'shopping_cart' ? 'Shopping Cart' :
      cartType === 'balikbayan_box' ? 'Balikbayan Box' : '';
  }, [mainState.cartType]);

  return cartType === '' ? !!sessionData?.cart ?
    (
      <div className='fixed bottom-8 right-[184px] z-[1999] cursor-pointer bg-primary-dark shadow-xl ml-auto flex items-center justify-center h-44 w-44 text-white rounded-full border-4 border-white p-4
        hover:border-primary-dark hover:bg-white hover:text-primary-dark'
        onClick={() => {
          dispatch(isToChangeSet(true));
          dispatch(mainModalOpened({ open: true, type: 'deliveryAddress' }));
        }}>
        <div className='space-y-1 '>
          {
            sessionData.cart.cart_type === 'shopping_cart'
              ? (<>
                <Image alt={`custom_cart-icon-alt`}
                  src={`/others/custom_cart_icon.svg`}
                  width={88}
                  height={88}
                  className='h-[88px] w-[88px] block m-auto' /></>)
              : (<>
                <Image alt={`balik_box-icon-alt`}
                  src={`/others/balik_box_icon.svg`}
                  width={88}
                  height={88}
                  className='h-[88px] w-[88px] block m-auto' /></>)
          }

          <span className='block text-center'>Change</span>
        </div>
      </div>
    ) : null : null
}