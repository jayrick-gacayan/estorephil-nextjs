'use client';

import TabItem from '@/app/[locale]/_components/tab-item';
import Tabs from '@/app/[locale]/_components/tabs';
import { useMemo } from 'react';
import { CourierDeliveryRatesState } from '../_redux/courier-delivery-rates-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { deliveryRatesTypeChanged } from '../_redux/courier-delivery-rates-slice';

export default function CargoTabsContainer() {
  const courierDeliveryRatesState: CourierDeliveryRatesState = useAppSelector((state: RootState) => {
    return state.courierDeliveryRates;
  });
  const dispatch: AppDispatch = useAppDispatch();
  const deliveryRateType = useMemo(() => {
    return courierDeliveryRatesState.deliveryRateType;
  }, [courierDeliveryRatesState.deliveryRateType]);


  return (
    <div className='w-[520px] block rounded overflow-hidden'>
      <Tabs>
        {
          ['Normal Cargo', 'Balikbayan & Alisbayan'].map(
            (value: string) => {
              return (
                <TabItem<string> key={`cargo-rates-${value}`}
                  tab={value}
                  currentTab={deliveryRateType}
                  tabClassName={(tab: string, currentTab: string) => {
                    return tab === currentTab ? 'bg-info text-white' : 'bg-white hover:bg-info hover:text-white';
                  }}
                  onTabChange={(tab: string) => { dispatch(deliveryRatesTypeChanged(tab)) }}>
                  <div className='w-full text-center px-3 py-2'>
                    {value} Rates
                  </div>
                </TabItem>
              )
            }
          )
        }
      </Tabs>
    </div>
  )
}