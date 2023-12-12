import { ChangeEvent, KeyboardEvent } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function SearchContainer({
  value,
  onChange,
  onKeyDown,
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}) {

  return (
    <div className='flex w-96 items-center gap-2'>
      <div className='flex-none w-auto'>
        <FaMagnifyingGlass size={20} />
      </div>
      <div className='flex-1 w-full'>
        <input type='text'
          className='border-[.5px] border-[#EFF0F0] px-1.5 py-1 w-full rounded'
          onChange={onChange}
          onKeyDown={onKeyDown} />
      </div>
    </div>
  )
}