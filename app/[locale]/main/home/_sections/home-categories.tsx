'use client';

import { useRouter } from 'next-intl/client';
import Link from 'next-intl/link';
import { Categories } from '@/models/category';
import { HiOutlineExclamation } from 'react-icons/hi';

export function HomeCategories({ categories }: { categories: Categories[] }) {
  const router = useRouter();

  return (
    <div className='lg:block hidden flex-none border rounded border-secondary-light p-3 space-y-2 bg-white w-64'>
      <div className='flex'>
        <div className='flex-1 font-semibold'>CATEGORIES</div>
        <button className='w-auto flex-none underline text-primary text-sm hover:text-primary-dark'
          onClick={() => { router.push('/all-categories') }}>View All</button>
      </div>
      <div className='flex flex-col h-[348px]'>
        {
          categories.length === 0 ?
            (
              <div className='flex items-center justify-center h-full'>
                <div className='flex-none w-auto text-secondary-light'>
                  <HiOutlineExclamation size={56} className="block w-auto m-auto" />
                  <span className='block text-[24px]'>No categories yet</span>
                </div>
              </div>

            ) :
            (
              <>
                {
                  categories.map(
                    (category: Categories, index) => {
                      return <Link key={`${index}-categories`}
                        className='block hover:text-primary hover:underline'
                        href={{
                          pathname: '/all-categories',
                          query: { 'category[]': category.name }
                        }}>
                        {category.name}
                      </Link>
                    }
                  )
                }
              </>
            )
        }
      </div>
    </div>
  )
}