import { Product } from '@/models/product';
import CategoryProducts from './_sections/category-products';

export default async function AllCategories() {

  return (
    <div className='p-4 bg-default space-y-4'>
      <CategoryProducts />
    </div>
  )
}