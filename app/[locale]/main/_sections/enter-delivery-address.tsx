'use client';

import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import { CustomSelect } from '../../_components/custom_select';
import Image from 'next/image';
import { AppDispatch } from '@/redux/store';
import { onModalProductDeliveryAddressOpened } from '../_redux/main-slice';

export default function EnterDeliveryAddress() {
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="py-8 space-y-3 w-[512px] m-auto">
      <h3 className="text-primary text-[32px] leading-0">Enter Delivery Address</h3>
      <Image alt='delivery-address-map-marker-alt'
        src='/others/map_marker.png'
        width={96}
        height={96}
        className='w-24 h-24 m-auto block' />
      <p className='leading-0 text-sm'>As some of our products have limited areas where it can be delivered,
        we suggest that you enter your delivery address so we can filter out the products that cannot be delivered on your area.
      </p>
      <p className='leading-0 text-sm italic'>You can skip this to view all of our products in store.</p>
      <div className='flex gap-4 text-left'>
        <div className='w-full'>
          <CustomSelect<string, string | undefined>
            items={['Philippines', 'Canada', 'United States of America']}
            value={undefined}
            placeholder='Country:' />
        </div>
        <div className='w-full'>
          <CustomSelect<string, string | undefined>
            items={['Quezon City', 'Cebu City', 'Manila', 'Davao City']}
            value={undefined}
            placeholder='City:' />
        </div>
      </div>
      <button className='w-full p-3 rounded bg-warning hover:bg-warning-light text-white'
        onClick={() => {
          dispatch(onModalProductDeliveryAddressOpened(''));

          setTimeout(() => {
            dispatch(onModalProductDeliveryAddressOpened('changeAddress'));
          }, 1000)
        }}>
        Next
      </button>
      <button className='w-full p-3 rounded bg-transparent underline font-[500] hover:no-underline'>
        Skip
      </button>
    </div>
  )
}