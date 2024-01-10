'use client';

import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from 'next-intl/client';
import { useEffect, useMemo } from 'react';
import { AppDispatch, RootState, store } from '@/redux/store';
import { getMainCategories, searchProducts } from '../_redux/all-categories-thunk';
import { homeContainer, productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { HomeRepository } from '@/repositories/home-repository';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelectedChanged, searchQueryChanged, setSelectedCategory } from '../_redux/all-categories-slice';
import { ProductRepository } from '@/repositories/product-repository';
import { useAppDispatch } from '@/app/_hooks/redux_hooks';

export function CategorySidebar({ countryCode }: { countryCode: string }) {
  const router = useRouter();
  const allSearchParams = useSearchParams()
  const searchParams = useSearchParams();
  const dispatch: AppDispatch = useAppDispatch()
  const pathName = usePathname()
  const locale = useSelector((state: RootState) => state.main).countryPicker.value
  const homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository)
  const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
  const state = useSelector((state: RootState) => state.allCategories);

  const categories = useMemo(() => {
    return state.categories.map((value) => {
      return {
        ...value,
        selected: state.categoriesSelected.includes(value.name) ||
          searchParams.getAll('category').includes(value.name)
      }
    })
  }, [state.categories, searchParams]);

  useEffect(() => {
    dispatch(getMainCategories(homeRepository, countryCode))
  }, [dispatch, countryCode])

  useEffect(() => {
    let allCategories = searchParams.getAll('category')
    if (allCategories.length > 0) {
      allCategories.forEach((value: string) => {
        dispatch(setSelectedCategory(value))
      })
    }

  }, [dispatch, searchParams]);

  useEffect(() => {
    store.dispatch(searchProducts(productRepository, countryCode))
  }, [state.categoriesSelected])

  return (
    <div className='flex-none bg-white w-[320px] border-r border-r-tertiary-dark py-2'>
      <div className='space-y-3 w-3/4 m-auto'>
        <div className='font-bold'>Categories</div>
        <div className='block space-y-4'>
          {categories.map((category, index) => {
            return (
              <div className={`flex items-center category-${index} gap-2`} key={index}>
                <input
                  type='checkbox'
                  defaultValue={category.name}
                  className='accent-primary text-slate-800'
                  value={category.name}
                  checked={category.selected}
                  onChange={() => {
                    const current = new URLSearchParams(Array.from(allSearchParams.entries()));
                    dispatch(categoriesSelectedChanged(category.name))
                    if (category.selected) {
                      current.delete(`category[${index}]`)
                      current.delete('category[]')
                    }
                    else {
                      current.set(`category[${index}]`, category.name);
                    }
                    const search = current.toString();
                    const query = search ? `?${search}` : "";
                    router.push(`${pathName}${query}`)
                  }}
                />
                <label htmlFor={`category-${index}`}>{category.name}</label>
              </div>

              // <Checkbox<string> key={`category-${index}-${category.name}`}
              //   labelText={category.name}
              //   labelClassname={(value: string, current: string) => {
              //     return `inline-block text-sm flex-1 ${value === current ? 'text-primary' : 'text-inherit'}`;
              //   }}
              //   value={category.name}
              //   checkBoxClassName={(value: string, current: string) => {
              //     return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-tertiary'} rounded w-6 h-6`;
              //   }}
              //   checkClassName={(value: string, current: string) => {
              //     return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
              //   }}
              //   current={searchParams.get('keyword') ?? ''}
              //   onCheckboxChanged={(text: string) => {
              //     let queryStringSearch = new URLSearchParams();
              //     queryStringSearch.set('keyword', text);
              //     router.push(window.location.pathname + '?' + queryStringSearch.toString());
              //   }}
              // />
            )
          })
          }
        </div>
      </div>
    </div>
  )
}