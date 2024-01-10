'use client';

import SelectTagCustom from "@/app/[locale]/_components/select-tag-cutsom";
import { ValidationType } from "@/types/enums/validation-type";
import { useState } from "react";

export default function BoxesFilterFields() {
  const [cargoType, setCargoType] = useState('');
  const [boxType, setBoxType] = useState('');

  function selectValueClassname(status: ValidationType) {
    return 'border-tertiary-dark  has-[input:focus]:border-primary';
  }

  function selectCustomOptionsClassName(current: string, value: string) {
    return `${current === value && current !== '' ? `bg-primary text-white` : `bg-inherit hover:bg-primary hover:text-white`}`;
  }

  return (
    <div className="block">
      <div className="mr-auto w-fit block space-x-2 clear-both">
        <div className="w-56 inline-block">
          <SelectTagCustom items={['Cargo Type:', 'Air', 'Vessel']}
            onSelect={(item: string) => {
              setCargoType(item === 'Cargo Type:' ? '' : item);
            }}
            value={cargoType}
            placeholder='Cargo Type:'
            optionActiveClassName={selectCustomOptionsClassName}
            valueClassName={selectValueClassname} />
        </div>
        <div className="w-56 inline-block">
          <SelectTagCustom items={['Box Type: ', 'Small', 'Medium', 'Large', 'Extra-Large', 'Odd']}
            onSelect={(item: string) => {
              setBoxType(item === 'Boc Type:' ? '' : item)
            }}
            value={boxType}
            placeholder='Box Type:'
            optionActiveClassName={selectCustomOptionsClassName}
            valueClassName={selectValueClassname} />
        </div>
      </div>
    </div>
  )
}