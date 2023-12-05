'use client';

import { RootState, store } from '@/redux/store';
import { LinkProps } from '@/types/props/link-props';
import { useRouter } from 'next-intl/client';
import Link from 'next-intl/link';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getMainCategories } from '../_redux/home-thunk';
import { TYPES } from '@/inversify/types';
import { HomeRepository } from '@/repositories/home-repository';
import { homeContainer } from '@/inversify/inversify.config';
import { RequestStatus } from '@/models/result';
import Loading from '../../_components/loading';

export function HomeCategories() {
  const router = useRouter();
  const state = useSelector((state: RootState) => state.home)
  const mainState = useSelector((state: RootState) => state.main)
  const homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository)
  useEffect(() => {
    store.dispatch(getMainCategories(homeRepository, mainState.countryPicker.value))
  }, [])
  return (
    <div className='lg:block hidden flex-none border rounded border-[#9CB4CC] p-3 space-y-2 bg-white w-64'>
      <div className='flex'>
        <div className='flex-1 font-semibold'>CATEGORIES</div>
        <button className='w-auto flex-none underline text-primary hover:text-primary-dark'
          onClick={() => { router.push('/all-categories') }}>View All</button>
      </div>
      <div className='flex flex-col gap-[4px] text-secondary'>
        {state.getMainCategoriesStatus === RequestStatus.SUCCESS ?
          state.categories.map((category, index) =>
            <><Link key={index} className='block text-sm hover:text-primary hover:underline' href={'/all-categories'}>{category.name}</Link>
            </>
          )
          : <Loading />
        }
      </div>
    </div>
  )
}