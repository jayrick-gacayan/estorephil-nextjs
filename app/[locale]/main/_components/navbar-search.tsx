import { RootState, store } from '@/redux/store';
import { usePathname, useRouter } from 'next-intl/client';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { searchQueryChanged } from '../all-categories/_redux/all-categories-slice';
import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import { productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { AppDispatch } from '@/redux/store';
import { ProductRepository } from '@/repositories/product-repository';
import { searchProducts } from '../all-categories/_redux/all-categories-thunk';
import { useSelector } from 'react-redux';
import { useDebounce } from 'usehooks-ts'
export function NavbarSearch({ countryCookie }: { countryCookie: string; }) {
  const [navbarSearchText, setNavbarSearchText] = useState<string>('');
  const router = useRouter();
  const pathName: string = usePathname();
  const searchParams = useSearchParams();
  const onCategoryPage: boolean = pathName.includes('all-categories')
  const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
  const state = useSelector((state: RootState) => state.allCategories)
  const dispatch: AppDispatch = useAppDispatch();
  const debouncedValue = useDebounce<string>(state.searchQuery, 300)
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  // let searchText: string = useMemo(() => {
  //   let search: string | null = searchParams.get('search');
  //   return search !== null ? search : '';
  // }, [searchParams.get('search')])

  // useEffect(() => {
  //   setNavbarSearchText(searchText);
  // }, [searchText])
  useEffect(() => {
    if (state.searchQuery != null && onCategoryPage) {
      console.log('searchQuery Value: ', state.searchQuery)
      console.log('searchQuery conidition', state.searchQuery == '' || state.searchQuery.length === 0)
      if (state.searchQuery == '' || state.searchQuery.length === 0) {
        console.log('attempt delete search value if zero')
        current.delete('search')
      }
      store.dispatch(searchProducts(productRepository, countryCookie))
      const search = current.toString();
      const query = !!search ? `?${search}` : "";
      router.push(`${pathName}${query}`)
    }
  }, [debouncedValue])
  return (
    <div className='flex-1 flex justify-between item-stretch overflow-hidden rounded bg-white w-full'>
      <div className='p-3 text-tertiary-dark'>
        <FaSearch size={20} className='align-middle inline-block ' />
      </div>
      <div className='p-3 w-full'>
        <input type='text'
          className='w-full text-black placeholder:text-tertiary-dark outline-none focus:outline-none'
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setNavbarSearchText(event.target.value);
            dispatch(searchQueryChanged(event.target.value))

          }}
          value={state.searchQuery}
          defaultValue={state.searchQuery}
          placeholder='Search products'
        />
      </div>
      <div className={` h-full p-3 self-center cursor-pointer bg-warning`}
        onClick={() => {
          let queryStringParams = new URLSearchParams(Array.from(searchParams.entries()));

          if (state.searchQuery === '') {
            queryStringParams.delete('search');
          }
          else {
            queryStringParams.set('search', state.searchQuery);
          }
          let qString = queryStringParams.toString();
          router.push(`/all-categories${qString !== '' ? `?${qString.toString()}` : ``}`)
        }}>
        Search
      </div>
    </div >
  )
}