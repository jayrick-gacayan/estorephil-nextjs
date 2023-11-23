'use client';

import { HiInformationCircle } from "react-icons/hi";
import ShoppingMethod from "./shopping-method";
import Image from 'next/image';
import Tabs from "../../_components/tabs";
import TabItem from "../../_components/tab-item";

type tabItemsProps = {
  labelText: string;
  otherText: string;
}

export default function SelectedShopMethodDetails({
  onClose
}: {
  onClose: () => void;
}) {
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
    <ShoppingMethod onClose={onClose} isSetShopMethod={false}>
      <div className="block space-y-1">
        <div className="block space-y-1">
          <h4 className="font-semibold text-[18px] leading-0 text-left">Couriers</h4>
          <div className="flex flex-wrap gap-2 w-fit h-12">
            <div className="flex-none w-12 h-full relative">
              <Image alt='shop-method-lbc-logo-alt'
                src='/others/lbc_logo.svg'
                fill />
            </div>
            <div className="flex-none w-12 h-full relative">
              <Image alt='shop-method-lbc-logo-alt'
                src='/others/dhl_logo.svg'
                fill />
            </div>
          </div>
        </div>
        <div className="block space-y-1">
          <h4 className="font-semibold text-[18px] leading-0 text-left">Delivery Method</h4>
          <Tabs>
            {
              deliveryMethods.map((deliveryMethod: tabItemsProps) => {
                return (
                  <TabItem<string> key={`delivery-method-${deliveryMethod.labelText}`}
                    tab={deliveryMethod.labelText}
                    currentTab='Vessel'
                    tabClassName={tabClassName}
                    onTabChange={(tab: string) => { return; }}>
                    <div className="w-full text-center text-sm p-2">
                      <div>{deliveryMethod.labelText}</div>
                      <div>{deliveryMethod.otherText}</div>
                    </div>
                  </TabItem>
                )
              })
            }
          </Tabs>
        </div>
        <div className="block space-y-1">
          <h4 className="font-semibold text-[18px] leading-0 text-left">Box Size</h4>
          <Tabs>
            {
              boxSizes.map((boxSizes: tabItemsProps) => {
                return (
                  <TabItem<string> key={`box-sizes-${boxSizes.labelText}`}
                    tab={boxSizes.labelText}
                    currentTab='Small'
                    tabClassName={tabClassName}
                    onTabChange={(tab: string) => { return; }}>
                    <div className="w-full text-center leading-0 text-[10px] p-2">
                      <div className="text-sm">{boxSizes.labelText}</div>
                      <div>{boxSizes.otherText}</div>
                    </div>
                  </TabItem>
                )
              })
            }
          </Tabs>
        </div>
        <div>
          <h4 className="text-danger font-[500] space-x-1 p-1">
            <HiInformationCircle className='inline-block' />
            <span className="inline-block align-middle">Changing couriers on check out will not be allowed.</span>
          </h4>
        </div>
      </div>
    </ShoppingMethod>
  )
}