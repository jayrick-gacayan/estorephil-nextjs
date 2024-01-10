'use client';

import { Products } from '@/models/products';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { ProductItem } from '../../_components/product-item';
import ProductHeaderText from '../../_components/product-header-text';
import { sentenceCase } from 'change-case';
import SelectTagCustom from '@/app/[locale]/_components/select-tag-cutsom';
import { ValidationType } from '@/types/enums/validation-type';

export function SearchProducts({
  products
}: {
  products: Products[]
}): JSX.Element {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  let keyword = searchParams.get('keyword') ?? '';

  return (
    <div className='max-w-screen-2xl m-auto py-4'>
      <div className='flex mb-2'>
        <ProductHeaderText text={searchParams && keyword !== '' ? `Results of \u0022${keyword}\u0022` : ``} />
        <div className='flex-none space-x-2'>
          <span>Sort</span>
          <div className='inline-block w-36'>
            <SelectTagCustom items={['Sort By:', 'Top Seller', 'Lowest Seller', 'Highest Price', 'Lowest Price']}
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