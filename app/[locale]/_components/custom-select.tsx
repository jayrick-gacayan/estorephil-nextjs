'use client';

import { forwardRef, memo, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export type SelectProps<T, P> = {
  labelText: string;
  items: T[]
  value: P
  placeholder: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onSelect?: (value: T) => void;
}

export const CustomSelect = forwardRef<HTMLDivElement, SelectProps<any, any>>((
  {
    labelText,
    items,
    value,
    placeholder,
    onSelect,
    visible,
    setVisible
  }, ref
) => {

  let selectValue = typeof value === 'string' ? (value === '' ? placeholder : value) : typeof value === 'number' ? value : value ? Object.assign(value, {} as any).name : `${placeholder}`;
  return (
    <div ref={ref} className='block space-y-1 w-full'>
      {labelText && <div className='block'>{labelText}</div>}
      <div className='block relative'>
        <div className='flex rounded overflow-hidden p-2 hover:cursor-pointer'>
          <div className={`flex-1 ${selectValue === placeholder ? 'text-tertiary-dark' : 'text-inherit'}`} onClick={() => {
            if (items.length > 0) { setVisible(true); }
          }}>
            {typeof value === 'string' ? (value === '' ? placeholder : value) : typeof value === 'number' ? value : value ? Object.assign(value, {} as any).name : `${placeholder}`}
          </div>
          <div className='w-auto flex-none'
            onClick={() => {
              if (items.length > 0) { setVisible(!visible); }
              else { return; }
            }}>
            <HiChevronDown className={`transition-all duration-100 w-8 h-6 ${visible ? `-rotate-90` : `rotate-0`}`} />
          </div>
        </div>
        <div className={`overflow-auto rounded border border-tertiary-dark absolute top-[110%] z-50 w-full bg-white left-0 ${visible ? `block` : `hidden`}`}>
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
                      onSelect && onSelect(item);
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
});

CustomSelect.displayName = 'CustomSelect';

export default memo(CustomSelect);
