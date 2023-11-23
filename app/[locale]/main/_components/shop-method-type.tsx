import Image from 'next/image';
import { ReactNode } from 'react';

export default function ShopMethodType({
  shopMethodType,
  otherText,
  shopMethodImage,
  shopMethodActiveClass,
  onShoppingMethodSet,
}: {
  shopMethodType: string;
  otherText: string;
  shopMethodImage: string;
  shopMethodActiveClass: (shopMethodType: string) => string;
  onShoppingMethodSet: (shopMethodType: string) => void;
}): JSX.Element {

  return (
    <div className={`cursor-pointer hover:bg-primary transition-all duration-75 ${shopMethodActiveClass(shopMethodType)} w-48 space-y-8 h-full p-4`}
      onClick={() => { onShoppingMethodSet && onShoppingMethodSet(shopMethodType); }}>
      <Image alt={`${shopMethodImage}-shopping-method`}
        src={`/others/${shopMethodImage}`}
        width={96}
        height={96}
        className='w-24 flex-none h-24 m-auto block' />
      <div>
        <h4 className='font-semibold'>{shopMethodType}</h4>
        <span className='block text-sm'>{otherText}</span>
      </div>

    </div>
  )
}