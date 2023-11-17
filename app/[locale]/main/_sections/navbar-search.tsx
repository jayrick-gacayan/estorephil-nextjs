'use client';

import { useRouter } from 'next-intl/client';
import { ChangeEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export function NavbarSearch() {
  const [navbarSearchText, setNavbarSearchText] = useState<string>('');
  const router = useRouter();

  return (
    <div className='flex-1 flex justify-between item-stretch overflow-hidden rounded bg-white w-full'>
      <div className='p-3'>
        <FaSearch className='w-4 h-4 align-middle inline-block text-secondary' />
      </div>
      <div className='p-3 w-full'>
        <input type='text'
          className='w-full text-black placeholder:text-secondary outline-none focus:outline-none'
          placeholder='Search products'
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setNavbarSearchText(event.target.value)
          }} />
      </div>
      <div className='bg-yellow-400 h-full p-3 self-center cursor-pointer'
        onClick={() => {
          let queryStringParams = new URLSearchParams();

          queryStringParams.set('keyword', "" + navbarSearchText);
          router.push('/search?' + queryStringParams.toString());
        }}>
        Search
      </div>
    </div>
  )
}