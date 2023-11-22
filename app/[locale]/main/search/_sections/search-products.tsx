'use client';

import { Product } from '@/models/product';
import { ProductsContainer } from '../../_components/products-container';
import { useRouter } from 'next-intl/client';
import CustomSelect from '@/app/[locale]/_components/custom-select';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

export function SearchProducts({
  products
}: {
  products: Product[]
}): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);
  const searchSelectRef = useRef<HTMLDivElement>(null);

  let keyword = searchParams.get('keyword') ?? '';

  useOutsideClick(searchSelectRef, () => { setVisible(false); })

  return (
    <ProductsContainer products={products}
      headerText={searchParams && keyword !== '' ? `Results of \u0022${keyword}\u0022` : ``}>
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
    </ProductsContainer>
  )
}