'use client';

import PurchaseMethod from './purchase-method';
import Image from 'next/image';
import Tabs from '../../_components/tabs';
import TabItem from '../../_components/tab-item';
import { useAppSelector } from '@/app/_hooks/redux_hooks';
import { RootState } from '@/redux/store';
import { MainState } from '../_redux/main_state';
import { useMemo, useState } from 'react';

type tabItemsProps = {
  labelText: string;
  otherText: string;
}

export default function SelectedShopMethodDetails({ onClose }: { onClose: () => void; }) {
  const [tempDeliveryMethod, setTempDeliveryMethod] = useState<string>('Vessel');
  const [sizeBox, setSizeBox] = useState<string>('Small');
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });

  const purchaseMethod = useMemo(() => { return mainState.purchaseMethod; }, [mainState.purchaseMethod]);
  const deliveryMethods: tabItemsProps[] =
    [
      { labelText: 'Vessel', otherText: `\u0024${(50).toFixed(2)} \u002D \u0024${(100).toFixed(2)}` },
      { labelText: 'Air', otherText: `\u0024${(150).toFixed(2)} \u002D \u0024${(250).toFixed(2)}` }
    ];

  const boxSizes: tabItemsProps[] = [
    { labelText: 'Small', otherText: `46 cm \u00D7 41 cm \u00D7 46 cm` },
    { labelText: 'Medium', otherText: `46 cm \u00D7 41 cm \u00D7 46 cm` },
    { labelText: 'Large', otherText: `46 cm \u00D7 46 cm \u00D7 61 cm` },
    { labelText: 'Extra\u2013Large', otherText: `46 cm \u00D7 46 cm \u00D7 61 cm` },
  ];

  function tabClassName(tab: string, currentTab: string) {
    return tab === currentTab ? 'bg-primary-dark text-white' : 'bg-primary-light';
  }

  return (
    <PurchaseMethod onClose={onClose} isSetPurchaseMethod={false}>
      {
        purchaseMethod === 'Balikbayan Box' ?
          (
            <div className='block space-y-1'>
              <div className='block space-y-1'>
                <h4 className='font-semibold text-[18px] leading-0 text-left'>Couriers</h4>
                <div className='flex flex-wrap gap-2 w-fit h-12'>
                  <div className='flex-none w-12 h-full relative'>
                    <Image alt='shop-method-lbc-logo-alt'
                      src='/others/lbc_logo.svg'
                      fill />
                  </div>
                  <div className='flex-none w-12 h-full relative'>
                    <Image alt='shop-method-lbc-logo-alt'
                      src='/others/dhl_logo.svg'
                      fill />
                  </div>
                </div>
              </div>
              <div className='block space-y-1'>
                <h4 className='font-semibold text-[18px] leading-0 text-left'>Delivery Method</h4>
                <Tabs>
                  {
                    deliveryMethods.map((deliveryMethod: tabItemsProps) => {
                      return (
                        <TabItem<string> key={`delivery-method-${deliveryMethod.labelText}`}
                          tab={deliveryMethod.labelText}
                          currentTab={tempDeliveryMethod}
                          tabClassName={tabClassName}
                          onTabChange={(tab: string) => {
                            setTempDeliveryMethod(tab)
                          }}>
                          <div className='w-full text-center text-sm p-2'>
                            <div>{deliveryMethod.labelText}</div>
                            <div>{deliveryMethod.otherText}</div>
                          </div>
                        </TabItem>
                      )
                    })
                  }
                </Tabs>
              </div>
              <div className='block space-y-1'>
                <h4 className='font-semibold text-[18px] leading-0 text-left'>Box Size</h4>
                <Tabs>
                  {
                    boxSizes.map((boxSizes: tabItemsProps) => {
                      return (
                        <TabItem<string> key={`box-sizes-${boxSizes.labelText}`}
                          tab={boxSizes.labelText}
                          currentTab={sizeBox}
                          tabClassName={tabClassName}
                          onTabChange={(tab: string) => { setSizeBox(tab) }}>
                          <div className='w-full text-center leading-0 text-[10px] p-2'>
                            <div className='text-sm'>{boxSizes.labelText}</div>
                            <div>{boxSizes.otherText}</div>
                          </div>
                        </TabItem>
                      )
                    })
                  }
                </Tabs>
              </div>
            </div>
          ) : (<></>)
      }
    </PurchaseMethod>
  )
}