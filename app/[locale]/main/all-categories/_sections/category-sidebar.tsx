'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-intl/client';
import { Checkbox } from '@/app/[locale]/_components/checkbox';

export function CategorySidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className='flex-none bg-white w-[292px] border-r-2 border-r-secondary-light py-2'>
      <div className='space-y-3 w-fit m-auto'>
        <div className='font-bold'>Categories</div>
        <div className='block space-y-4'>
          {
            [
              '3D Printed Products',
              'Automotive & Powerparts',
              'Baby Products',
              'Beauty',
              'Books',
              'Camera & Photo',
              'Cell Phone Devices',
              'Clothing & Accessories',
              'Collectibles \u207B Books',
              'Collectibles \u207B Coins',
              'Consumer Electronics',
              'Electronics Accessories',
            ].map((category: string, index: number) => {
              return (
                <Checkbox key={`category-${index}-${category}`}
                  labelText={category}
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