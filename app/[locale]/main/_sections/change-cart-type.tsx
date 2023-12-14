'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import Image from 'next/image';
import { mainModalOpened } from '../_redux/main-slice';
import { MainState } from '../_redux/main_state';
import { useMemo } from 'react';

export default function ChangeCartType({ onClose }: { onClose: () => void; }) {
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const dispatch: AppDispatch = useAppDispatch();

  const cartType: string = useMemo(() => { return mainState.cartType; }, [mainState.cartType]);

  return (
    <div className="py-8 space-y-3 w-[512px] h-[448px] m-auto">
      <div className="flex justify-around items-center flex-col h-full w-full">
        <h3 className="text-primary-dark text-[32px] leading-0">Change Shopping Method</h3>
        <div className='relative w-56 h-40'>
          <Image alt='change-shop-method-overlay-alt'
            src={`/others/${cartType === 'Shopping Cart' ? 'custom_cart' : 'balik_box'}_icon.svg`}
            fill
            className='z-10' />
          <Image alt='change-shop-method-overlay-alt'
            src='/static_images/shop_method_overlay.svg'
            fill
            className='z-0' />
        </div>
        <div className='space-y-3'>
          <p className='leading-0 font-semibold'>
            You have changed to a new shopping method.<br />
            All items added from the previous method will be removed.
          </p>
          <p className='leading-0 text-sm italic text-danger font-semibold'>Do you want to proceed?</p>
        </div>
        <div className="flex gap-2 w-full">
          <div className="flex-1">
            <button className="w-full rounded-full p-3 bg-primary text-white hover:bg-primary-light cursor-pointer"
              onClick={() => {
                onClose();
                setTimeout(() => {
                  dispatch(mainModalOpened({ open: true, type: 'cartType' }));
                }, 1000)
              }}>
              Continue
            </button>
          </div>
          <div className="flex-none w-48">
            <button className="w-full rounded-full p-3 bg-danger text-white cursor-pointer"
              onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}