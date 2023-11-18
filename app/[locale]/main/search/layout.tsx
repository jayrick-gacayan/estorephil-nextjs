import { SearchSidebar } from './_sections/search-sidebar';
import { ReactNode } from 'react';
import BreadcrumbsContainer from '../all-categories/_sections/breadcrumbs-container';

export default function SearchLayout({ children }: { children: ReactNode }) {

  return (
    <div className='text-secondary'>
      <div className='relative flex lg:flex-row flex-col'>
        <SearchSidebar />
        <div className='flex-1'>
          <div className='bg-white px-4 pt-4 pb-8 space-y-1.5 border-b-2 border-b-secondary-light'>
            <BreadcrumbsContainer basePath='search' text='Search' />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}