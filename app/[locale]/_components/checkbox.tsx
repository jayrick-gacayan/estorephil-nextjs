import { FaCheck } from 'react-icons/fa6';

export function Checkbox<T>({
  current,
  onCheckboxChanged,
  value,
  labelText,
  labelClassname,
}: {
  current: T;
  value: T
  onCheckboxChanged: (value: T) => void;
  labelText?: string;
  labelClassname?: (value: T, current: T) => string;
}) {
  return (
    <div className='flex w-fit gap-2 items-center justify-start cursor-pointer'
      onClick={() => { onCheckboxChanged(value) }}>
      <div className='flex-none w-auto'>
        <div className={`border -leading-1  ${current === value ? 'border-primary text-primary' : 'border-tertiary'} rounded w-5 h-5`} >
          <FaCheck className={`${current === value ? 'block' : 'hidden'} w-4 h-4 translate-x-[1.5px] translate-y-[.5px]`} />
        </div>
      </div>
      {
        (labelText && labelClassname) &&
        (<div className={labelClassname(value, current)}>{labelText}</div>)
      }
    </div >
  )
}