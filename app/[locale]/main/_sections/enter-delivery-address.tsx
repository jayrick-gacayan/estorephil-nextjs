'use client';

import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import { CustomSelect } from '../../_components/custom-select';
import Image from 'next/image';
import { AppDispatch } from '@/redux/store';
import { modalProductDeliveryAddressOpened } from '../_redux/main-slice';
import { useRef, useState } from 'react';

export default function EnterDeliveryAddress({ onClose }: { onClose: () => void; }): JSX.Element {
  const countrySelectRef = useRef<HTMLDivElement>(null);
  const citySelectRef = useRef<HTMLDivElement>(null);
  const [countrySelectVisible, setCountrySelectVisible] = useState<boolean>(false);
  const [citySelectVisible, setCitySelectVisible] = useState<boolean>(false);
  const dispatch: AppDispatch = useAppDispatch();

  function onCloseModal() {
    dispatch(modalProductDeliveryAddressOpened({ open: false, type: '' }));
  }

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
          <CustomSelect ref={countrySelectRef}
            items={['Philippines', 'Canada', 'United States of America']}
            value={undefined}
            placeholder='Country:'
            labelText=''
            visible={countrySelectVisible}
            setVisible={setCountrySelectVisible} />
        </div>
        <div className='w-full'>
          <CustomSelect ref={citySelectRef}
            items={['Quezon City', 'Cebu City', 'Manila', 'Davao City']}
            value={undefined}
            placeholder='City:'
            labelText=''
            visible={citySelectVisible}
            setVisible={setCitySelectVisible} />
        </div>
      </div>
      <button className='w-full p-3 rounded bg-warning hover:bg-warning-light text-white'
        onClick={() => {
          onClose();

          setTimeout(() => {
            dispatch(modalProductDeliveryAddressOpened({ open: true, type: 'changeAddress' }));
          }, 1000)
        }}>
        Next
      </button>
      <button className='w-full p-3 rounded bg-transparent underline font-[500] hover:no-underline'
        onClick={onClose}>
        Skip
      </button>
    </div>
  )
}