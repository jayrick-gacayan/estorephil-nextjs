'use client';

import { philippinesRegions } from "@/types/props/philippine-regions";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import LabelTextWithAmountTrash from "../_components/labeltext-with-amount-trash";
import DeliveryAreasContainer from "../_components/delivery-areas-container";

export default function PickupAreas() {
  const [regions, setRegions] = useState<any[]>([]);

  return (
    <DeliveryAreasContainer labelText="Pickup Areas">
      <div className="flex items-center w-full">
        <div className="basis-4/5">
          Region
        </div>
        <div className="relative w-full">
          <input type="text" readOnly id='inputId' className="focus:border-primary w-full peer/region p-2 rounded border-[.5px] border-tertiary-dark" />
          <div className="overflow-auto w-full z-10 bg-white transition-all delay-100 absolute peer-focus/region:h-[240px] h-0 rounded peer-focus/region:border-[.5px] border-0 border-secondary top-[110%]">
            {
              philippinesRegions.map((value: any) => {
                let getRegion = regions.find((region: any) => { return region.regionCode === value.regionCode });

                return (
                  <div key={value.name} className="p-2 hover:bg-tertiary-light hover:cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="flex-1">{value.name}</div>
                      <div className='flex-none w-auto'>
                        <div className={`${getRegion ? 'text-danger' : 'text-success'} cursor-pointer`}
                          onClick={() => {
                            setRegions(getRegion === undefined ? [...regions, value] : regions.filter((filReg: any) => { return filReg.regionCode !== value.regionCode }))
                          }}>
                          {getRegion ? <FaMinus /> : <FaPlus />}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {
        regions.length > 0 &&
        (
          <div className={`block space-y-2 ${regions.length > 5 ? 'h-[240px] overflow-auto' : ''}`}>
            {
              regions.map((value: any) => {
                return (
                  <div key={`region-selected-container-${value.name}`}
                    className="w-full">
                    <LabelTextWithAmountTrash labelText={value.name} />
                  </div>
                )
              })
            }
          </div>
        )
      }
    </DeliveryAreasContainer>
  )
}