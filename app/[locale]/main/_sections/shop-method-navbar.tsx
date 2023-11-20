'use client';

import { useAppSelector, useAppDispatch } from '@/app/_hooks/redux_hooks';
import { RootState, AppDispatch } from '@/redux/store';
import { ReactNode, useMemo } from 'react';
import { MainState } from '../_redux/main_state';
import { modalProductDeliveryAddressOpened } from '../_redux/main-slice';
import ShopMethodDropdown from './shop-method-dropdown';

export default function ShopMethodNavbar({ children }: { children: ReactNode }) {
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const dispatch: AppDispatch = useAppDispatch();
  const shoppingMethod = useMemo(() => { return mainState.shoppingMethod; }, [mainState.shoppingMethod]);

  return shoppingMethod === '' ?
    (
      <>
        <button className='text-white border border-white py-2 px-4 h-full rounded text-xl align-middle'
          onClick={() => { dispatch(modalProductDeliveryAddressOpened({ open: true, type: 'enterAddress' })) }}>
          Create Order
        </button>
        {children}
      </>
    ) :
    (
      <ShopMethodDropdown>{children}</ShopMethodDropdown>
    );
}
