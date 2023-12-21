'use client';

import { Products } from '@/models/products';
import CustomSelect from '@/app/[locale]/_components/custom-select';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { useState, useRef } from 'react';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { ProductItem } from '../../_components/product-item';
import ProductHeaderText from '../../_components/product-header-text';
import SelectCustom from '@/app/[locale]/_components/select-custom';
import { sentenceCase } from 'change-case';

export function SearchProducts({
  products
}: {
  products: Products[]
}): JSX.Element {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const [visible, setVisible] = useState<boolean>(false);
  const searchSelectRef = useRef<HTMLDivElement>(null);

  let keyword = searchParams.get('keyword') ?? '';

  useOutsideClick(searchSelectRef, () => { setVisible(false); })

  return (
    <div className='max-w-screen-2xl m-auto py-4'>
      <div className='flex mb-2'>
        <ProductHeaderText text={searchParams && keyword !== '' ? `Results of \u0022${keyword}\u0022` : ``} />
        <div className='flex-none space-x-2'>
          <span>Sort</span>
          <div className='inline-block w-36'>
            <SelectCustom labelText=''
              items={['Sort By:', 'Top Seller', 'Lowest Seller', 'Highest Price', 'Lowest Price']}
              value={sentenceCase('top-seller')}
              placeholder='Sort By:'
              visible={visible}
              setVisible={setVisible}
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
        </div>
      </div>
      {
        products.length === 0 ? <div>NO ITEMS</div> :
          (
            <div className='flex flex-row flex-wrap gap-4'>
              {
                products.map((product: Products) => {
                  return (<ProductItem key={`product-item-${product.id}`}
                    product={product}
                    withRatingEvents={false} />)
                })
              }
            </div>
          )
      }
    </div>
  );
}