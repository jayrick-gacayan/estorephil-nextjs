'use client';

import { forwardRef, memo } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export type SelectProps<T, P> = {
  labelText: string;
  items: T[];
  value: P;
  placeholder: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onSelect: (value: T) => void;
  valueClassName: (errorText: string) => string;
  optionActiveClassName: (current: string, value: string) => string;
  errorText: string;
}

export const SelectCustom = forwardRef<HTMLDivElement, SelectProps<any, any>>(
  (
    {
      labelText,
      items,
      value,
      placeholder,
      visible,
      setVisible,
      onSelect,
      valueClassName,
      optionActiveClassName,
      errorText,
    },
    ref
  ) => {
    let selectValue =
      typeof value === 'string'
        ? value === ''
          ? placeholder
          : value
        : typeof value === 'number'
          ? value
          : value
            ? Object.assign(value, {} as any).name
            : `${placeholder}`;
    return (
      <div ref={ref} className='block space-y-1 w-full'>
        {labelText && <div className='block'>{labelText}</div>}
        <div className='block relative'>
          <div className={valueClassName(errorText)}
            onClick={() => {
              if (items.length > 0) {
                setVisible(!visible);
              } else {
                return;
              }
            }}>
            <div
              className={`flex-1 ${selectValue === placeholder
                ? 'text-tertiary-dark'
                : 'text-inherit'
                }`}>
              {typeof value === 'string'
                ? value === ''
                  ? placeholder
                  : value
                : typeof value === 'number'
                  ? value
                  : value
                    ? Object.assign(value, {} as any).name
                    : `${placeholder}`}
            </div>
            <div className='w-auto flex-none'>
              <HiChevronDown size={20}
                className={`transition-all duration-100 ${visible ? `-rotate-90` : `rotate-0`
                  }`}
              />
            </div>
          </div>
          <div className={`overflow-auto rounded border bg-white border-tertiary-dark absolute top-[110%] z-50 w-full text-default-dark left-0  ${visible ? 'block' : 'hidden'}`}>
            {items.map((item: any, index: number) => {
              let itemValue =
                typeof item === 'string'
                  ? item
                  : typeof item === 'number'
                    ? item
                    : item.name;

              let currentValue =
                typeof value === 'string'
                  ? value
                  : typeof value === 'number'
                    ? value
                    : value
                      ? Object.assign(value, {} as any).name
                      : ``;
              return (
                <div key={`${index}-select`}
                  className={optionActiveClassName(currentValue, itemValue)}
                  onClick={
                    () => {
                      onSelect(item);
                      setVisible(false);
                    }
                  }>
                  {itemValue}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

SelectCustom.displayName = 'SelectCustom';

export default memo(SelectCustom);
