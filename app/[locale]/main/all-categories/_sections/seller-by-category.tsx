'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import SellersJSON from '@/app/_data/seller.json';
import { Seller } from '@/models/seller';
import { useEffect } from 'react';
import { homeContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { RootState, store } from '@/redux/store';
import { HomeRepository } from '@/repositories/home-repository';
import { useSelector } from 'react-redux';
import { getMainStores } from '../_redux/all-categories-thunk';

export default function SellerByCategory() {
  const searchParams = useSearchParams();
  const mainState = useSelector((state: RootState) => state.main)
  const homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository)
  const stores: any[] = useSelector((state: RootState) => state.allCategories).stores
  useEffect(() => {
    store.dispatch(getMainStores(homeRepository, mainState.countryPicker.value))
  }, [])
  return (
    <div className='flex gap-4'>
      {
        stores.map((store) => {
          return (
            <div key={`seller-by-category-${store.id}`}
              className="w-32 h-32 flex-none">
              <Image alt={`product-category-seller-${store.id}`}
                src={store.main_image_url ?? `https://estorephilbucketv1.s3.us-west-2.amazonaws.com/assets/images/profile_image_default.jpg`}
                width={128}
                height={128}
                className='w-full h-full' />
            </div>
          )
        })
      }
    </div>
  )
}