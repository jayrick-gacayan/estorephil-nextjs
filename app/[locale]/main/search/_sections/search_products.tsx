'use client';

import { Product } from '@/models/product';
import { ProductsContainer } from '../../_components/products-container';
import { useRouter } from 'next-intl/client';

export function SearchProducts({
  searchParams,
  products
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  products: Product[]
}) {
  const router = useRouter();
  return (
    <ProductsContainer products={products}
      headerText={searchParams && searchParams.keyword ? `Results of \u0022${searchParams.keyword}\u0022` : ``}
      onClick={() => { router.push('/products/1') }}
      withSortBy={true} />
  )
}