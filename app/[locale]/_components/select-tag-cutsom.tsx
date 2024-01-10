import { ValidationType } from "@/types/enums/validation-type";
import { HiChevronDown } from "react-icons/hi";

export default function SelectTagCustom({
  items,
  value,
  onSelect,
  placeholder,
  valueClassName,
  optionActiveClassName,
  errorText = '',
  status = ValidationType.NONE
}: {
  items: any[];
  value: any;
  placeholder: string;
  onSelect: (item: any) => void;
  valueClassName: (status: ValidationType) => string;
  optionActiveClassName: (current: string, value: string) => string;
  errorText?: string;
  status?: ValidationType
}) {
  let selectValue =
    (typeof value === 'string' && value !== '')
      ? value : typeof value === 'number'
        ? value
        : value
          ? Object.assign(value, {} as any).name
          : ``;

  return (
    <div className="relative w-full">
      <label className={`group peer p-2 relative rounded w-full block cursor-pointer border ${valueClassName(status)}`}>
        <div className="absolute z-10 top-0 left-0 flex items-center justify-between p-2 w-full gap-2">
          <div className="flex-1">
            <div className={selectValue === '' ? 'text-tertiary-dark' : 'text-default-dark'}>
              {selectValue === '' ? placeholder : selectValue}
            </div>
          </div>
          <div className='w-auto flex-none'>
            <HiChevronDown size={20} className='transition-all duration-100 rotate-0 group-has-[:focus]:-rotate-90' />
          </div>
        </div>
        <input type="text" className="outline-0 w-0 h-0 relative z-0 peer" />
      </label>
      {errorText && <div className="text-danger">{errorText}</div>}
      <div className={`overflow-auto w-full z-50 bg-white transition-all delay-100 absolute h-0 rounded peer-has-[:focus]:border-[.5px] border-0 border-tertiary-dark top-[110%]
        ${items.length > 5 ? 'peer-has-[:focus]:h-[240px]' : `peer-has-[:focus]:h-auto`}`}>
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
              className={`p-2 cursor-pointer ${optionActiveClassName(currentValue, itemValue)}`}
              onMouseDown={() => { onSelect(item); }}
              onTouchEnd={() => { onSelect(item); }}>
              {itemValue}
            </div>
          );
        })}
      </div>
    </div>
  )
}