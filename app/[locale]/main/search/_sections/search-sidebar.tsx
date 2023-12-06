'use client';

import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-intl/client';

export function SearchSidebar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function checkboxLabelClassname(value: string, current: string) {
    return `inline-block text-sm flex-1 ${value === current ? 'text-primary' : 'text-inherit'}`;
  }

  function checkBoxClassName(value: string, current: string) {
    return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-tertiary'} rounded w-6 h-6`;
  }

  function checkClassName(value: string, current: string) {
    return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
  }

  return (
    <div className='sticky top-[200px] left-0 z-10 py-2 flex-none bg-white w-[320px] border-r-2 border-r-secondary-light'>

      <div className='space-y-3 w-3/4 m-auto'>
        <div className='space-y-3'>
          <div className='font-bold'>Related Categories</div>
          <div className='block space-y-4'>
            {
              [
                'Camera & Photo',
                'Cell Phone Devices',
                'Collectibles \u2212 Entertainment or Sports',
                'Consumer Electronics',
                'Electronics Accessories',
                'Electronics Accessories',
              ].map((relatedCategory: string, index: number) => {
                return (
                  <Checkbox<string> key={`related-category-${index}-${relatedCategory}`}
                    labelText={relatedCategory}
                    labelClassname={checkboxLabelClassname}
                    value={relatedCategory}
                    current={searchParams.get('keyword') ?? ''}
                    checkBoxClassName={checkBoxClassName}
                    checkClassName={checkClassName}
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
                  <Checkbox<string> key={`ship-from-${index}-${shipFrom}`}
                    labelText={shipFrom}
                    labelClassname={checkboxLabelClassname}
                    current=''
                    value={shipFrom}
                    checkBoxClassName={checkBoxClassName}
                    checkClassName={checkClassName}
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