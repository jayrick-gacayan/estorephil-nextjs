'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { ReactNode, useEffect, useMemo } from 'react';
import { MainState } from '../main/_redux/main_state';
import ShopMethodItemsJSON from '@/app/_data/cart.json';
import { shopMethodItemsSet } from '../main/(shopMethod)/_redux/shop-method-slice';
import { Cart } from '@/models/cart';
import { BalikbayanBox } from '@/models/balikbayan-box';

export default function ShopMethodProviders({ children }: { children: ReactNode; }) {
  const dispatch: AppDispatch = useAppDispatch();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });

  const shoppingMethod = useMemo(() => {
    return mainState.shoppingMethod;
  }, [mainState.shoppingMethod])

  useEffect(() => {
    if (shoppingMethod !== '') {
      dispatch(
        shopMethodItemsSet(ShopMethodItemsJSON.carts.map((
          (value: Cart | BalikbayanBox) => {
            return { ...value, isGoingToCheckout: false }
          }
        )))
      );
    }
  }, [shoppingMethod, dispatch]);


  return (
    <>{children}</>
  )
}