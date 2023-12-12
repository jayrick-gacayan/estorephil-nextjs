'use client';

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from 'next-intl/client';
import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { useEffect } from 'react';
import { RootState, store } from '@/redux/store';
import { getMainCategories } from '../_redux/all-categories-thunk';
import { homeContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { HomeRepository } from '@/repositories/home-repository';
import { useSelector } from 'react-redux';

export function CategorySidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const mainState = useSelector((state: RootState) => state.main)
  const homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository)
  const categories: any[] = useSelector((state: RootState) => state.allCategories).categories
  useEffect(() => {
    store.dispatch(getMainCategories(homeRepository, mainState.countryPicker.value))
  }, [])
  return (
    <div className='flex-none bg-white w-[320px] border-r border-r-tertiary-dark py-2'>
      <div className='space-y-3 w-3/4 m-auto'>
        <div className='font-bold'>Categories</div>
        <div className='block space-y-4'>
          {categories.map((category, index) => {
            return (
              <Checkbox<string> key={`category-${index}-${category.name}`}
                labelText={category.name}
                labelClassname={(value: string, current: string) => {
                  return `inline-block text-sm flex-1 ${value === current ? 'text-primary' : 'text-inherit'}`;
                }}
                value={category.name}
                checkBoxClassName={(value: string, current: string) => {
                  return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-tertiary'} rounded w-6 h-6`;
                }}
                checkClassName={(value: string, current: string) => {
                  return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
                }}
                current={searchParams.get('keyword') ?? ''}
                onCheckboxChanged={(text: string) => {
                  let queryStringSearch = new URLSearchParams();
                  queryStringSearch.set('keyword', text);
                  router.push(window.location.pathname + '?' + queryStringSearch.toString());
                }} />
            )
          })
          }
        </div>
      </div>
    </div>
  )
}