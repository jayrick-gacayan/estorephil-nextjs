import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import Image from 'next/image';
import { ReactNode } from 'react';

export default function PurchaseMethodRowItems({
  purchaseMethodItem,
  withCheckboxComponent,
  withQuantityComponent,
}: {
  purchaseMethodItem: Cart | BalikbayanBox;
  withCheckboxComponent?: ReactNode;
  withQuantityComponent: ReactNode;
}) {
  return (
    <div className='flex gap-2 p-2 text-secondary items-center'>
      {withCheckboxComponent && withCheckboxComponent}

      <div className='flex-none w-24 text-center overflow-hidden'>
        <Image alt={`alt-cart-image-${purchaseMethodItem.product.id}-${purchaseMethodItem.seller.id}`}
          src={purchaseMethodItem.product.productImage}
          width={96}
          height={96}
          className='w-24 h-24 rounded object-cover' />
      </div>
      <div className='flex-1'>{purchaseMethodItem.product.name}</div>
      <div className='flex-none w-48'>C&#36; {purchaseMethodItem.product.price.toFixed(2)}</div>
      <div className='flex-none w-48'>
        {withQuantityComponent && withQuantityComponent}
      </div>
      <div className='flex-none w-28'>C&#36; {(purchaseMethodItem.quantity * purchaseMethodItem.product.price).toFixed(2)}</div>
    </div>
  )
}