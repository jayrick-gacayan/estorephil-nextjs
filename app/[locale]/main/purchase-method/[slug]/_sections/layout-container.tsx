'use client';

import { ReactNode, useMemo } from 'react';
import { useAppSelector } from '@/app/_hooks/redux_hooks';
import { RootState } from '@/redux/store';
import { PurchaseMethodState } from '../_redux/purchase-method-state';

import ShopMethodHeader from './purchase-method-header';
import SummaryCheckout from './summary-checkout';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import { useRouter } from 'next-intl/client';
import { MainState } from '../../../_redux/main-state';

export default function LayoutContainer({
  checkoutSlug,
  children
}: {
  checkoutSlug: string;
  children: ReactNode;
}): JSX.Element | null {
  const router = useRouter();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const purchaseMethodState: PurchaseMethodState = useAppSelector((state: RootState) => { return state.purchaseMethod; });

  const cartType = useMemo(() => {
    const cartType = mainState.cartType;
    return cartType === 'shopping_cart' ? 'Shopping Cart' :
      cartType === 'balikbayan_box' ? 'Balikbayan Box' : '';
  }, [mainState.cartType]);

  const purchaseMethodItems = useMemo(() => {
    return purchaseMethodState.purchaseMethodItems;
  }, [purchaseMethodState.purchaseMethodItems]);

  return cartType === '' ? null :
    purchaseMethodItems.length === 0 ? (<>{children}</>) :
      (
        <div className='flex'>
          <div className='flex-1 bg-white'>
            <ShopMethodHeader text={checkoutSlug === 'balikbayan' ? 'BALIKBAYAN' : 'CART'} />
            <div className='p-8 space-y-3'>
              {children}
            </div>
          </div>
          <SummaryCheckout
            totalItems={
              purchaseMethodItems.filter((value: Cart | BalikbayanBox) => {
                return value.isGoingToCheckout
              }).length
            }
            onRedirectToCheckout={
              () => {
                router.push('/checkout/sender');
              }
            } />
        </div>
      )
}