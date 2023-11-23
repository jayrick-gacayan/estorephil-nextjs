'use client';

import { useAppSelector, useAppDispatch } from '@/app/_hooks/redux_hooks';
import { RootState, AppDispatch } from '@/redux/store';
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BsBox2 } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import { MainState } from '../_redux/main_state';
import { ShopMethod } from '@/models/shop-method';
import DropdownItem from '../../_components/dropdown-item';
import ShopMethodDropdownItem from '../_components/shop-method-dropdown-item';
import Dropdown from '../../_components/dropdown';
import Link from 'next-intl/link';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { ShopMethodState } from '../(shopMethod)/_redux/shop-method-state';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import { removeFromToShopMethodItem } from '../(shopMethod)/_redux/shop-method-slice';

export default function ShopMethodDropdown({ children }: { children: ReactNode }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const shopMethodState: ShopMethodState = useAppSelector((state: RootState) => { return state.shopMethod });
  const dispatch: AppDispatch = useAppDispatch();

  const shoppingMethod = useMemo(() => { return mainState.shoppingMethod; }, [mainState.shoppingMethod]);
  const shopMethodItems = useMemo(() => { return shopMethodState.shopMethodItems }, [shopMethodState.shopMethodItems]);

  let shopHeaderText = shoppingMethod === 'Shopping Cart' ? 'CART' : 'BALIKBAYAN';

  const closeDropdown = useCallback(() => {
    if (dropdownRef.current) {
      let querySelector = dropdownRef.current.querySelector('#dropdown-shop-method');
      if (querySelector) {
        querySelector.classList.add('hidden')
      }
    }
  }, []);

  useEffect(() => {
    if (shoppingMethod !== '') {
      closeDropdown();
    }
  }, [shoppingMethod, closeDropdown]);

  useOutsideClick(dropdownRef, () => {
    closeDropdown();
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
          {shopMethodItems.length > 0 && (<span className='absolute -top-3 -right-3 rounded-full w-auto p-1.5 bg-danger'>{shopMethodItems.length}</span>)}
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
          {shopMethodItems.length > 0 && (<div className='flex-none w-auto text-secondary-light text-base'>{shopMethodItems.length}</div>)}
        </div>
        <div className='space-y-2'>
          {
            shopMethodItems.length === 0 ? (<div className='text-center font-semibold text-[24px] leading-0'>No Items</div>) :
              (
                <>
                  {
                    shopMethodItems.slice(0, 4).map((shopMethodItem: Cart | BalikbayanBox) => {
                      return (
                        <DropdownItem key={`shop-method-key-${shopMethodItem.product.name}-${shopMethodItem.product.id}`}>
                          <ShopMethodDropdownItem onDelete={() => {
                            dispatch(removeFromToShopMethodItem(shopMethodItem));
                          }} {...shopMethodItem.product} />
                        </DropdownItem>
                      )
                    })
                  }
                </>
              )
          }
        </div>
        <Link href={`/${shoppingMethod === 'Shopping Cart' ? 'cart' : 'balikbayan'}`}
          className='text-warning underline block text-center cursor-pointer'
          onClick={() => {
            if (dropdownRef.current) {
              let querySelector = dropdownRef.current.querySelector('#dropdown-shop-method');
              if (querySelector) {
                querySelector.classList.add('hidden')
              }
            }
          }}>
          View All
        </Link>
      </div>
    </Dropdown>
  )
}