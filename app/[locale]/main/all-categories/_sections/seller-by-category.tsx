'use client';

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { categoryContainer, storeContainer, } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { AppDispatch, RootState } from '@/redux/store';
import { getMainStores } from '../_redux/all-categories-thunk';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { MainState } from '../../_redux/main-state';
import { AllCategoriesState } from '../_redux/all-categories-state';
import { TextInputField } from '@/types/props/text-input-field';
import { StoreRepository } from '@/repositories/store-repository';
import { Store } from '@/models/store';
import { StoreItem } from '../../_components/store-item';

export default function SellerByCategory() {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main })
  const allCategoriesState: AllCategoriesState = useAppSelector((state: RootState) => { return state.allCategories; })
  const dispatch: AppDispatch = useAppDispatch();

  let countryPicker: TextInputField<string> = useMemo(() => {
    return mainState.countryPicker;
  }, [mainState.countryPicker]);

  const stores: Store[] = useMemo(() => { return allCategoriesState.stores }, [allCategoriesState.stores])

  useEffect(() => {
    const storeRepository: StoreRepository = storeContainer.get<StoreRepository>(TYPES.StoreRepository);
    dispatch(getMainStores(storeRepository, countryPicker.value))
  }, [dispatch, countryPicker.value]);

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