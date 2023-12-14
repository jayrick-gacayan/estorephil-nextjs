'use client';

import { philippinesRegions } from "@/types/props/philippine-regions";
import CourierInputField from "../../_components/courier-custom-input";
import CourierCustomSelectField from "../../_components/courier-custom-select-field";
import CourierGoogleLikeInputField from "../../_components/courier-google-like-input-field";
import { ChangeEvent, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import LabelTextWithAmountTrash from "../../deliveries/_components/labeltext-with-amount-trash";

export default function BoxesModalForm({
  type,
  onClose,
}: {
  type: string;
  onClose: () => void;
}) {

  const [regions, setRegions] = useState<any[]>([]);

  return (
    <div className='py-8 space-y-8 w-[768px] m-auto'>
      <div className="border-b border-secondary-light pb-2">
        <h3 className='text-[32px] leading-0 text-center'>{type === 'createBox' ? 'Create Box' : 'Update Box'}</h3>
      </div>
      <div className="space-y-6 relative z-0">
        <div className="flex items-center gap-4 text-left">
          <div className="flex-none w-56 font-semibold">Cargo Type</div>
          <div className="flex-1">
            <CourierCustomSelectField inputId='select-measurement-system'
              items={['Air', 'Vessel']}
              value={undefined}
              onSelectChange={function (value: unknown): void {
                return;
              }} />
          </div>
        </div>
        <div className="flex items-center gap-4 text-left">
          <div className="flex-none w-56 font-semibold">Box Type</div>
          <div className="flex-1">
            <CourierCustomSelectField inputId='select-measurement-system'
              items={['Small', 'Medium', 'Large', 'Extra-Large', 'Odd']}
              value={undefined}
              onSelectChange={function (value: unknown): void {
                return;
              }} />
          </div>
        </div>
        <div className="flex items-center gap-4 text-left">
          <div className="flex-none w-56 font-semibold">Measurement System</div>
          <div className="flex-1">
            <CourierCustomSelectField inputId='select-measurement-system'
              items={['Metric', 'Imperial']}
              value={undefined}
              onSelectChange={function (value: unknown): void {
                return;
              }} />
          </div>
        </div>
        <div className="flex items-center gap-4 text-left">
          <div className="flex-none w-56 font-semibold">Dimension</div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <CourierGoogleLikeInputField labelText="Length"
                inputProps={{
                  id: 'dimension-length',
                  type: 'number',
                  min: 0,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    return;
                  }
                }} />
              <CourierGoogleLikeInputField labelText="Width"
                inputProps={{
                  id: 'dimension-width',
                  type: 'number',
                  min: 0,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    return;
                  }
                }} />
              <CourierGoogleLikeInputField labelText="Height"
                inputProps={{
                  id: 'dimension-height',
                  type: 'number',
                  min: 0,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    return;
                  }
                }} />
            </div>
          </div>
          <div className="flex-none w-20">
            <CourierCustomSelectField inputId='select-silength-type'
              items={['cm', 'm']}
              value={undefined}
              onSelectChange={function (value: unknown): void {
                return;
              }} />
          </div>
        </div>
        <div className="flex items-center gap-4 text-left">
          <div className="flex-none w-56 font-semibold">Referral &#37;</div>
          <div className="flex-1">
            <CourierInputField inputProps={{
              type: 'number',
              min: 0,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                return
              }
            }} />
          </div>
        </div>
        <div className="space-y-4 text-left">
          <div className="text-3xl">Region Rates</div>
          <div className="flex items-center w-full gap-4">
            <div className="flex-none w-56 font-semibold">
              Region
            </div>
            <div className="relative w-full">
              <input type="text" readOnly id='inputId' className="focus:border-primary w-full peer/region p-2 rounded border-[.5px] border-[#707070]" />
              <div className="overflow-auto w-full z-10 bg-white transition-all delay-100 absolute peer-focus/region:h-[240px] h-0 rounded peer-focus/region:border-[.5px] border-0 border-[#707070] top-[110%]">
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
                              <FaMinus className={`${getRegion ? 'block' : 'hidden'}`} />
                              <FaPlus className={`${getRegion ? 'hidden' : 'block'}`} />
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
        </div>
      </div>
      <div className='block'>
        <div className='w-1/2 m-auto'>
          <div className='flex items-stretch gap-2 justify-center'>
            <button className='bg-info p-2 rounded text-white'>
              {type === 'createBox' ? 'Create' : 'Update'}
            </button>
            <button className='border border-info p-2 rounded text-info'
              onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}