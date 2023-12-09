
import Image from 'next/image';
import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { ReactNode, useState } from 'react';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

type Data = {
  id: number;
  image: string;
  name: string;
}

export default function Collapsible({
  data,
  checkAllData,
  onCheckboxChanged,
  collapsibleOpen,
  isNotCollapsible,
  children,
}: {
  data: Data;
  checkAllData?: boolean;
  onCheckboxChanged?: (value: boolean) => void;
  collapsibleOpen?: boolean;
  isNotCollapsible?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(collapsibleOpen ? true : false);
  return (
    <div className='border border-secondary-light'>
      <div className='flex items-center p-4 bg-tertiary-dark border-b-2 border-secondary-light'>
        <div className='flex-1 space-x-3'>
          {
            (checkAllData && onCheckboxChanged) &&
            (
              <div className='inline-block align-middle'>
                <Checkbox value={true}
                  current={checkAllData}
                  onCheckboxChanged={onCheckboxChanged}
                  checkBoxClassName={(value: boolean, current: boolean) => {
                    return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-tertiary'} rounded w-6 h-6`;
                  }}
                  checkClassName={(value: boolean, current: boolean) => {
                    return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
                  }} />
              </div>
            )
          }
          <Image alt={`cart-image-seller-${data.id}`}
            src={data.image}
            width={48}
            height={48}
            className='w-12 h-12 inline-block align-middle' />
          <span className='font-semibold leading-0 text-[20px] align-middle'>{data.name}</span>
        </div>
        {
          !isNotCollapsible &&
          (
            <div>
              <CiCircleMinus className={`transition-all duration-100 w-5 h-5 text-[#857114] stroke-1 ${open ? 'block' : 'hidden'}`}
                onClick={() => { setOpen(false) }} />
              <CiCirclePlus className={`transition-all duration-100 w-5 h-5 text-[#857114] stroke-1 ${open ? 'hidden' : 'block'}`}
                onClick={() => { setOpen(true) }} />
            </div>
          )
        }

      </div>
      <div className={`transition-all duration-100 ${isNotCollapsible ? 'h-auto' : open ? 'h-auto' : 'h-0'} overflow-hidden`}>
        {children}
      </div>
    </div>
  )
}