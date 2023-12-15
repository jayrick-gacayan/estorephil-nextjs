'use client';

import { RootState } from '@/redux/store';
import { useRouter } from 'next-intl/client';
import Link from 'next-intl/link';
import { useEffect } from 'react';
import { getMainCategories } from '../_redux/home-thunk';
import { TYPES } from '@/inversify/types';
import { HomeRepository } from '@/repositories/home-repository';
import { homeContainer } from '@/inversify/inversify.config';
import { RequestStatus } from '@/models/result';
import Loading from '../../_components/loading';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';

export function HomeCategories() {
  const router = useRouter();
  const state = useAppSelector((state: RootState) => { return state.home; });
  const mainState = useAppSelector((state: RootState) => { return state.main });
  const dispatch = useAppDispatch();

  useEffect(() => {
    const homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository);

    dispatch(getMainCategories(homeRepository, mainState.countryPicker.value))
  }, []);

  console.log('sdjfksdjfsdf', state.categories);

  return (
    <div className='lg:block hidden flex-none border rounded border-secondary-light p-3 space-y-2 bg-white w-64'>
      <div className='flex'>
        <div className='flex-1 font-semibold'>CATEGORIES</div>
        <button className='w-auto flex-none underline text-primary text-sm hover:text-primary-dark'
          onClick={() => { router.push('/all-categories') }}>View All</button>
      </div>
      <div className='flex flex-col h-[348px]'>
        {
          state.getMainCategoriesStatus === RequestStatus.SUCCESS ?
            state.categories.map(
              (category, index) => {
                return <Link key={`${index}-categories`}
                  className='block hover:text-primary hover:underline'
                  href={'/all-categories'}>
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