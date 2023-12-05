'use client';

import { Product } from '@/models/product';
import { useRef, useState } from 'react';
import CustomSelect from '@/app/[locale]/_components/custom-select';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { ProductItem } from '../../_components/product-item';
import ProductHeaderText from '../../_components/product-header-text';

export default function CategoryProducts({
  headerText,
  products
}: {
  headerText: string;
  products: Product[];
}) {
  const [visible, setVisible] = useState<boolean>(false);
  const categorySelectRef = useRef<HTMLDivElement>(null);

  useOutsideClick(categorySelectRef, () => { setVisible(false); })

  return (
    <div className='max-w-screen-2xl m-auto py-4 text-secondary'>
      <div className='flex mb-2'>
        <ProductHeaderText text={headerText} />
        <div className='flex-none space-x-2'>
          <span>Sort</span>
          <div className='inline-block w-36'>
            <CustomSelect ref={categorySelectRef} items={['Top Seller', 'Low Seller']}
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