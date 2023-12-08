export default function CourierCustomSelectInput<T>({
  inputId,
  labelText,
  items,
  value,
  onSelectChange,
}: {
  inputId: string;
  labelText: string;
  items: T[];
  value: T;
  onSelectChange: (value: T) => void;
}) {

  let currentValue = typeof value === 'string' ? (value === '' ? '' : value) : typeof value === 'number' ? value : value ? Object.assign(value, {} as any).name : ``;

  return (
    <div className="bg-white w-full relative">
      <div className="relative bg-inherit">
        <input type="text"
          id={inputId}
          value={currentValue}
          className="peer p-2 w-full text-[#707070] px-2 border-[.5px] focus:border-info border-[#707070] rounded outline-0 outline-none" placeholder='' />
        <label htmlFor={inputId}
          className={`absolute cursor-text transition-all left-0 -top-3 text-sm text-[#707070] ${currentValue === '' ? 'bg-transparent px-2' : 'bg-inherit mx-2 px-1'}  
            peer-focus:bg-white peer-placeholder-shown:w-full peer-focus:w-auto peer-placeholder-shown:text-base peer-placeholder-shown:text-[#707070] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-info peer-focus:text-sm `}>{labelText}</label>
        <div className={`transition-all delay-100 overflow-auto rounded border-0 border-[#707070] absolute top-[110%]  w-full bg-white left-0 ${items.length > 5 ? 'peer-focus:h-56 peer-focus:border' : 'peer-focus:h-fit peer-focus:border'} h-0 `}>
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