'use client';

import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export function CustomSelect<T, P>({
  labelText,
  items,
  value,
  placeholder,
}: {
  labelText?: string;
  items: T[];
  value: P;
  placeholder: string;
}): JSX.Element {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className='block space-y-1 w-full'>
      {labelText && <div className='block'>{labelText}</div>}
      <div className='block relative'>
        <div className='flex border border-secondary-light rounded overflow-hidden bg-white p-2 hover:cursor-pointer'
          onClick={() => {
            if (items.length > 0) { setVisible(!visible); }
          }}>
          <div className='flex-1'>
            {typeof value === 'string' ? (value === '' ? placeholder : value) : typeof value === 'number' ? value : value ? Object.assign(value, {} as any).name : `${placeholder}`}
          </div>
          <div className='w-auto flex-none'>
            <HiChevronDown className={`transition-all duration-100 w-8 h-6 ${visible ? `-rotate-90` : `rotate-0`}`} />
          </div>
        </div>
        <div className={`overflow-auto rounded border border-secondary-light absolute top-[110%] z-50 w-full bg-white left-0 ${visible ? `block` : `hidden`}`}>
          {
            items.map((item: any, index: number) => {
              let itemValue = typeof item === 'string' ? item : typeof item === 'number' ? item : item.name;

              let currentValue = typeof value === 'string' ? value : typeof value === 'number' ? value :
                value ? Object.assign(value, {} as any).name : ``
              return (
                <div key={`${index}-select`}
                  className={`px-2 py-1 cursor-pointer ${currentValue === itemValue && currentValue !== '' ? `bg-primary text-white` : `bg-inherit hover:bg-primary hover:text-white`}`}
                  onClick={
                    () => {
                      setVisible(false);
                    }
                  }>
                  {itemValue}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}