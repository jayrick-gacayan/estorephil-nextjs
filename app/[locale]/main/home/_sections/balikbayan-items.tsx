'use client';

import Products from '@/app/_data/product.json';
import { Product } from '@/models/product';
import { ProductsContainer } from '../../_components/products-container';
import { useRouter } from 'next-intl/client';

export default function BalikbayanItems() {
  const router = useRouter();
  let popularProductItems: Product[] = Products.products;

  return (
    <div className='max-w-screen-2xl m-auto py-4 text-secondary'>
      <ProductsContainer headerText='Popular Balikbayan Items'
        products={popularProductItems}
        onRedirectProductClick={
          (product: Product) => {
            router.push(`/products/${product.id}`);
          }
        }
      />
    </div>
  )
}