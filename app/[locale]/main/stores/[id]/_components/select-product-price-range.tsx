'use client';

import SelectTagCustom from "@/app/[locale]/_components/select-tag-cutsom";
import { ValidationType } from "@/types/enums/validation-type";
import { sentenceCase } from "change-case";

export default function SelectProductPriceRange() {

  return (
    <div className='flex-none w-96'>
      <SelectTagCustom items={['Sort By:', 'Highest To Lowest Price', 'Lowest To Highest Price']}
        onSelect={(item: string) => {
          return;
        }}
        value={''}
        placeholder='Sort By:'
        optionActiveClassName={(current: string, value: string) => {
          return `${current === value && current !== '' ? `bg-primary text-white` : `bg-inherit hover:bg-primary hover:text-white`}`;
        }}
        valueClassName={(status: ValidationType) => { return 'bg-white border-tertiary-dark has-[input:focus]:border-primary' }} />
    </div>
  )
}