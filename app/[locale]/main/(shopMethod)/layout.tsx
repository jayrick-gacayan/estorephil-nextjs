import { ReactNode } from 'react';
import SummaryCheckout from './_sections/summary-checkout';
import ShopMethodHeader from './_sections/shop-method-header';

export default function ShopMethodLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex'>
      <div className='flex-1 bg-white'>
        <ShopMethodHeader text={'CART'} />
        <div className='p-8 space-y-3'>
          {children}
        </div>
      </div>
      <SummaryCheckout />
    </div>
  )
}