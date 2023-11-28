import { Product } from '@/models/product';
import { ProductsContainer } from '../../../_components/products-container';

export default function StoreProducts({
  products
}: {
  products: Product[]
}) {

  return (<ProductsContainer headerText='' products={products} />)
}