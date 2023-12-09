import { ReactNode } from 'react';
import { CategorySidebar } from './_sections/category-sidebar';
import BreadcrumbsContainer from './_sections/breadcrumbs-container';
import SellerByCategory from './_sections/seller-by-category';

export default function CategoriesLayout({ children }: { children: ReactNode }): JSX.Element {

  return (
    <div className='text-secondary'>
      <div className='flex lg:flex-row flex-col'>
        <CategorySidebar />
        <div className='flex-1'>
          <div className='bg-white px-4 pt-4 pb-8 space-y-1.5 border-b-2 border-b-secondary-light'>
            <BreadcrumbsContainer basePath='all-categories' text='All Categories' />
            <SellerByCategory />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}