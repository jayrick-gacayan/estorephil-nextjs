'use client';

import { Product } from '@/models/product';
import { useRouter } from 'next-intl/client';
import { ProductsContainer } from '../../../_components/products-container';

export default function StoreProducts({
  products
}: {
  products: Product[]
}) {
  const router = useRouter();

  return (
    <>
      <ProductsContainer headerText=''
        products={products}
        onRedirectProductClick={
          (product: Product) => {
            router.push(`/products/${product.id}`);
          }
        }
      />
    </>
  )
}