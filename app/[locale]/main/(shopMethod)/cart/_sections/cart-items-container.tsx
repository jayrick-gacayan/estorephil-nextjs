'use client';

import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { CiCircleMinus } from 'react-icons/ci';
import Products from '@/app/_data/product.json';
import { Product } from '@/models/product';
import { Cart } from '@/models/cart';
import Image from 'next/image';
import { Seller } from '@/models/seller';
import { QuantityShopMethod } from '../../_components/quantity-shop-method';
import ShopMethodCollapsible from '../../_components/shop-method-collapsible';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { ShopMethodState } from '../../_redux/shop-method-state';
import { useMemo } from 'react';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { productItemQuantitySet, productItemisGoingToCheckoutChanged } from '../../_redux/shop-method-slice';

export default function CartItemsContainer() {
  const shopMethodState: ShopMethodState = useAppSelector((state: RootState) => { return state.shopMethod; })
  const dispatch: AppDispatch = useAppDispatch();
  const shopMethodItems = useMemo(() => { return shopMethodState.shopMethodItems }, [shopMethodState.shopMethodItems]);

  const sellers = useMemo(() => {
    return shopMethodState.shopMethodItems.length === 0 ? [] :
      shopMethodState.shopMethodItems.map((valueShopMethod: Cart | BalikbayanBox) => {
        return valueShopMethod.seller;
      }).filter((valueSeller: Seller, index: number, arrayCurrent: Seller[]) => {
        return arrayCurrent.indexOf(valueSeller) === index;
      })

  }, [shopMethodState.shopMethodItems]);


  return (
    <div className='space-y-8'>
      {
        sellers.length === 0 || shopMethodItems.length === 0 ? (<div>No Items</div>) :
          (
            <div className='space-y-8'>
              {
                sellers.map((seller: Seller) => {
                  return (
                    <ShopMethodCollapsible seller={seller}
                      key={`seller-method-${seller.name}`}
                      currentCheckAllItemsSeller={
                        !shopMethodItems.filter((shopMethodValue: Cart | BalikbayanBox) => {
                          return shopMethodValue.seller.id === seller.id;
                        }).map((shopMethodValue: Cart | BalikbayanBox) => {
                          return shopMethodValue.isGoingToCheckout
                        }).includes(false)
                      }
                      onCheckboxChanged={(value: boolean) => {

                      }}>
                      <div className='p-2'>
                        <div className='flex gap-2 p-2 text-secondary-light'>
                          <div className='flex-none w-auto'>
                            <div className='flex w-fit gap-2 items-center justify-start cursor-pointer'>
                              <div className='w-5 h-5 border border-transparent'></div>
                            </div>
                          </div>
                          <div className='flex-none w-24 text-center'>IMAGE</div>
                          <div className='flex-1'>PRODUCT NAME</div>
                          <div className='flex-none w-48'>PRICE</div>
                          <div className='flex-none w-48'>QUANTITY</div>
                          <div className='flex-none w-28'>TOTAL</div>
                        </div>
                        {
                          shopMethodItems.filter((shopMethodValue: Cart | BalikbayanBox) => {
                            return shopMethodValue.seller.id === seller.id;
                          }).map((valueCart: Cart) => {
                            return (
                              <div className='flex gap-2 p-2 text-secondary items-center'
                                key={`cart-product-seller-${valueCart.seller.id}-${valueCart.product.id}`}>
                                <div className='flex-none w-auto'>
                                  <Checkbox<boolean> value={true}
                                    current={valueCart.isGoingToCheckout!}
                                    onCheckboxChanged={(value: boolean) => {
                                      dispatch(productItemisGoingToCheckoutChanged(valueCart))
                                    }} />
                                </div>
                                <div className='flex-none w-24 text-center overflow-hidden'>
                                  <Image alt={`alt-cart-image-${valueCart.product.id}-${valueCart.seller.id}`}
                                    src={valueCart.product.productImage}
                                    width={96}
                                    height={96}
                                    className='w-24 h-24 rounded object-cover' />
                                </div>
                                <div className='flex-1'>{valueCart.product.name}</div>
                                <div className='flex-none w-48'>{valueCart.product.price.toFixed(2)}</div>
                                <div className='flex-none w-48'>
                                  <div className='w-32 flex overflow-hidden text-center text-[20px] leading-0 divide-x divide-secondary-light rounded-full border border-secondary-light items-center'>
                                    <div className={`py-1.5 pl-2.5 pr-1 w-8 flex-none hover:bg-secondary-light 
                                      ${valueCart.quantity === 1 ? 'disabled:cursor-not-allowed' : 'cursor-pointer'}`}
                                      onClick={() => {
                                        if (valueCart.quantity > 1) {
                                          dispatch(productItemQuantitySet({ product: valueCart.product, quantity: valueCart.quantity - 1 }))
                                        }
                                      }}>&#8722;</div>
                                    <div className='flex-1 p-1.5 text-center'>{valueCart.quantity}</div>
                                    <div className='py-1.5 pr-2.5 pl-1 w-8 flex-none cursor-pointer hover:bg-secondary-light'
                                      onClick={() => {
                                        dispatch(productItemQuantitySet({ product: valueCart.product, quantity: valueCart.quantity + 1 }))
                                      }}>&#43;</div>
                                  </div>
                                </div>
                                <div className='flex-none w-28'>TOTAL</div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </ShopMethodCollapsible>
                  )
                })
              }
            </div>
          )

      }

    </div>
  )
}