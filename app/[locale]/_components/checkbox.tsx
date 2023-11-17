import { FaCheck } from "react-icons/fa6";

export function Checkbox({
  labelText,
  current,
  onCheckboxChanged,
}: {
  labelText: string;
  current: string;
  onCheckboxChanged: (text: string) => void;
}) {
  return (
    <div className='flex w-fit gap-2 items-center justify-start cursor-pointer'
      onClick={() => { onCheckboxChanged(labelText) }}>
      <div className='flex-none w-auto'>
        <div className={`border -leading-1  ${current === labelText ? 'border-primary text-primary' : 'border-tertiary'} rounded w-5 h-5`} >
          <FaCheck className={`${current === labelText ? 'block' : 'hidden'} w-4 h-4 translate-x-[1.5px] translate-y-[.5px]`} />
        </div>
      </div>
      <div className={`inline-block text-sm flex-1 ${labelText === current ? 'text-primary' : 'text-inherit'}`}>{labelText}</div>
    </div >
  )
}