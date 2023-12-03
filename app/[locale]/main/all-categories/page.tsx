import { Product } from '@/models/product';
import CategoryProductListResult from './_sections/category-product-list-result';

export default async function AllCategories({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let tempProducts = (await import('@/app/_data/product.json')).default.products;

  let categoryProducts = Object.keys(searchParams).length === 0 ? tempProducts :
    tempProducts.filter((product: Product) => {
      if (searchParams.keyword && searchParams.keyword.includes('Baby')) {
        return product.category.includes('Baby')
      }

      return product.category === searchParams.keyword;
    })

  return (
    <div className='p-4 bg-default space-y-4'>
      <CategoryProductListResult headerText='Featured Products' products={categoryProducts} />
    </div>
  )
}