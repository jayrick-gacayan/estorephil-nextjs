import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function SearchContainer() {
  return (
    <div className='flex w-96 items-center gap-2'>
      <div className='flex-none w-auto'>
        <FaMagnifyingGlass size={20} />
      </div>
      <div className='flex-1 w-full'>
        <input type='text'
          className='border-[.5px] border-[#707070] p-2 w-full rounded' />
      </div>
    </div>
  )
}