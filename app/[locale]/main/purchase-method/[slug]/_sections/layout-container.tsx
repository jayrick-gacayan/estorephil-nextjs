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
import { useSession } from 'next-auth/react';

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
  const { data: sessionData } = useSession();
  const cartType = useMemo(() => {
    const cartType = !!sessionData ? sessionData?.cart?.cart_type : mainState.cartType;
    return cartType === 'shopping_cart' ? 'Shopping Cart' :
      cartType === 'balikbayan_box' ? 'Balikbayan Box' : '';
  }, [mainState.cartType]);
  const cartProducts = !!sessionData ? sessionData?.cart?.cart_products : mainState?.cart?.cart_products;
  // const purchaseMethodItems = useMemo(() => {
  //   return purchaseMethodState.purchaseMethodItems;
  // }, [purchaseMethodState.purchaseMethodItems]);

  return cartType === '' ? null :
    cartProducts.length === 0 ? (<>{children}</>) :
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
              cartProducts.filter((value: any) => {
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