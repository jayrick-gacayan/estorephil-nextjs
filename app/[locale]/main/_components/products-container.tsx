import { Product } from '@/models/product';
import { ProductItem } from './product-item';

export function ProductsContainer({
  headerText,
  products,
  onClick,
  withSortBy = false,
}: {
  headerText: string;
  products: Product[];
  onClick?: () => void;
  withSortBy?: boolean;
}): JSX.Element {

  return (
    <>
      <div className='flex mb-2'>
        <div className='flex-1 font-[500] text-[28px] leading-0'>{headerText}</div>
        {
          withSortBy &&
          (
            <div className='flex-none space-x-2'>
              <span>Sort</span>
              <div className='inline-block w-36'>
                {/* <CustomSelect<string, string | undefined> items={['Top Seller', 'Low Seller']} value={undefined} placeholder="Sort by:" /> */}
              </div>
            </div>
          )
        }
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