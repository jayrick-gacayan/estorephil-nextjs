import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import Image from 'next/image';
import { Seller } from '@/models/seller';
import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { ReactNode, useState } from 'react';

export default function ShopMethodCollapsible({
  seller,
  children,
  currentCheckAllItemsSeller,
  onCheckboxChanged
}: {
  seller: Seller;
  children: ReactNode;
  currentCheckAllItemsSeller?: boolean;
  onCheckboxChanged?: (value: boolean) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='border border-secondary-light'>
      <div className='flex items-center p-4 bg-tertiary-dark border-b-2 border-secondary-light'>
        <div className='flex-1 space-x-3'>
          {
            (currentCheckAllItemsSeller && onCheckboxChanged) &&
            (
              <div className='inline-block align-middle'>
                <Checkbox<boolean> value={true}
                  current={currentCheckAllItemsSeller}
                  onCheckboxChanged={onCheckboxChanged!}
                  checkBoxClassName={(value: boolean, current: boolean) => {
                    return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-tertiary'} rounded w-6 h-6`;
                  }}
                  checkClassName={(value: boolean, current: boolean) => {
                    return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
                  }} />
              </div>
            )
          }

          <Image alt={`cart-image-seller-${seller.id}`}
            src={seller.image}
            width={48}
            height={48}
            className='w-12 h-12 inline-block align-middle' />
          <span className='font-semibold leading-0 text-[20px] align-middle'>{seller.name}</span>
        </div>
        <div>
          <CiCircleMinus className={`transition-all duration-100 w-5 h-5 text-[#857114] stroke-1 ${open ? 'block' : 'hidden'}`}
            onClick={() => { setOpen(false) }} />
          <CiCirclePlus className={`transition-all duration-100 w-5 h-5 text-[#857114] stroke-1 ${open ? 'hidden' : 'block'}`}
            onClick={() => { setOpen(true) }} />
        </div>
      </div>
      <div className={`transition-all duration-100 ${open ? 'h-auto' : 'h-0'} overflow-hidden`}>
        {children}
      </div>
    </div>
  )
}