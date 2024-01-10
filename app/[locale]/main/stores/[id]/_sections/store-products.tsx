'use client'
import { ProductItem } from '../../../_components/product-item';
import CustomInputField from '@/app/[locale]/_components/custom-input-field';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import SelectProductPriceRange from '../_components/select-product-price-range';
import { useSelector } from 'react-redux';
import { RootState, store } from '@/redux/store';
import { useEffect } from 'react';
import { getStoreDetail } from '../_redux/store-thunk';
import { useParams } from 'next/navigation';
import { storeContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { StoreRepository } from '@/repositories/store-repository';
import Product from '../_components/product';

export default function StoreProducts({ countryCode }: { countryCode: string }) {
  const state = useSelector((state: RootState) => state.store)
  const products = state.products
  const storeId = useParams().id.toString()
  const storeRepository = storeContainer.get<StoreRepository>(TYPES.StoreRepository)
  useEffect(() => {
    if (!!storeId) {
      store.dispatch(getStoreDetail(storeRepository, storeId, countryCode))
      console.log('use effect dispatch')
    }
  }, [storeId])
  return (
    <>
      <div className='px-8 h-full'>
        <div className='max-w-screen-2xl m-auto'>
          <div className='flex w-fit text-center text-[14px] leading-0'>
            <div className='flex-none w-auto'>
              <Link href={'/'}
                className='border-b-2 border-b-primary block'>
                <div className='px-6 py-2 text-primary'>
                  Featured Products
                </div>
              </Link>
            </div>
            <div className='flex-none w-auto'>
              <Link href={'/'}
                className='border-b-2 border-b-transparent block hover:border-b-primary'>
                <div className='px-6 py-2 hover:text-primary'>
                  All Products
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-default'>
        <div className='p-8'>
          <div className='max-w-screen-2xl m-auto space-y-4'>
            <div className='flex justify-between items-center gap-2'>
              <div className='flex-none md:w-[512px] w-full'>
                <CustomInputField leftIcon={<FaMagnifyingGlass />} />
              </div>
              <SelectProductPriceRange />
            </div>
            {products.length > 0 ? (<>
              <div className='max-w-screen-2xl m-auto py-4 text-secondary'>
                {
                  products.length === 0 ? <div>NO ITEMS</div> :
                    (
                      <div className='flex flex-row flex-wrap gap-4'>
                        {
                          products.map((product) => {
                            return (<Product key={`product-item-${product.id}`}
                              product={product}
                              withRatingEvents={false} />)
                          })
                        }
                      </div>
                    )
                }
              </div>
            </>) :
              (<div className='text-center text-[56px] font-semibold'>
                No Product/s Yet.
              </div>)}
          </div>
        </div>
      </div>
    </>
  );
}