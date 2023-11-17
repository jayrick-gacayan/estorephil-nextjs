import { Product } from '@/models/product';
import { ProductItem } from './product-item';
import { CustomSelect } from '../../_components/custom-select';
import { ReactNode, useRef } from 'react';

export function ProductsContainer({
  headerText,
  products,
  onClick,
  children,
}: {
  headerText: string;
  products: Product[];
  onClick?: () => void;
  children?: ReactNode;
}): JSX.Element {

  return (
    <>
      <div className='flex mb-2'>
        <div className='flex-1 font-[500] text-[28px] leading-0'>{headerText}</div>
        {children && children}
        {/* {
          withSortBy &&
          (
            <div className='flex-none space-x-2'>
              <span>Sort</span>
              <div className='inline-block w-36'>
                <CustomSelect ref={selectRef} items={['Top Seller', 'Low Seller']} value={undefined} placeholder="Sort by:" labelText={''} visible={false} setVisible={function (visible: boolean): void {
                  throw new Error('Function not implemented.');
                } } />
              </div>
            </div>
          )
        } */}
      </div>
      <div className='flex flex-row flex-wrap gap-4'>
        {
          products.map((product: Product) => {
            return (<ProductItem key={`product-item-${product.id}`} product={product} onClick={onClick} />)
          })
        }
      </div>
    </>
  )
}