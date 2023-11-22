'use client';

import { useAppSelector, useAppDispatch } from '@/app/_hooks/redux_hooks';
import { RootState, AppDispatch } from '@/redux/store';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { BsBox2 } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import { MainState } from '../_redux/main_state';
import { ShopMethod } from '@/models/shop-method';
import DropdownItem from '../../_components/dropdown-item';
import ShopMethodDropdownItem from '../_components/shop-method-dropdown-item';
import Dropdown from '../../_components/dropdown';
import Link from 'next-intl/link';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';

const dropdownCartItems: ShopMethod[] = [
  {
    id: 1,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 3.7,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'cart',
  },
  {
    id: 2,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'cart',
  },
  {
    id: 3,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'cart',
  },
  {
    id: 4,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'cart',
  },
  {
    id: 5,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'cart',
  },
  {
    id: 6,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'cart',
  },
  {
    id: 7,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'cart',
  }
]

const dropdownBalikBayanBoxItems: ShopMethod[] = [
  {
    id: 1,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 3.7,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'balikbayanbox',
  },
  {
    id: 2,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'balikbayanbox',
  },
  {
    id: 3,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'balikbayanbox',
  },
  {
    id: 4,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'balikbayanbox',
  },
  {
    id: 5,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'balikbayanbox',
  },
  {
    id: 6,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'balikbayanbox',
  },
  {
    id: 7,
    name: 'CUK ROG Zephyrus Duo 16 Gaming Notebook',
    category: 'Consumer Electronics',
    price: 5458,
    rating: 4.0,
    raters: 123,
    productImage: '/products/laptop_image.png',
    shopMethod: 'balikbayanbox',
  }
]

export default function ShopMethodDropdown({ children }: { children: ReactNode }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const dispatch: AppDispatch = useAppDispatch();

  const shoppingMethod = useMemo(() => { return mainState.shoppingMethod; }, [mainState.shoppingMethod]);

  let shopHeaderText = shoppingMethod === 'Shopping Cart' ? 'CART' : 'BALIKBAYAN';
  let dropdownItems = shoppingMethod === 'Shopping Cart' ? dropdownCartItems : dropdownBalikBayanBoxItems;

  const [shopMethodItems, setShopMethodItems] = useState<ShopMethod[]>(dropdownItems);

  let sortDropdownItems = shopMethodItems.sort((a: ShopMethod, b: ShopMethod) => {
    return a.id - b.id;;
  }).slice(0, 4);

  useEffect(() => {
    if (shoppingMethod !== '') {
      if (dropdownRef.current) {
        let querySelector = dropdownRef.current.querySelector('#dropdown-shop-method');
        if (querySelector) {
          querySelector.classList.add('hidden')
        }
      }
    }
  }, [shoppingMethod]);

  useOutsideClick(dropdownRef, () => {
    if (dropdownRef.current) {
      let querySelector = dropdownRef.current.querySelector('#dropdown-shop-method');
      if (querySelector) {
        querySelector.classList.add('hidden')
      }
    }
  });

  return (
    <Dropdown ref={dropdownRef}
      className='relative inline'>
      <div className='inline-flex gap-4 items-center text-sm relative'>
        <div className='flex-none relative w-auto'>
          <div className='block'
            onClick={() => {
              if (dropdownRef.current) {
                dropdownRef.current.querySelector('#dropdown-shop-method')?.classList.toggle('hidden')
              }
            }}>
            {
              shoppingMethod === 'Shopping Cart' ?
                (<FaCartShopping className='w-10 h-10 inline-block align-middle cursor-pointer' />) :
                (<BsBox2 className='w-10 h-10 inline-block align-middle cursor-pointer' />)
            }
          </div>
          <span className='absolute -top-3 -right-3 rounded-full w-auto p-1.5 bg-danger'>12</span>
        </div>
        <div className='space-y-1'>
          <span className='block'>{shopHeaderText}</span>
          <span className='block'>C&#36; {(9999).toFixed(2)}</span>
        </div>
        {children}
      </div>
      <div id="dropdown-shop-method" className='space-y-3 text-[12px] leading-0 absolute shadow-lg shadow-secondary p-4 text-secondary top-[250%] right-0 z-[29999] rounded-xl overflow-hidden bg-white h-auto w-[384px]'>
        <div className='p-2 border-b-2 border-b-secondary-light flex gap-2 items-center'>
          <div className='flex-1 font-semibold text-lg leading-0'>{shopHeaderText.includes('BAYAN') ? `${shopHeaderText} BOX` : shopHeaderText}</div>
          <div className='flex-none w-auto text-secondary-light text-base'>10</div>
        </div>
        <div className='space-y-2'>
          {
            sortDropdownItems.map((value: ShopMethod) => {
              return (
                <DropdownItem key={`shop-method-key-${value.name}-${value.id}`}>
                  <ShopMethodDropdownItem onDelete={() => {
                    setShopMethodItems(shopMethodItems.filter((shopMethod: ShopMethod) => { return shopMethod.id !== value.id }))
                  }} {...value} />
                </DropdownItem>
              )
            })
          }
        </div>
        <Link href='/home' className='text-warning underline block text-center cursor-pointer'>
          View All
        </Link>
      </div>
    </Dropdown>
  )
}