import { productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { RootState, store } from '@/redux/store';
import { ProductRepository } from '@/repositories/product-repository';
import { usePathname, useRouter } from 'next-intl/client';
import { ChangeEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../all-categories/_redux/all-categories-thunk';
import { searchQueryChanged } from '../all-categories/_redux/all-categories-slice';

export function NavbarSearch() {
  const [navbarSearchText, setNavbarSearchText] = useState<string>('');
  const router = useRouter();
  const pathName = usePathname();
  const onCategoryPage = pathName.includes('all-categories')
  const locale = useSelector((state: RootState) => state.main).countryPicker.value
  const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
  const dispatch = useDispatch()
  return (
    <div className='flex-1 flex justify-between item-stretch overflow-hidden rounded bg-white w-full'>
      <div className='p-3 text-tertiary-dark'>
        <FaSearch size={20} className='align-middle inline-block ' />
      </div>
      <div className='p-3 w-full'>
        <input type='text'
          className='w-full text-black placeholder:text-tertiary-dark outline-none focus:outline-none'
          placeholder='Search products'
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setNavbarSearchText(event.target.value)
            dispatch(searchQueryChanged(event.target.value))
            if (onCategoryPage) {
              store.dispatch(searchProducts(productRepository, locale))
            }
          }} />
      </div>
      <div className='bg-yellow-400 h-full p-3 self-center cursor-pointer'
        onClick={() => {
          let queryStringParams = new URLSearchParams();
          store.dispatch(searchProducts(productRepository, locale))
          queryStringParams.set('search', navbarSearchText);
          if (onCategoryPage) {
            router.push(`${pathName}?search=${navbarSearchText}`);
          }
          else {
            console.log('nav bar searc:', navbarSearchText)
            router.push(`all-categories?search=${navbarSearchText}`);
          }

        }}>
        Search
      </div>
    </div >
  )
}