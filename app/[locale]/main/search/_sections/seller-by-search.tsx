'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import SellersJSON from '@/app/_data/seller.json';
import { Seller } from '@/models/seller';

export default function SellerBySearch() {
  const searchParams = useSearchParams();

  return (
    <div className='flex gap-4'>
      {
        SellersJSON.sellers.map((seller: Seller) => {
          return (
            <div key={`seller-by-search-${seller.id}`}
              className="w-32 h-32 flex-none">
              <Image alt={`product-category-seller-${seller.id}`}
                src={seller.image}
                width={128}
                height={128}
                className='w-full h-full' />
            </div>
          )
        })
      }
    </div>
  )
}