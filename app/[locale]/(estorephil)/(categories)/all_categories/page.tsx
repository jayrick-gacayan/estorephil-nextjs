import { Product } from '@/models/product'
import { ProductsContainer } from '../../home/_sections/products_container'

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 3.7,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 2,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 3,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 4,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 5,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 6,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 7,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  }
]

export default function AllCategories() {

  return (
    <div className='p-4 bg-[#F7F9FC]'>
      <ProductsContainer headerText='Featured Products' products={featuredProducts} />
    </div>
  )
}