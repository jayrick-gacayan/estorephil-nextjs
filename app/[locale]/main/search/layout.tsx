import { BreadcrumbProps } from '@/types/props/breadcrumb_props';
import { SearchSidebar } from './_sections/search_sidebar';
import { ReactNode } from 'react';
import { Breadcrumbs } from '../_components/bread_crumbs';

const searchBCItems: BreadcrumbProps[] = [
  { link: '/home', text: 'Home' },
  { text: 'Search' }
];


export default function SearchLayout({ children }: { children: ReactNode }) {

  return (
    <div className='text-secondary'>
      <div className='relative flex lg:flex-row flex-col'>
        <SearchSidebar />
        <div className='flex-1'>
          <div className='bg-white px-4 pt-4 pb-8 space-y-1.5 border-b-2 border-b-secondary-light'>
            <Breadcrumbs breadcrumbs={searchBCItems} />

          </div>
          {children}
        </div>
      </div>
    </div>
  )
}