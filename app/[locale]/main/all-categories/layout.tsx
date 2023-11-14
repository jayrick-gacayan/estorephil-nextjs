import { ReactNode } from 'react';
import { CategorySidebar } from './_sections/category_sidebar';
import Image from 'next/image'
import { BreadcrumbProps } from '@/types/props/breadcrumb_props';
import { Breadcrumbs } from '../_components/bread_crumbs';

const allCategoriesBCItems: BreadcrumbProps[] = [
  { link: '/home', text: 'Home' },
  { text: 'All Categories' }
];

export default function CategoriesLayout({ children }: { children: ReactNode }) {

  return (
    <div className='text-secondary'>
      <div className='flex lg:flex-row flex-col'>
        <CategorySidebar />
        <div className='flex-1'>
          <div className='bg-white px-4 pt-4 pb-8 space-y-1.5 border-b-2 border-b-secondary-light'>
            <Breadcrumbs breadcrumbs={allCategoriesBCItems} />
            <div className='flex gap-4'>
              <div className="w-32 h-32 flex-none">
                {<Image alt={`product-category`}
                  src='/others/costco.png'
                  width={128}
                  height={128}
                  className='w-full h-full' />}
              </div>
              <div className="w-32 h-32 flex-none">
                {<Image alt={`product-category`}
                  src='/others/costco.png'
                  width={128}
                  height={128}
                  className='w-full h-full' />}
              </div>
              <div className="w-32 h-32 flex-none">
                {<Image alt={`product-category`}
                  src='/others/costco.png'
                  width={128}
                  height={128}
                  className='w-full h-full' />}
              </div>
              <div className="w-32 h-32 flex-none">
                {<Image alt={`product-category`}
                  src='/others/costco.png'
                  width={128}
                  height={128}
                  className='w-full h-full' />}
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}