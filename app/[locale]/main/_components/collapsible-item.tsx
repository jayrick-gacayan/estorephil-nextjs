import { ReactNode } from "react";

export default function CollapsibleItem({
  hasFirstEmptyColumn,
  children
}: {
  hasFirstEmptyColumn?: boolean;
  children: ReactNode;
}) {
  return (
    <div className='p-2'>
      <div className='flex gap-2 p-2 text-secondary-light'>
        {
          hasFirstEmptyColumn &&
          (
            <div className='flex-none w-auto'>
              <div className='flex w-fit gap-2 items-center justify-start cursor-pointer'>
                <div className='w-5 h-5 border border-transparent'></div>
              </div>
            </div>
          )
        }
        <div className='flex-none w-24 text-center'>IMAGE</div>
        <div className='flex-1'>PRODUCT NAME</div>
        <div className='flex-none w-48'>PRICE</div>
        <div className='flex-none w-48'>QUANTITY</div>
        <div className='flex-none w-28'>TOTAL</div>
      </div>
      {children}
    </div>
  )
}