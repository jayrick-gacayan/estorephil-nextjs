import { ReactNode } from 'react';
import Image from 'next/image';

export default function CustomCountryPicker<T>({
  show,
  value,
  labelText,
  items,
  onToggle,
  onSelect,
}: {
  show: boolean;
  value: T
  labelText: (value: T) => ReactNode;
  items: T[];
  onToggle: () => void;
  onSelect: (value: T) => void | Promise<void>;
}) {
  return (
    <div className='relative'>
      <div tabIndex={0}
        className='relative z-10 cursor-pointer'
        onFocus={onToggle}
        onBlur={onToggle}>
        {labelText(value)}
      </div>
      <div className={`transition-all delay-100 text-default-dark overflow-hidden rounded border-tertiary-dark absolute top-[110%] w-full bg-white left-0 border
        ${show ? 'block' : 'hidden'}`}>
        {
          items.map((item: any, index: number) => {
            return (<div key={`${index}-${item.code}`}
              className='flex items-center gap-4 p-2 hover:bg-tertiary-dark cursor-pointer'
              onMouseDown={() => { onSelect(item); }}
              onTouchEnd={() => { onSelect(item) }}>
              <div className='block'>
                <Image alt='selected-country-picker-alt'
                  src={`/flags/${item.code}_flag.svg`}
                  height={24}
                  width={24}
                  className='w-6 h-6' />
              </div>
              <div className='block'>{item.code.toUpperCase()}</div>
            </div>)
          })
        }
      </div>
    </div>
  )
}