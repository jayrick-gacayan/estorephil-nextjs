'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { ReactNode, useEffect, useMemo } from 'react';
import { MainState } from '../main/_redux/main_state';
import ShopMethodItemsJSON from '@/app/_data/cart.json';
import { purchaseMethodItemsSet } from '../main/purchase-method/[slug]/_redux/purchase-method-slice';


export default function ShopMethodProviders({ children }: { children: ReactNode; }) {
  const dispatch: AppDispatch = useAppDispatch();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });

  const purchaseMethod = useMemo(() => {
    return mainState.purchaseMethod;
  }, [mainState.purchaseMethod])

  useEffect(() => {
    if (purchaseMethod !== '') {
      dispatch(
        purchaseMethodItemsSet([])
      );
    }
  }, [purchaseMethod, dispatch]);


  return (
    <>{children}</>
  )
}