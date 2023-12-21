import { usePathname, useRouter } from 'next-intl/client';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';

export function NavbarSearch() {
  const [navbarSearchText, setNavbarSearchText] = useState<string>('');
  const router = useRouter();
  const pathName: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const onCategoryPage: boolean = pathName.includes('all-categories')

  let searchText: string = useMemo(() => {
    let search: string | null = searchParams.get('search');
    return search !== null ? search : '';
  }, [searchParams.get('search')])

  useEffect(() => {
    setNavbarSearchText(searchText);
  }, [searchText])

  return (
    <div className='flex-1 flex justify-between item-stretch overflow-hidden rounded bg-white w-full'>
      <div className='p-3 text-tertiary-dark'>
        <FaSearch size={20} className='align-middle inline-block ' />
      </div>
      <div className='p-3 w-full'>
        <input type='text'
          className='w-full text-black placeholder:text-tertiary-dark outline-none focus:outline-none'
          onChange={(event: ChangeEvent<HTMLInputElement>) => { setNavbarSearchText(event.target.value); }}
          placeholder='Search products' />
      </div>
      <div className={` h-full p-3 self-center
        ${navbarSearchText === '' ? 'cursor-not-allowed bg-tertiary-dark' : 'cursor-pointer bg-warning'}`}
        onClick={() => {
          let queryStringParams = new URLSearchParams(Array.from(searchParams.entries()));

          if (navbarSearchText !== '') {
            queryStringParams.set('search', navbarSearchText);
            router.push(`${!onCategoryPage ? pathName : 'all-categories'}?${queryStringParams.toString()}`);
          }
          else { return; }
        }}>
        Search
      </div>
    </div >
  )
}