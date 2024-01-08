'use client';

import { useAppSelector, useAppDispatch } from '@/app/_hooks/redux_hooks';
import { RootState, AppDispatch } from '@/redux/store';
import { ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';
import { BsBox2 } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import DropdownItem from '../../_components/dropdown-item';
import CartDropdownItem from '../_components/cart-dropdown-item';
import Dropdown from '../../_components/dropdown';
import Link from 'next-intl/link';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { CartState } from '../cart/_redux/cart-state';
import { usePrevious } from '@/app/_hooks/use_previous_value';
import Image from 'next/image';
import { removeFromToPurchaseMethodItem } from '../cart/_redux/cart-slice';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';
import { MainState } from '../_redux/main-state';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { removeFromCart } from '../_redux/main-thunk';
import { ProductRepository } from '@/repositories/product-repository';
import { productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';

export default function CartTypeDropdown({ children }: { children: ReactNode }) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toastOnDropdownRef = useRef<HTMLDivElement>(null);
  const dispatch: AppDispatch = useAppDispatch();
  const { data: sessionData } = useSession()
  const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const purchaseMethodState: CartState = useAppSelector((state: RootState) => { return state.cart });
  const cartType = useMemo(() => {
    const cartType = sessionData?.cart?.cart_type ?? ``;
    return cartType === 'shopping_cart' ? 'Shopping Cart' :
      cartType === 'balikbayan_box' ? 'Balikbayan Box' : '';
  }, [mainState.cartType]);
  const productImage = useSelector((state: RootState) => state.product)?.product?.gallery?.[0]?.image_url ?? `https://www.odnetwork.org/global_graphics/default-store-350x350.jpg`
  // const purchaseMethodItems = useMemo(() => { return purchaseMethodState.purchaseMethodItems }, [purchaseMethodState.purchaseMethodItems]);
  const cartProducts = !!sessionData ? sessionData?.cart?.cart_products : mainState?.cart?.cart_products
  // const prevCountRef = usePrevious(purchaseMethodItems.length);
  const prevCountRef = usePrevious(cartProducts?.length)
  const purchaseMethodItemToToast = useMemo(() => { return purchaseMethodState.purchaseMethodItemToInteract; }, [purchaseMethodState.purchaseMethodItemToInteract])
  let cartTypeHeaderText = cartType === 'Shopping Cart' ? 'CART' : 'BALIKBAYAN';
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
        if (prevCountRef > cartProducts?.length ||
          prevCountRef < cartProducts?.length) {
          toastOnDropdownRef.current.classList.remove('hidden');
          toastOnDropdownRef.current.classList.add('block');

          setTimeout(() => {
            if (toastOnDropdownRef.current) {
              toastOnDropdownRef.current.classList.remove('block');
              toastOnDropdownRef.current.classList.add('hidden');
            }
          }, 2000)
        }
      }
    }
  }, [cartProducts?.length, prevCountRef]);

  useEffect(() => {
    if (cartType !== '') {
      closeDropdown();
    }
    console.log('cart products', cartProducts)
  }, [cartType, closeDropdown]);

  useOutsideClick(dropdownRef, () => { closeDropdown(); });

  return (
    <Dropdown ref={dropdownRef}
      className='relative inline z-[100]'>
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
                    cartType === 'Shopping Cart'
                      ? (<FaCartShopping className='w-10 h-10 inline-block align-middle cursor-pointer' />)
                      : (<BsBox2 className='w-10 h-10 inline-block align-middle cursor-pointer' />)
                  }
                </div>
                {
                  cartProducts?.length > 0 &&
                  (<span className='absolute -top-3 -right-2 w-7 h-7 bg-danger rounded-full flex justify-center items-center'>
                    <div className='flex-none w-auto'>
                      {cartProducts?.length}
                    </div>
                  </span>)
                }
              </div>
              <div className='space-y-1'>
                <span className='block'>{cartTypeHeaderText}</span>
                <span className='block'>C&#36; {cartProducts?.total?.toFixed(2) ?? 0}</span>
              </div>
            </div>
            <div ref={toastOnDropdownRef}
              className={`absolute top-[120%] right-0 w-64 hidden after:content-[""]
                after:absolute after:bottom-full after:right-24 after:z-[9999] after:border-solid after:border-[6px] after:border-transparent
                ${cartProducts?.length > prevCountRef! ? `after:border-b-success` : `after:border-b-danger`}`}>
              {
                purchaseMethodItemToToast &&
                (
                  <div className={`${cartProducts?.length > prevCountRef! ? `bg-success` : `bg-danger`} 
                    px-2 py-1 text-white w-full flex items-center gap-2 overflow-hidden rounded`}>
                    <div className='flex-none w-12 h-12'>
                      <div className='relative w-12 h-12'>
                        <Image alt='shop-method-toast-on-dropdown'
                          src={productImage}
                          fill
                          className='object-fill rounded' />
                      </div>

                    </div>
                    <div className='flex-1 space-x-2 w-full flex justify-between items-center'>
                      <span className='block'>{cartProducts?.length > prevCountRef! ? 'Added to ' : 'Removed from '}{`${cartTypeHeaderText.at(0)}${cartTypeHeaderText.slice(1).toLowerCase()}`}
                      </span>
                      {
                        cartProducts?.length > prevCountRef! ?
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

      <div id="dropdown-purchase-method"
        className='space-y-3 text-[12px] leading-0 absolute shadow-lg shadow-secondary p-4 top-[250%] right-0 z-[9999] rounded-xl overflow-hidden bg-white h-auto w-[384px]'>
        <div className='p-2 border-b-2 border-b-secondary-light flex gap-2 items-center'>
          <div className='flex-1 font-semibold text-lg leading-0'>{cartTypeHeaderText.includes('BAYAN') ? `${cartTypeHeaderText} BOX` : cartTypeHeaderText}</div>
          {cartProducts?.length > 0 && (<div className='flex-none w-auto text-secondary-light text-base'>{cartProducts?.length}</div>)}
        </div>
        <div className='space-y-2'>
          {
            cartProducts?.length === 0 ? (<div className='text-center font-semibold text-[24px] leading-0'>No Items</div>) :
              (
                <>
                  {
                    cartProducts?.slice(0, 4)?.map((product: any) => {
                      return (
                        <DropdownItem key={`shop-method-key-${product.name}-${product.id}`}>
                          <CartDropdownItem onDelete={() => {
                            dispatch(removeFromCart(productRepository, sessionData?.token ?? ``, product.id ?? 0))
                          }} {...product} />
                        </DropdownItem>
                      )
                    })
                  }
                </>
              )
          }
        </div>
        <Link href={`/cart`}
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