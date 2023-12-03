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
        <div className={`border -leading-1  ${current === value ? 'border-primary text-primary' : 'border-tertiary'} rounded w-6 h-6`} >
          <FaCheck size={20} className={`${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`} />
        </div>
      </div>
      {
        (labelText && labelClassname) &&
        (<div className={labelClassname(value, current)}>{labelText}</div>)
      }
    </div >
  )
}