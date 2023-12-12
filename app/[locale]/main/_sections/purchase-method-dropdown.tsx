'use client';

import { useAppSelector, useAppDispatch } from '@/app/_hooks/redux_hooks';
import { RootState, AppDispatch } from '@/redux/store';
import { ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';
import { BsBox2 } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import { MainState } from '../_redux/main_state';
import DropdownItem from '../../_components/dropdown-item';
import ShopMethodDropdownItem from '../_components/shop-method-dropdown-item';
import Dropdown from '../../_components/dropdown';
import Link from 'next-intl/link';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import { PurchaseMethodState } from '../purchase-method/[slug]/_redux/purchase-method-state';
import { usePrevious } from '@/app/_hooks/use_previous_value';
import Image from 'next/image';
import { removeFromToPurchaseMethodItem } from '../purchase-method/[slug]/_redux/purchase-method-slice';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';

export default function PurchaseMethodDropdown({ children }: { children: ReactNode }) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toastOnDropdownRef = useRef<HTMLDivElement>(null);
  const dispatch: AppDispatch = useAppDispatch();

  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const purchaseMethodState: PurchaseMethodState = useAppSelector((state: RootState) => { return state.purchaseMethod });
  const purchaseMethod = useMemo(() => { return mainState.purchaseMethod; }, [mainState.purchaseMethod]);

  const purchaseMethodItems = useMemo(() => { return purchaseMethodState.purchaseMethodItems }, [purchaseMethodState.purchaseMethodItems]);
  const prevCountRef = usePrevious(purchaseMethodItems.length);
  const purchaseMethodItemToToast = useMemo(() => { return purchaseMethodState.purchaseMethodItemToInteract; }, [purchaseMethodState.purchaseMethodItemToInteract])

  let purchaseMethodHeaderText = purchaseMethod === 'Shopping Cart' ? 'CART' : 'BALIKBAYAN';

  const closeDropdown = useCallback(() => {
    if (dropdownRef.current) {
      let querySelector = dropdownRef.current.querySelector('#dropdown-purchase-method');
      if (querySelector) {
        querySelector.classList.add('hidden')
      }
    }
  }, []);

  useEffect(() => {
    if (toastOnDropdownRef.current) {
      if (prevCountRef) {
        if (prevCountRef > purchaseMethodItems.length ||
          prevCountRef < purchaseMethodItems.length) {
          toastOnDropdownRef.current.classList.remove('hidden');
          toastOnDropdownRef.current.classList.add('block');

          setTimeout(() => {
            if (toastOnDropdownRef.current) {
              toastOnDropdownRef.current.classList.remove('block');
              toastOnDropdownRef.current.classList.add('hidden');
            }
          }, 1000)
        }
      }
    }
  }, [purchaseMethodItems.length, prevCountRef]);

  useEffect(() => {
    if (purchaseMethod !== '') {
      closeDropdown();
    }
  }, [purchaseMethod, closeDropdown]);

  useOutsideClick(dropdownRef, () => { closeDropdown(); });

  return (
    <Dropdown ref={dropdownRef}
      className='relative inline z-0'>
      <div className='relative inline w-fit'>
        <div className='inline-flex gap-4 items-center text-sm'>
          <div className='flex-none w-auto relative'>
            <div className='flex gap-2'>
              <div className='flex-none relative w-auto'>
                <div className='block'
                  onClick={() => {
                    if (dropdownRef.current) {
                      dropdownRef.current.querySelector('#dropdown-purchase-method')?.classList.toggle('hidden')
                    }
                  }}>
                  {
                    purchaseMethod === 'Shopping Cart' ?
                      (<FaCartShopping className='w-10 h-10 inline-block align-middle cursor-pointer' />) :
                      (<BsBox2 className='w-10 h-10 inline-block align-middle cursor-pointer' />)
                  }
                </div>
                {
                  purchaseMethodItems.length > 0 &&
                  (<span className='absolute -top-3 -right-2 w-7 h-7 bg-danger rounded-full flex justify-center items-center'>
                    <div className='flex-none w-auto'>
                      {purchaseMethodItems.length}
                    </div>
                  </span>)
                }
              </div>
              <div className='space-y-1'>
                <span className='block'>{purchaseMethodHeaderText}</span>
                <span className='block'>C&#36; {(9999).toFixed(2)}</span>
              </div>
            </div>
            <div ref={toastOnDropdownRef}
              className={`absolute top-[120%] right-0 w-64 hidden after:content-[""]
                after:absolute after:bottom-full after:right-24 after:z-[9999] after:border-solid after:border-[6px] after:border-transparent
                ${purchaseMethodItems.length > prevCountRef! ? `after:border-b-success` : `after:border-b-danger`}`}>
              {
                purchaseMethodItemToToast &&
                (
                  <div className={`${purchaseMethodItems.length > prevCountRef! ? `bg-success` : `bg-danger`} 
                    px-2 py-1 text-white w-full flex items-center gap-2 overflow-hidden rounded`}>
                    <div className='flex-none w-12 h-12'>
                      <div className='relative w-12 h-12'>
                        <Image alt='shop-method-toast-on-dropdown'
                          src={purchaseMethodItemToToast!.product.productImage}
                          fill
                          className='object-fill rounded' />
                      </div>

                    </div>
                    <div className='flex-1 space-x-2 w-full flex justify-between items-center'>
                      <span className='block'>{purchaseMethodItems.length > prevCountRef! ? 'Added to ' : 'Removed from '}{`${purchaseMethodHeaderText.at(0)}${purchaseMethodHeaderText.slice(1).toLowerCase()}`}
                      </span>
                      {
                        purchaseMethodItems.length > prevCountRef! ?
                          (<CiCircleCheck className='inline-block w-5 h-5 mr-auto' />) :
                          (<CiCircleRemove className='inline-block w-5 h-5 mr-auto' />)
                      }
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          {children}
        </div>
      </div>


      <div id="dropdown-purchase-method" className='space-y-3 text-[12px] leading-0 absolute shadow-lg shadow-secondary p-4 top-[250%] right-0 z-[9999] rounded-xl overflow-hidden bg-white h-auto w-[384px]'>
        <div className='p-2 border-b-2 border-b-secondary-light flex gap-2 items-center'>
          <div className='flex-1 font-semibold text-lg leading-0'>{purchaseMethodHeaderText.includes('BAYAN') ? `${purchaseMethodHeaderText} BOX` : purchaseMethodHeaderText}</div>
          {purchaseMethodItems.length > 0 && (<div className='flex-none w-auto text-secondary-light text-base'>{purchaseMethodItems.length}</div>)}
        </div>
        <div className='space-y-2'>
          {
            purchaseMethodItems.length === 0 ? (<div className='text-center font-semibold text-[24px] leading-0'>No Items</div>) :
              (
                <>
                  {
                    purchaseMethodItems.slice(0, 4).map((shopMethodItem: Cart | BalikbayanBox) => {
                      return (
                        <DropdownItem key={`shop-method-key-${shopMethodItem.product.name}-${shopMethodItem.product.id}`}>
                          <ShopMethodDropdownItem onDelete={() => {
                            dispatch(removeFromToPurchaseMethodItem(shopMethodItem));
                          }} {...shopMethodItem.product} />
                        </DropdownItem>
                      )
                    })
                  }
                </>
              )
          }
        </div>
        <Link href={`/purchase-method/${purchaseMethod === 'Shopping Cart' ? 'cart' : 'balikbayan'}`}
          className='text-warning underline block text-center cursor-pointer'
          onClick={() => {
            if (dropdownRef.current) {
              let querySelector = dropdownRef.current.querySelector('#dropdown-purchase-method');
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