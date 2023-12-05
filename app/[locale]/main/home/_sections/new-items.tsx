import Products from '@/app/_data/product.json';
import { Product } from '@/models/product';
import { ProductItem } from '../../_components/product-item';
import ProductHeaderText from '../../_components/product-header-text';

export default function NewItems() {
  let newItems: Product[] = Products.products;

  return (
    <div className='max-w-screen-2xl m-auto py-4 text-secondary'>
      <div className='flex mb-2'>
        <ProductHeaderText text='New Items' />
      </div>
      {
        newItems.length === 0 ? <div>NO ITEMS</div> :
          (
            <div className='flex flex-row flex-wrap gap-4'>
              {
                newItems.map((product: Product) => {
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