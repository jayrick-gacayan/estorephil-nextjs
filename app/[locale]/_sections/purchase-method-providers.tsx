'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { ReactNode, useMemo } from 'react';
import { MainState } from '../main/_redux/main-state';

export default function PurchaseMethodProviders({ children }: { children: ReactNode; }) {
  const dispatch: AppDispatch = useAppDispatch();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });

  const cartType = useMemo(() => {
    const cartType = mainState.cartType;
    return cartType === 'shopping_cart' ? 'Shopping Cart' :
      cartType === 'balikbayan_box' ? 'Balikbayan Box' : '';
  }, [mainState.cartType]);

  // useEffect(() => {
  //   if (cartType !== '') {
  //     dispatch(
  //       purchaseMethodItemsSet(
  //         PurchaseMethodItemsJSON.carts.map((cartType: Cart | BalikbayanBox) => {
  //           return { ...cartType, isGoingToCheckout: false }
  //         })
  //       )
  //     );
  //   }
  // }, [cartType, dispatch]);


  return (<>{children}</>);
}