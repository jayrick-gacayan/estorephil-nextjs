'use client';

import { useAppSelector } from '@/app/_hooks/redux_hooks';
import { RootState } from '@/redux/store';
import { useEffect, useMemo } from 'react';
import { ShopMethodState } from '../_redux/shop-method-state';
import { useRouter } from 'next-intl/client';
import { MainState } from '../../../_redux/main_state';
import CartItemsContainer from './cart-items-container';
import Image from 'next/image';

export default function PageContainer({
  checkoutSlug
}: {
  checkoutSlug: string
}): JSX.Element | null {
  const router = useRouter();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const shopMethodState: ShopMethodState = useAppSelector((state: RootState) => {
    return state.shopMethod;
  });

  const shoppingMethod = useMemo(() => { return mainState.shoppingMethod; }, [mainState.shoppingMethod]);

  useEffect(() => {
    if (shoppingMethod === '') {
      router.push('/')
    }
  }, [shoppingMethod, router]);

  const shopMethodItems = useMemo(() => {
    return shopMethodState.shopMethodItems;
  }, [shopMethodState.shopMethodItems]);


  return shoppingMethod === '' ? null :
    shopMethodItems.length === 0 ?
      (
        <div className='max-w-screen-2xl m-auto p-8'>
          <div className='flex items-center justify-center'>
            <div className='flex-none w-auto text-center space-y-4'>
              <div className='w-72 h-72 relative m-auto block'>
                <Image alt='empty-shop-method-alt'
                  src='/others/shop_method_empty.svg'
                  fill />
                <Image alt={`empty-method-${shoppingMethod}`}
                  src={`/others/${shoppingMethod === 'Shopping Cart' ? `custom_cart` : `balik_box`}_icon.svg`}
                  fill
                  className='z-10' />
              </div>

              <h1 className='font-semibold text-[56px] leading-0'>{`${checkoutSlug[0].toUpperCase()}${checkoutSlug.slice(1)}`} Empty</h1>
              <div className='text-tertiary'>
                You have not added any items yet in your {checkoutSlug}.
              </div>
              <button className='block p-4 rounded text-white w-full bg-warning hover:bg-warning-light'>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      ) :
      (
        <CartItemsContainer />
      )
}