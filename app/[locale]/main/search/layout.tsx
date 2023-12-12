import { SearchSidebar } from './_sections/search-sidebar';
import { ReactNode } from 'react';
import BreadcrumbsContainer from '../all-categories/_sections/breadcrumbs-container';
import SellerBySearch from './_sections/seller-by-search';

export default function SearchLayout({ children }: { children: ReactNode }) {

  return (
    <div>
      <div className='relative flex lg:flex-row flex-col'>
        <SearchSidebar />
        <div className='flex-1'>
          <div className='bg-white px-4 pt-4 pb-8 space-y-1.5 border-b border-b-tertiary-dark'>
            <BreadcrumbsContainer basePath='search' text='Search' />
            <SellerBySearch />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}