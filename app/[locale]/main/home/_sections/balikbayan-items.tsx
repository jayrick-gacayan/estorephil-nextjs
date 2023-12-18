import ProductsData from '@/app/_data/product.json';
import { Products } from '@/models/products';
import { ProductItem } from '../../_components/product-item';
import ProductHeaderText from '../../_components/product-header-text';

export default function BalikbayanItems() {
  let popularProductItems: Products[] = ProductsData.products;

  return (
    <div className='max-w-screen-2xl m-auto py-4'>
      <div className='flex mb-2'>
        <ProductHeaderText text='Popular Balikbayan Items' />
      </div>
      {
        popularProductItems.length === 0 ? <div>NO ITEMS</div> :
          (
            <div className='flex flex-row flex-wrap gap-4'>
              {
                popularProductItems.map((product: Products) => {
                  return (<ProductItem key={`product-item-${product.id}`}
                    product={product}
                    withRatingEvents={false} />)
                })
              }
            </div>
          )
      }
    </div>
  )
}