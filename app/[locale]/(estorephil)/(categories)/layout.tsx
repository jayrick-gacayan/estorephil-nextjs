import { ReactNode } from 'react';
import { CategorySidebar } from './_sections/category_sidebar';
import Image from 'next/image'

export default function CategoriesLayout({ children }: { children: ReactNode }) {
  return (
    <div className='text-[#2F353D]'>
      <div className='flex lg:flex-row flex-col'>
        <CategorySidebar />
        <div className='flex-1'>
          <div className='bg-white px-4 py-8'>
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