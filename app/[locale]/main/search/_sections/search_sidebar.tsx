'use client';

import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-intl/client';

export function SearchSidebar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className='sticky top-[200px] left-0 z-10 py-2 flex-none bg-white w-[292px] border-r-2 border-r-secondary-light'>

      <div className='space-y-3 w-3/4 m-auto'>
        <div className='space-y-3'>
          <div className='font-bold'>Related Categories</div>
          <div className='block space-y-4'>
            {
              [
                'Camera & Photo',
                'Cell Phone Devices',
                'Collectibles \u207B Entertainment or Sports',
                'Consumer Electronics',
                'Electronics Accessories',
                'Electronics Accessories',
              ].map((relatedCategory: string, index: number) => {
                return (
                  <Checkbox key={`related-category-${index}-${relatedCategory}`}
                    labelText={relatedCategory}
                    current={searchParams.get('keyword') ?? ''}
                    onCheckboxChanged={(text: string) => {
                      let queryStringSearch = new URLSearchParams();

                      queryStringSearch.set('keyword', text);

                      router.push(window.location.pathname + '?' + queryStringSearch.toString());
                    }}
                  />
                )
              })
            }

          </div>
        </div>
        <div className='w-full'>
          <div className='flex gap-1 items-center justify-between w-full'>
            <div className='flex-1'>
              <input type='number' className='w-full rounded p-1 border border-tertiary' placeholder={`\u20B1 MIN`} />
            </div>
            <span className='w-12 flex-none text-center'>&#8212;</span>
            <div className='flex-1'>
              <input type='number' className='w-full rounded p-1 border border-tertiary' placeholder={`\u20B1 MAX`} />
            </div>
          </div>
        </div>
        <div className='space-y-3'>
          <div className='font-bold'>Ships from</div>
          <div className='block space-y-4'>
            {
              ['Canada', 'Philippines', 'USA',].map((shipFrom: string, index: number) => {
                return (
                  <Checkbox key={`ship-from-${index}-${shipFrom}`}
                    labelText={shipFrom}
                    current=''
                    onCheckboxChanged={(text: string) => {
                      return;
                    }} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )

}