'use client';

import { RootState, store } from '@/redux/store';
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

  useEffect(() => {
    const homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository);

    store.dispatch(getMainCategories(homeRepository, mainState.countryPicker.value))
  }, [])
  return (
    <div className='lg:block hidden flex-none border rounded border-secondary-light p-3 space-y-2 bg-white w-64'>
      <div className='flex'>
        <div className='flex-1 font-semibold text-sm'>CATEGORIES</div>
        <button className='w-auto flex-none underline text-primary text-xs hover:text-primary-dark'
          onClick={() => { router.push('/all-categories') }}>View All</button>
      </div>
      <div className='flex flex-col h-[calc(400px-52px)]'>
        {
          state.getMainCategoriesStatus === RequestStatus.SUCCESS ?
            state.categories.map(
              (category, index) => {
                return <Link key={`${index}-categories`} className='block text-sm hover:text-primary hover:underline' href={'/all-categories'}>
                  {category.name}
                </Link>
              }
            )
            :
            (
              <div className='flex items-center h-full justify-center'>
                <Loading height={64} width={64} />
              </div>
            )
        }
      </div>
    </div>
  )
}