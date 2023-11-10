import { Product } from '@/models/product';
import { ProductItem } from '../../_components/product_item';

export function ProductsContainer({
  headerText,
  products
}: {
  headerText: string;
  products: Product[]
}): JSX.Element {
  return (
    <>
      <div className='flex mb-2'>
        <div className='flex-1 font-[500] text-2xl'>{headerText}</div>
        <div></div>
      </div>
      <div className='flex flex-row flex-wrap gap-4'>
        {
          products.map((product: Product) => {
            return (<ProductItem key={`product-item-${product.id}`} product={product} />)
          })
        }
      </div>
    </>
  )
}