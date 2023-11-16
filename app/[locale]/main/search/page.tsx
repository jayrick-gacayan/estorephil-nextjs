import { Product } from '@/models/product'
import { ProductsContainer } from '../_components/products-container'
import { redirect } from 'next/navigation';
import { SearchProducts } from './_sections/search_products';

const searchProducts: Product[] = [
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
  },
  {
    id: 8,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 9,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 10,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 11,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 12,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 13,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 14,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 15,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  },
  {
    id: 16,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png'
  }
]

export default function SearchPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  return (
    <div className='p-4 bg-[#F7F9FC]'>
      <SearchProducts searchParams={searchParams} products={searchProducts} />
    </div>
  )
}