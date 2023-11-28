import { Seller } from '@/models/seller';
import Image from 'next/image';
import Link from 'next-intl/link';

export function SellerItem({ seller }: { seller: Seller }) {
  return (
    <div className="w-32 h-32 flex-none">
      <Link href={`/stores/${seller.id}`}
        className='block w-full h-full'>
        {<Image alt={`seller-${seller.id}`}
          src={seller.sellerImage}
          width={128}
          height={128}
          className='w-full h-full' />}
      </Link>
    </div>
  )
}