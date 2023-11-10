import { FaSearch } from "react-icons/fa";

export function NavbarSearch() {
  return (
    <div className='flex-1 flex justify-between item-stretch overflow-hidden rounded bg-white w-full'>
      <div className='p-3'>
        <FaSearch className='w-4 h-4 align-middle inline-block text-[#2F353D]' />
      </div>
      <div className='p-3 w-full'>
        <input type='text'
          className='w-full text-black placeholder:text-[#2F353D]'
          placeholder='Search products' />
      </div>
      <div className='bg-yellow-400 h-full p-3 self-center'>
        Search
      </div>
    </div>
  )
}