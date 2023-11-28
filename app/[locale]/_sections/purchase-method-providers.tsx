'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { ReactNode, useEffect, useMemo } from 'react';
import { MainState } from '../main/_redux/main_state';
import PurchaseMethodItemsJSON from '@/app/_data/cart.json';
import { purchaseMethodItemsSet } from '../main/purchase-method/[slug]/_redux/purchase-method-slice';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';


export default function PurchaseMethodProviders({ children }: { children: ReactNode; }) {
  const dispatch: AppDispatch = useAppDispatch();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });

  const purchaseMethod = useMemo(() => {
    return mainState.purchaseMethod;
  }, [mainState.purchaseMethod])

  useEffect(() => {
    if (purchaseMethod !== '') {
      dispatch(
        purchaseMethodItemsSet(
          PurchaseMethodItemsJSON.carts.map((purchaseMethod: Cart | BalikbayanBox) => {
            return { ...purchaseMethod, isGoingToCheckout: false }
          })
        )
      );
    }
  }, [purchaseMethod, dispatch]);


  return (
    <>{children}</>
  )
}