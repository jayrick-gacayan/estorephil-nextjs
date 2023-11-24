'use client';

import { ReactNode, useMemo } from 'react';
import { useAppSelector } from '@/app/_hooks/redux_hooks';
import { RootState } from '@/redux/store';
import ShopMethodHeader from './shop-method-header';
import SummaryCheckout from './summary-checkout';
import { ShopMethodState } from '../_redux/shop-method-state';
import { MainState } from '../../_redux/main_state';
import { redirect } from 'next/navigation';

export default function LayoutContainer({
  checkoutSlug,
  children
}: {
  checkoutSlug: string;
  children: ReactNode;
}): JSX.Element {
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const shopMethodState: ShopMethodState = useAppSelector((state: RootState) => { return state.shopMethod; });

  const shoppingMethod = useMemo(() => { return mainState.shoppingMethod; }, [mainState.shoppingMethod])
  const shopMethodItems = useMemo(() => {
    return shopMethodState.shopMethodItems;
  }, [shopMethodState.shopMethodItems]);

  if (shoppingMethod === '') {
    redirect('/')
  }

  return shopMethodItems.length === 0 ? (<>{children}</>) :
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