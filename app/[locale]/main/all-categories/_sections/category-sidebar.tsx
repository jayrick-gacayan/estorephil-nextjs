'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-intl/client';
import { Checkbox } from '@/app/[locale]/_components/checkbox';

export function CategorySidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className='flex-none bg-white w-[320px] border-r-2 border-r-secondary-light py-2'>
      <div className='space-y-3 w-3/4 m-auto'>
        <div className='font-bold'>Categories</div>
        <div className='block space-y-4'>
          {
            [
              '3D Printed Products',
              'Baby Products \u0028excluding Baby Apparel\u0029',
              'Beauty',
              'Books',
              'Camera \u0026 Photo',
              'Collectibles \u2212 Books',
              'Collectibles \u2212 Coins',
              'Collectibles \u2212 Entertainment or Sports',
              'Consumer Electronics',
              'Electronics Accessories',
            ].map((category: string, index: number) => {
              return (
                <Checkbox<string> key={`category-${index}-${category}`}
                  labelText={category}
                  labelClassname={(value: string, current: string) => {
                    return `inline-block text-sm flex-1 ${value === current ? 'text-primary' : 'text-inherit'}`;
                  }}
                  value={category}
                  checkBoxClassName={(value: string, current: string) => {
                    return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-tertiary'} rounded w-6 h-6`;
                  }}
                  checkClassName={(value: string, current: string) => {
                    return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
                  }}
                  current={searchParams.get('keyword') ?? ''}
                  onCheckboxChanged={(text: string) => {
                    let queryStringSearch = new URLSearchParams();

                    queryStringSearch.set('keyword', text);

                    router.push(window.location.pathname + '?' + queryStringSearch.toString());
                  }} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}