import { Product } from '@/models/product';
import { ProductItem } from '../../../_components/product-item';

export default function StoreProducts({
  products
}: {
  products: Product[]
}) {

  return (
    <div className='max-w-screen-2xl m-auto py-4'>
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