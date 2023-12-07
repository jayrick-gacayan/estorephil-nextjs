'use client';

import CustomSelect from "@/app/[locale]/_components/custom-select";
import { useState } from "react";

export default function SelectProductPriceRange() {
  const [priceRangeVisible, setPriceRangeVisible] = useState<boolean>(false);

  return (
    <div className='flex-none w-96'>
      <CustomSelect labelText={''}
        items={['Highest To Lowest Price', 'Lowest To Highest Price']}
        value=''
        placeholder={'Select price range:'}
        visible={priceRangeVisible}
        setVisible={setPriceRangeVisible} />
    </div>
  )
}