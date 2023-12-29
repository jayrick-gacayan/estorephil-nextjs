import { SearchProducts } from './_sections/search-products';
import { SearchSidebar } from './_sections/search-sidebar';
import SellerBySearch from './_sections/seller-by-search';

export default async function SearchPage({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  let tempProducts = (await import('@/app/_data/product.json')).default.products;

  return (
    <div>
      <div className='relative flex lg:flex-row flex-col'>
        <SearchSidebar />
        <div className='flex-1'>
          <div className='bg-white px-4 pt-4 pb-8 space-y-1.5 border-b border-b-tertiary-dark'>
            {/* <BreadcrumbsContainer basePath='search' text='Search' /> */}
            <SellerBySearch />
          </div>
          <div className='p-4 bg-default'>
            <SearchProducts products={tempProducts} />
          </div>
        </div>
      </div>
    </div>

  )
}