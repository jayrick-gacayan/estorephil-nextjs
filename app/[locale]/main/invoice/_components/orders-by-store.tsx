import { Seller } from '@/models/seller';
import { ReactNode } from 'react';
import Image from 'next/image';

export default function OrderByStore({
  orderNo,
  seller,
  children,
}: {
  orderNo: number;
  seller: Seller;
  children: ReactNode;
}) {
  return (
    <div className='border border-secondary-light rounded'>
      <div className='bg-tertiary-dark space-y-2 p-2'>
        <div className='text-[#E67E22] font-[600]'>ORDER NO. {orderNo}</div>
        <div className='space-x-2'>
          <Image alt={`order-by-store-${orderNo}-${seller.id}`}
            src={seller.image}
            width={48}
            height={48}
            className='w-12 h-12 inline-block' />
          <span className='inline-block align-middle'>{seller.name}</span>
        </div>
      </div>
      {children}
    </div>
  )

}