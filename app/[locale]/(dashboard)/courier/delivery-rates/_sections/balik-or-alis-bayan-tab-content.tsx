'use client';

import TabItem from "@/app/[locale]/_components/tab-item";
import Tabs from "@/app/[locale]/_components/tabs";
import { FaPlus } from "react-icons/fa6";

export default function BalikOrAlisBayanTabContent() {

  function tabClassName(tab: string, currentTab: string) {
    return `border-[.5px] ${tab === currentTab ? 'bg-success-dark text-white border-success-dark' : 'bg-default border-secondary hover:border-success-dark hover:bg-success-dark hover:text-white'}`;
  }

  return (
    <>
      <div className="flex items-center justify-evenly gap-8">
        <div className="w-full space-y-2">
          <div className="block">
            <h4 className="text-xl font-semibold">Balikbayan Boxes</h4>
            <div>Enter dimension, weight and cost of each boxes.</div>
          </div>

          <div className="flex items-center w-full">
            <div className="flex-none w-[448px]">
              <Tabs>
                {
                  ['Air', 'Vessel'].map((deliveryMethod: string) => {
                    return (
                      <TabItem<string> key={`delivery-method-${deliveryMethod}`}
                        tab={deliveryMethod}
                        currentTab={'Air'}
                        tabClassName={tabClassName}
                        onTabChange={(tab: string) => {

                        }}>
                        <div className='w-full text-center text-sm p-2'>
                          <div>{deliveryMethod}</div>
                        </div>
                      </TabItem>
                    )
                  })
                }
              </Tabs>
            </div>
          </div>
          <div className="block">
            <div className="w-fit ml-auto block border rounded p-2 border-info text-info">
              <FaPlus />
            </div>
          </div>
        </div>
        <div className="w-full space-y-2">
          <div className="block">
            <h4 className="text-xl font-semibold">Alisbayan Boxes</h4>
            <div>Enter dimension, weight and cost of each boxes.</div>
          </div>

          <div className="flex items-center w-full">
            <div className="flex-none w-[448px]">
              <Tabs>
                {
                  ['Air', 'Vessel'].map((deliveryMethod: string) => {
                    return (
                      <TabItem<string> key={`delivery-method-${deliveryMethod}`}
                        tab={deliveryMethod}
                        currentTab={'Air'}
                        tabClassName={tabClassName}
                        onTabChange={(tab: string) => {

                        }}>
                        <div className='w-full text-center text-sm p-2'>
                          <div>{deliveryMethod}</div>
                        </div>
                      </TabItem>
                    )
                  })
                }
              </Tabs>
            </div>
          </div>
          <div className="block">
            <div className="w-fit ml-auto block border rounded p-2 border-info text-info">
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}