'use client';

import { AppDispatch, RootState } from '@/redux/store';
import { useRouter } from 'next-intl/client';
import Link from 'next-intl/link';
import { useEffect, useMemo } from 'react';
import { getMainCategories } from '../_redux/home-thunk';
import { TYPES } from '@/inversify/types';
import { categoryContainer } from '@/inversify/inversify.config';
import Loading from '../../_components/loading';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { HomeState } from '../_redux/home-state';
import { RequestStatus } from '@/types/enums/request-status';
import { categoriesRequestStatusSet } from '../_redux/home-slice';
import { Categories } from '@/models/category';
import { HiOutlineExclamation } from 'react-icons/hi';
import { MainState } from '../../_redux/main-state';
import { CategoryRepository } from '@/repositories/category-repository';

export function HomeCategories({ countryCode }: { countryCode: string }) {
  const router = useRouter();
  const homeState: HomeState = useAppSelector((state: RootState) => { return state.home; });
  const dispatch: AppDispatch = useAppDispatch();

  let categoriesRequestStatus: RequestStatus = useMemo(() => {
    return homeState.getMainCategoriesStatus
  }, [homeState.getMainCategoriesStatus]);


  useEffect(() => {
    dispatch(categoriesRequestStatusSet(RequestStatus.WAITING));
    dispatch(categoriesRequestStatusSet(RequestStatus.IN_PROGRESS));
    const categoryRepository = categoryContainer.get<CategoryRepository>(TYPES.CategoryRepository);
    dispatch(getMainCategories(categoryRepository, countryCode));
  }, [dispatch, countryCode]);

  return (
    <div className='lg:block hidden flex-none border rounded border-secondary-light p-3 space-y-2 bg-white w-64'>
      <div className='flex'>
        <div className='flex-1 font-semibold'>CATEGORIES</div>
        <Link href='/all-categories'
          className='w-auto flex-none underline text-primary text-sm hover:text-primary-dark'>View All</Link>
      </div>
      <div className='flex flex-col h-[348px]'>
        {
          categoriesRequestStatus === RequestStatus.SUCCESS ?
            homeState.categories.map(
              (category: Categories, index) => {
                return <Link key={`${index}-categories`}
                  className='block hover:text-primary hover:underline'
                  href={{
                    pathname: '/all-categories',
                    query: { "category[]": category.name }
                  }}>
                  {category.name}
                </Link>
              }
            )
            :
            (
              <div className='flex items-center h-full justify-center'>
                {
                  categoriesRequestStatus === RequestStatus.FAILURE ?
                    (
                      <div className='flex-none w-auto text-secondary-light'>
                        <HiOutlineExclamation size={24} className="inline-block" />
                        <span className='inline-block'>No categories yet</span>
                      </div>
                    ) :
                    (<Loading />)
                }
              </div>
            )
        }
      </div>
    </div>
  )
}