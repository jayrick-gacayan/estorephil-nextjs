'use client';

import { ReactNode, useMemo } from 'react';
import { useAppSelector } from '@/app/_hooks/redux_hooks';
import { RootState } from '@/redux/store';
import { PurchaseMethodState } from '../_redux/purchase-method-state';
import { MainState } from '../../../_redux/main_state';
import ShopMethodHeader from './purchase-method-header';
import SummaryCheckout from './summary-checkout';


export default function LayoutContainer({
  checkoutSlug,
  children
}: {
  checkoutSlug: string;
  children: ReactNode;
}): JSX.Element | null {

  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const purchaseMethodState: PurchaseMethodState = useAppSelector((state: RootState) => { return state.purchaseMethod; });

  const purchaseMethod = useMemo(() => { return mainState.purchaseMethod; }, [mainState.purchaseMethod])
  const purchaseMethodItems = useMemo(() => {
    return purchaseMethodState.purchaseMethodItems;
  }, [purchaseMethodState.purchaseMethodItems]);

  return purchaseMethod === '' ? null :
    purchaseMethodItems.length === 0 ? (<>{children}</>) :
      (
        <div className='flex'>
          <div className='flex-1 bg-white'>
            <ShopMethodHeader text={checkoutSlug.toUpperCase()} />
            <div className='p-8 space-y-3'>
              {children}
            </div>
          </div>
          <SummaryCheckout />
        </div>
      )
}