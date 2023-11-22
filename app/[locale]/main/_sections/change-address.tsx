'use client';

import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import { AppDispatch } from '@/redux/store';
import Image from 'next/image';
import { modalProductDeliveryAddressOpened } from '../_redux/main-slice';

export default function ChangeAddress({ onClose }: { onClose: () => void; }) {
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="py-8 space-y-3 w-[512px] h-[448px] m-auto">
      <div className="flex justify-around items-center flex-col h-full w-full">
        <h3 className="text-primary-dark text-[32px] leading-0">Change Address</h3>
        <Image alt='change-address-alt-image'
          src='/others/map_marker.png'
          width={96}
          height={96}
          className='w-24 flex-none h-24' />
        <div className='space-y-3'>
          <p className='leading-0 font-semibold'>
            All items that you have added will be removed upon changing to a new address.
          </p>
          <p className='leading-0 text-sm italic text-danger font-semibold'>Do you want to proceed?</p>
        </div>

        <div className="flex gap-2 w-full">
          <div className="flex-1">
            <button className="w-full rounded-full p-3 bg-primary text-white hover:bg-primary-light cursor-pointer"
              onClick={() => {
                onClose();
                setTimeout(() => {
                  dispatch(modalProductDeliveryAddressOpened({ open: true, type: 'shoppingMethod' }));
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