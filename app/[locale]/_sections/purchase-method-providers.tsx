'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { ReactNode, useEffect, useMemo } from 'react';
import PurchaseMethodItemsJSON from '@/app/_data/cart.json';
import { purchaseMethodItemsSet } from '../main/purchase-method/[slug]/_redux/purchase-method-slice';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import { MainState } from '../main/_redux/main-state';

export default function PurchaseMethodProviders({ children }: { children: ReactNode; }) {
  const dispatch: AppDispatch = useAppDispatch();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });

  const cartType = useMemo(() => {
    const cartType = mainState.cartType;
    return cartType === 'shopping_cart' ? 'Shopping Cart' :
      cartType === 'balikbayan_box' ? 'Balikbayan Box' : '';
  }, [mainState.cartType]);

  useEffect(() => {
    if (cartType !== '') {
      dispatch(
        purchaseMethodItemsSet(
          PurchaseMethodItemsJSON.carts.map((cartType: Cart | BalikbayanBox) => {
            return { ...cartType, isGoingToCheckout: false }
          })
        )
      );
    }
  }, [cartType, dispatch]);


  return (<>{children}</>);
}