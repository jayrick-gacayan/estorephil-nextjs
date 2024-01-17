'use client';

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { homeContainer, storeContainer, } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { AppDispatch, RootState } from '@/redux/store';
import { getMainStores } from '../_redux/all-categories-thunk';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { MainState } from '../../_redux/main-state';
import { AllCategoriesState } from '../_redux/all-categories-state';
import { StoreRepository } from '@/repositories/store-repository';
import { Store } from '@/models/store';
import { StoreItem } from '../../_components/store-item';
import { HomeRepository } from '@/repositories/home-repository';

export default function SellerByCategory({ countryCode }: { countryCode: string }) {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main })
  const allCategoriesState: AllCategoriesState = useAppSelector((state: RootState) => { return state.allCategories; })
  const dispatch: AppDispatch = useAppDispatch();
  const homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository)

  const stores: Store[] = useMemo(() => { return allCategoriesState.stores }, [allCategoriesState.stores])

  useEffect(() => {
    const storeRepository: StoreRepository = storeContainer.get<StoreRepository>(TYPES.StoreRepository);
    dispatch(getMainStores(homeRepository, countryCode))
  }, [dispatch, countryCode]);

  return (
    <div className='flex gap-4'>
      {
        stores.map((store: Store, index: number) => {
          return (
            <StoreItem store={store} key={`stores-all-categories-${store.id}-${index}`} />
          )
        })
      }
    </div>
  )
}