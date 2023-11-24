'use client';

import { Product } from '@/models/product';
import { ProductItem } from './product-item';
import { ReactNode } from 'react';

export function ProductsContainer({
  headerText,
  products,
  onRedirectProductClick,
  children,
}: {
  headerText: string;
  products: Product[];
  onRedirectProductClick?: (product: Product) => void;
  children?: ReactNode;
}): JSX.Element {

  return (
    <>
      <div className='flex mb-2'>
        {headerText !== '' && (<div className='flex-1 font-[500] text-[28px] leading-0'>{headerText}</div>)}
        {children && children}
      </div>
      <div className='flex flex-row flex-wrap gap-4'>
        {
          products.map((product: Product) => {
            return (
              <ProductItem key={`product-item-${product.id}`}
                product={product}
                onRedirectProductClick={onRedirectProductClick} />)
          })
        }
      </div>
    </>
  )
}