'use client';

import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from 'next-intl/client';
import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { useEffect } from 'react';
import { RootState, store } from '@/redux/store';
import { getMainCategories, searchProducts } from '../_redux/all-categories-thunk';
import { homeContainer, productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { HomeRepository } from '@/repositories/home-repository';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelectedChanged, searchQueryChanged } from '../_redux/all-categories-slice';
import { ProductRepository } from '@/repositories/product-repository';

export function CategorySidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch()
  const pathName = usePathname()
  const locale = useSelector((state: RootState) => state.main).countryPicker.value
  const homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository)
  const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
  const state = useSelector((state: RootState) => state.allCategories)
  const categories: any[] = useSelector((state: RootState) => state.allCategories).categories.map(category => ({
    ...category,
    selected: state.categoriesSelected.includes(category.name)
  }))
  useEffect(() => {
    if (state.categoriesSelected.length == 0) {
      console.log('searchQueryValue:', searchParams)
      if (!!searchParams) {
        dispatch(searchQueryChanged(searchParams.get('search') ?? ``))
        console.log('has search query:', searchParams.get('search'))
        console.log('search query value:', searchParams)
        router.push(`${pathName}?search=${searchParams.get('search')}`)
      }
      else {
        console.log('no search query')
        router.push(`${pathName}`)
      }

    }
    store.dispatch(getMainCategories(homeRepository, locale))
  }, [])
  useEffect(() => {
    store.dispatch(searchProducts(productRepository, locale))
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
                    const current = new URLSearchParams(Array.from(searchParams.entries()));
                    dispatch(categoriesSelectedChanged(category.name))
                    if (category.selected) {
                      current.delete(`category[${index}]`)
                    }
                    else {
                      console.log('category set')
                      current.set(`category[${index}]`, category.name);
                      console.log('search query', current)

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