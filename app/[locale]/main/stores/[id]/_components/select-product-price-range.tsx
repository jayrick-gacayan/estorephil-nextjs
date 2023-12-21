'use client';

import CustomSelect from "@/app/[locale]/_components/custom-select";
import SelectCustom from "@/app/[locale]/_components/select-custom";
import { sentenceCase } from "change-case";
import { useState } from "react";

export default function SelectProductPriceRange() {
  const [priceRangeVisible, setPriceRangeVisible] = useState<boolean>(false);

  return (
    <div className='flex-none w-96'>
      <SelectCustom labelText=''
        items={['Highest To Lowest Price', 'Lowest To Highest Price']}
        value={sentenceCase('')}
        placeholder='Select price range:'
        visible={priceRangeVisible}
        setVisible={setPriceRangeVisible}
        onSelect={(value: string) => {
          return;
        }}
        valueClassName={(errorText: string) => {
          return `flex rounded overflow-hidden items-center justify-center hover:cursor-pointer p-2 ${errorText !== '' ? 'border-danger' : 'border-tertiary-dark'}`;
        }}
        optionActiveClassName={(current: string, value: string) => {
          return `p-2 cursor-pointer ${current === value && current !== '' ? `bg-primary text-white` : `bg-inherit hover:bg-primary hover:text-white`}`
        }}
        errorText='' />
    </div>
  )
}