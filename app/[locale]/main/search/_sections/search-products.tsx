'use client';

import { Product } from '@/models/product';
import CustomSelect from '@/app/[locale]/_components/custom-select';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { useState, useRef } from 'react';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { ProductItem } from '../../_components/product-item';
import ProductHeaderText from '../../_components/product-header-text';

export function SearchProducts({
  products
}: {
  products: Product[]
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
            <CustomSelect ref={searchSelectRef} items={['Top Seller', 'Low Seller']}
              value={undefined}
              placeholder='Sort by:'
              labelText={''}
              visible={visible}
              setVisible={setVisible} />
          </div>
        </div>
      </div>
      {
        products.length === 0 ? <div>NO ITEMS</div> :
          (
            <div className='flex flex-row flex-wrap gap-4'>
              {
                products.map((product: Product) => {
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