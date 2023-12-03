import { ReactNode } from 'react';

export default function PurchaseMethodQuantityContainer({
  quantity,
  minusQuantityComponent,
  addQuantityComponent,
}: {
  quantity: number;
  minusQuantityComponent?: ReactNode;
  addQuantityComponent?: ReactNode;
}) {
  return (
    <div className={`w-32 flex overflow-hidden text-center text-[20px] leading-0 ${minusQuantityComponent && addQuantityComponent ? 'divide-x divide-secondary-light border border-secondary-light' : ''} rounded-full  items-center`}>
      {minusQuantityComponent && minusQuantityComponent}
      <div className='flex-1 p-1.5 text-center'>{quantity}</div>
      {addQuantityComponent && addQuantityComponent}
    </div>
  )
}