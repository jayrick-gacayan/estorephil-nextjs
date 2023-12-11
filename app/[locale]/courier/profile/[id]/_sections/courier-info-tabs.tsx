'use client';

import TabItem from "@/app/[locale]/_components/tab-item";
import Tabs from "@/app/[locale]/_components/tabs";

export default function CourierInfoTabs() {
  return (
    <div className="w-3/4">
      <Tabs>
        {
          [
            'Courier Details',
            'Business Address',
            'Holding Facility',
            'Rate Rules',
            'Pay Out'
          ].map(
            (value: string) => {
              return (
                <TabItem<string> key={`cargo-rates-${value}`}
                  tab={value}
                  currentTab={'Courier Details'}
                  tabClassName={(tab: string, currentTab: string) => {
                    return `border-[.5px] border-secondary-light overflow-hidden rounded ${tab === currentTab ? 'border-b-0 bg-white ' : 'bg-tertiary-light hover:bg-white hover:border-b-0'}`

                  }}
                  onTabChange={(tab: string) => {
                    return
                  }}>
                  <div className='w-full text-center p-3 font-semibold'>
                    {value}
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