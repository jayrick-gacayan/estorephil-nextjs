'use client';

import TabItem from "@/app/[locale]/_components/tab-item";
import Tabs from "@/app/[locale]/_components/tabs";

export default function CargoTabsContainer() {
  return (
    <div className="w-[520px] block rounded overflow-hidden">
      <Tabs>
        {
          ['Normal Cargo Rates', 'Balikbayan & Alisbayan Rates'].map(
            (value: string) => {
              return (
                <TabItem<string> key={`cargo-rates-${value}`}
                  tab={value}
                  currentTab='Normal Cargo Rates'
                  tabClassName={(tab: string, currentTab: string) => {
                    return tab === currentTab ? 'bg-info text-white' : 'bg-white';
                  }}
                  onTabChange={(tab: string) => {
                    return
                  }}>
                  <div className='w-full text-center px-3 py-2'>
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