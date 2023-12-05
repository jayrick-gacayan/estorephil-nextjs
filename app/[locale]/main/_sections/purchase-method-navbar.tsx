'use client';

import { useAppSelector, useAppDispatch } from '@/app/_hooks/redux_hooks';
import { RootState, AppDispatch } from '@/redux/store';
import { ReactNode, useMemo } from 'react';
import { MainState } from '../_redux/main_state';
import { modalProductDeliveryAddressOpened } from '../_redux/main-slice';
import PurchaseMethodDropdown from './purchase-method-dropdown';

export default function PurchaseMethodNavbar({ children }: { children: ReactNode }) {
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const dispatch: AppDispatch = useAppDispatch();
  const purchaseMethod = useMemo(() => { return mainState.purchaseMethod; }, [mainState.purchaseMethod]);

  return purchaseMethod === '' ?
    (
      <>
        <button className='transition-all delay-50 text-white border border-white py-2 px-4 h-full rounded text-xl align-middle hover:border-primary-dark hover:bg-white hover:text-primary-dark'
          onClick={() => { dispatch(modalProductDeliveryAddressOpened({ open: true, type: 'enterAddress' })) }}>
          Create Order
        </button>
        {children}
      </>
    ) :
    (
      <PurchaseMethodDropdown>{children}</PurchaseMethodDropdown>
    );
}
