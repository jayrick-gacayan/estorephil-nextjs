import { FaChevronDown } from "react-icons/fa";

export default function CourierCustomSelectField<T>({
  inputId,
  labelText,
  items,
  value,
  onSelectChange,
}: {
  inputId: string;
  labelText?: string;
  items: T[];
  value: T;
  onSelectChange: (value: T) => void;
}) {

  let currentValue = typeof value === 'string' ? (value === '' ? '' : value) : typeof value === 'number' ? value : value ? Object.assign(value, {} as any).name : ``;

  return (
    <div className="bg-white w-full relative">
      <div className="relative bg-inherit [&_div.items-container]:focus-within:block">
        <div className="flex items-center  border-[.5px] [&_.chevron-down]:focus-within:-rotate-90 focus-within:border-info border-secondary rounded px-2 ">
          <div className="flex-1">
            <input type="text"
              id={inputId}
              readOnly
              value={currentValue}
              className="relative z-0 peer sample p-2 w-full text-secondary outline-0 outline-none" placeholder='' />
          </div>
          <div className="flex-none w-auto">
            <FaChevronDown className='transition-all delay-100 chevron-down inline-block rotate-0 ' />
          </div>
        </div>

        <div className={`items-container transition-all hidden z-20 delay-100 overflow-auto rounded border border-secondary absolute top-[110%] w-full bg-white left-0 ${items.length > 5 ? 'peer-focus/sample:h-56 peer-focus/sample:border' : 'peer-focus/sample:h-fit peer-focus/sample:border'}`}>
          {
            items.map((item: any, index: number) => {
              let itemValue = typeof item === 'string' ? item : typeof item === 'number' ? item : item.name;

              // let currentValue = typeof value === 'string' ? value : typeof value === 'number' ? value :
              //   value ? Object.assign(value, {} as any).name : ``
              return (
                <div key={`${index}-select-${inputId}`}
                  className={`px-2 py-1 cursor-pointer bg-inherit hover:bg-info hover:text-white`}
                  onMouseDown={
                    () => {
                      onSelectChange(item);
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