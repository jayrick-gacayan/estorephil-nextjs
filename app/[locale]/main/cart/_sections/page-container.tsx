'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { RootState } from '@/redux/store';
import { useEffect, useMemo } from 'react';
import { useRouter } from 'next-intl/client';
import CartItemsContainer from './cart-items-container';
import Image from 'next/image';
import { MainState } from '../../_redux/main-state';
import { useSession } from 'next-auth/react';
import CartHeader from './cart-header';
import SummaryCheckout from './summary-checkout';
import { capitalCase } from 'change-case';
import { CartState } from '../_redux/cart-state';

export default function PageContainer(): JSX.Element | null {
  const router = useRouter();
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const state: CartState = useAppSelector((state: RootState) => { return state.cart });
  const { data: sessionData } = useSession()
  const dispatch = useAppDispatch();
  const cartType = useMemo(() => {
    const cartType = sessionData?.cart?.cart_type ?? mainState.cartType;
    return cartType === '' ? '' : capitalCase(cartType);
  }, [mainState.cartType]);

  const cartProducts = state.cartCheckout
  useEffect(() => {
    if (cartType === '') {
      router.push('/')
    }
  }, [cartType, router]);
  useEffect(() => {

  })
  return cartType === '' ? null :
    cartProducts.length === 0 ?
      (
        <div className='max-w-screen-2xl m-auto p-8'>
          <div className='flex items-center justify-center'>
            <div className='flex-none w-auto text-center space-y-4'>
              <div className='w-72 h-72 relative m-auto block'>
                <Image alt='empty-shop-method-alt'
                  src='/others/shop_method_empty.svg'
                  fill />
                <Image alt={`empty-method-${cartType}`}
                  src={`/others/${cartType === 'Shopping Cart' ? `custom_cart` : `balik_box`}_icon.svg`}
                  fill
                  className='z-10' />
              </div>

              <h1 className='font-semibold text-[56px] leading-0'>{`${cartType}`} Empty</h1>
              <div className='text-tertiary'>
                You have not added any items yet in your {cartType.toLowerCase()}.
              </div>
              <button className='block p-4 rounded text-white w-full bg-warning hover:bg-warning-light'>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      ) :
      (
        <div className='flex'>
          <div className='flex-1 bg-white'>
            <CartHeader text={cartType.toUpperCase()} />
            <div className='p-8 space-y-3'>
              <CartItemsContainer />
            </div>
          </div>
          <SummaryCheckout
            totalItems={
              cartProducts.filter((value: any) => {
                return value.isGoingToCheckout
              }).length
            }
            onRedirectToCheckout={
              () => {
                router.push('/checkout/sender');
              }
            } />
        </div>
      )
}