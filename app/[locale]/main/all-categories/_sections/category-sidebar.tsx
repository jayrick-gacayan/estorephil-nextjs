'use client';

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from 'next-intl/client';
import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { useCallback, useEffect, useMemo } from 'react';
import { AppDispatch, RootState } from '@/redux/store';
import { getMainCategories, searchProducts } from '../_redux/all-categories-thunk';
import { homeContainer, productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { HomeRepository } from '@/repositories/home-repository';
import { categoriesSelectedChanged, searchQueryChanged } from '../_redux/all-categories-slice';
import { ProductRepository } from '@/repositories/product-repository';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { MainState } from '../../_redux/main-state';
import { useForceUpdate } from 'framer-motion';

export function CategorySidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch: AppDispatch = useAppDispatch()
  const pathName: string = usePathname();

  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; })

  let locale = useMemo(() => {
    return mainState.countryPicker.value;
  }, [mainState.countryPicker.value]);

  const allCategoriesState = useAppSelector((state: RootState) => state.allCategories);

  let searchParamsMemo = useMemo(() => { return searchParams }, [searchParams])
  let { categories, categoriesSelected } = useMemo(() => {
    return {
      categories: allCategoriesState.categories,
      categoriesSelected: allCategoriesState.categoriesSelected
    }
  }, [allCategoriesState.categories, allCategoriesState.categoriesSelected])

  useEffect(() => {
    const homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository);
    dispatch(getMainCategories(homeRepository, locale));
  }, [dispatch, locale]);

  useEffect(() => {
    let getAllCategories = searchParamsMemo.getAll('category[]');
    if (categoriesSelected.length === 0 && getAllCategories.length > 0) {
      getAllCategories.forEach((value: string) => {
        dispatch(categoriesSelectedChanged(value));
      })
    }
    else if (categoriesSelected.length === 1 && getAllCategories.length === 0) {
      dispatch(categoriesSelectedChanged(categoriesSelected[0]));
    }
    else {

      // for (let i: number = 0; i < categoriesSelected.length; i++) {
      //   let getBreak = false;
      //   for (let j: number = 0; j < getAllCategories.length; j++) {
      //     if (!categoriesSelected.includes(getAllCategories[j])) {
      //       getBreak = true;
      //       dispatch(categoriesSelectedChanged(getAllCategories[j]));
      //       break;
      //     }
      //   }
      // }
      getAllCategories.forEach((value: string) => {
        if (!categoriesSelected.includes(value)) {
          dispatch(categoriesSelectedChanged(value));
        }
      })

      categoriesSelected.forEach((value: string) => {
        if (!getAllCategories.includes(value)) {
          dispatch(categoriesSelectedChanged(value));
        }
      })
    }
  }, [searchParamsMemo, categoriesSelected, dispatch]);

  useEffect(() => {
    const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
    dispatch(searchProducts(productRepository, locale))
  }, [dispatch, locale]);

  return (
    <div className='flex-none bg-white w-[320px] border-r border-r-tertiary-dark py-2'>
      <div className='space-y-3 w-3/4 m-auto'>
        <div className='font-bold'>Categories</div>
        <div className='block space-y-4'>
          {
            categories.map((category: any, index: number) => {
              return (
                <Checkbox<boolean> key={`category-${index}-${category.name}`}
                  labelText={category.name}
                  labelClassname={(value: boolean, current: boolean) => {
                    return `inline-block text-sm flex-1 ${value === current ? 'text-primary' : 'text-inherit'}`;
                  }}
                  value={true}
                  checkBoxClassName={(value: boolean, current: boolean) => {
                    return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-tertiary-dark'} rounded w-6 h-6`;
                  }}
                  checkClassName={(value: boolean, current: boolean) => {
                    return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
                  }}
                  current={categoriesSelected.includes(category.name)}
                  onCheckboxChanged={(value: boolean) => {

                    let current: URLSearchParams = new URLSearchParams(Array.from(searchParams.entries()));

                    value ? current.delete('category[]', category.name) :
                      current.append('category[]', category.name);

                    const query = current.toString() === '' ? '' : `?${current.toString()}`;

                    console.log('query', query, value);
                    router.push(`${pathName}${query}`)
                  }} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}