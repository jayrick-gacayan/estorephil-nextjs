import { SearchProducts } from './_sections/search-products';

export default async function SearchPage({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  let tempProducts = (await import('@/app/_data/product.json')).default.products;

  return (
    <div className='p-4 bg-[#F7F9FC]'>
      <SearchProducts products={tempProducts} />
    </div>
  )
}