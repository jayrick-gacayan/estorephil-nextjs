import { ReactNode } from 'react';
import { CategorySidebar } from './_sections/category_sidebar';
import Image from 'next/image'
import { BreadcrumbItem } from './_components/breadcrumb_item';

export default function CategoriesLayout({ children }: { children: ReactNode }) {
  return (
    <div className='text-[#2F353D]'>
      <div className='flex lg:flex-row flex-col'>
        <CategorySidebar />
        <div className='flex-1'>
          <div className='bg-white px-4 pt-4 pb-8 space-y-1.5 border-b-2 border-b-[#77620038]'>
            <div className='space-x-1'>
              <BreadcrumbItem isLink={true} withRightArrowChevron={true} text='Home' />
              <BreadcrumbItem isLink={false} withRightArrowChevron={false} text='All Categories' />
            </div>
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