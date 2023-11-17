'use client';

import { Product } from '@/models/product';
import { useRef, useState } from 'react';
import { ProductsContainer } from '../../_components/products-container';
import CustomSelect from '@/app/[locale]/_components/custom-select';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';

export default function CategoryProductListResult({
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
    <ProductsContainer headerText={headerText} products={products}>
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
    </ProductsContainer>
  )
}