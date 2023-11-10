import { Seller } from '@/models/seller';
import Image from 'next/image';

export function SellerItem({ seller }: { seller: Seller }) {
  return (
    <div className="w-32 h-32 flex-none">
      {<Image alt={`seller-${seller.id}`}
        src={seller.sellerImage}
        width={128}
        height={128}
        className='w-full h-full' />}
    </div>
  )
}