import { ReactNode } from 'react';

export default function DeliveryAreasContainer({
  labelText,
  children
}: {
  labelText: string;
  children: ReactNode;
}) {
  return (
    <div className='border border-t-4 border-t-secondary rounded w-full'>
      <div className='py-4 px-8 text-2xl border-b border-b-tertiary-dark'>{labelText}</div>
      <div className='py-4 px-8 space-y-4'>
        {children}
      </div>
    </div>
  )
}