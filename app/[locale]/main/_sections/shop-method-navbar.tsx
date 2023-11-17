'use client';

import { useAppSelector, useAppDispatch } from '@/app/_hooks/redux_hooks';
import { RootState, AppDispatch } from '@/redux/store';
import { useMemo } from 'react';
import { MainState } from '../_redux/main_state';
import { modalProductDeliveryAddressOpened } from '../_redux/main-slice';
import { FaCartShopping } from 'react-icons/fa6';
import { BsBox2 } from 'react-icons/bs';

export default function ShopMethodNavbar() {
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const dispatch: AppDispatch = useAppDispatch();

  const shoppingMethod = useMemo(() => { return mainState.shoppingMethod; }, [mainState.shoppingMethod]);

  return shoppingMethod === '' ?
    (
      <button className='text-white border border-white py-2 px-4 h-full rounded text-xl align-middle'
        onClick={() => { dispatch(modalProductDeliveryAddressOpened({ open: true, type: 'enterAddress' })) }}>
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