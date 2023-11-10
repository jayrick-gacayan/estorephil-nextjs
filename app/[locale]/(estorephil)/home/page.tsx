import { OurSellers } from './_sections/our_sellers';
import { ProductsContainer } from './_sections/products_container';
import { Product } from '@/models/product';
import { Carousel } from './_sections/carousel';
import { HomeCategories } from './_sections/home_categories';
import { BayanSection } from './_sections/bayan_section';

const popularProductItems: Product[] = [
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

const newItems: Product[] = [
  {
    id: 1,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
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

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <div className='bg-[#F8FBFE] px-8'>
      <div className='max-w-screen-2xl m-auto py-4'>
        <div className='flex md:flex-row flex-col gap-2'>
          <HomeCategories />
          <Carousel />
          <BayanSection />
        </div>
      </div>
      <OurSellers />
      <div className='max-w-screen-2xl m-auto py-4 text-[#2F353D]'>
        <ProductsContainer headerText='Popular Balikbayan Items' products={popularProductItems} />
      </div>
      <div className='max-w-screen-2xl m-auto py-4 text-[#2F353D]'>
        <ProductsContainer headerText='New Items' products={newItems} />
      </div>
    </div>
  )
}
