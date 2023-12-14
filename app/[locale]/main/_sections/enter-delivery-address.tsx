'use client';

import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import Image from 'next/image';
import { AppDispatch, RootState } from '@/redux/store';
import { deliveryAddressCityChanged, deliveryAddressCountryChanged, mainModalOpened } from '../_redux/main-slice';
import { avaiableCountries } from '@/types/props/countries';
import CountrySelect from '../_components/country-select';
import CitySelect from '../_components/city-select';
import { useSelector } from 'react-redux';

export default function DeliveryAddressForm({ onClose }: { onClose: () => void; }): JSX.Element {
  const dispatch: AppDispatch = useAppDispatch();
  const countrySelected = useSelector((state: RootState) => state.main).deliveryAddressCountry
  const citySelected = useSelector((state: RootState) => state.main).deliveryAddressCity
  const availableCountries = avaiableCountries;

  return (
    <div className="py-8 space-y-3 w-[512px] m-auto">
      <h3 className="text-primary text-[32px] leading-0">Enter Delivery Address</h3>
      <Image alt='delivery-address-map-marker-alt'
        src='/others/marker.svg'
        width={96}
        height={96}
        className='w-24 h-24 m-auto block' />
      <p className='leading-0 text-sm'>
        As some of our products have limited areas where it can be delivered,
        we suggest that you enter your delivery address so we can filter out the products that cannot be delivered on your area.
      </p>
      <p className='leading-0 text-sm italic'>You can skip this to view all of our products in store.</p>
      <div className='flex gap-4 text-left'>
        <div className='w-full'>
          <CountrySelect
            countries={availableCountries}
            className='block space-y-1'
            placeholder={"Select Country:"}
            onChange={(e) => dispatch(deliveryAddressCountryChanged(e.target.value))}
          />
        </div>
        <div className='w-full'>
          <CitySelect
            country={countrySelected}
            value={citySelected}
            required={false}
            onChange={(e) => dispatch(deliveryAddressCityChanged(e.target.value))}
            className='block space-y-1'
            placeholder={'Select City:'}
          />
        </div>
      </div>
      <button className='w-full p-3 rounded bg-warning hover:bg-warning-light text-white'
        onClick={() => {
          onClose();
          setTimeout(() => {
            dispatch(mainModalOpened({ open: true, type: 'cartType' }));
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