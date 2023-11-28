'use client';

import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { Cart } from '@/models/cart';
import Image from 'next/image';
import { Seller } from '@/models/seller';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { useMemo } from 'react';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { PurchaseMethodState } from '../_redux/purchase-method-state';
import SelectAll from '../_components/select-all';
import ShopMethodCollapsible from '../_components/shop-method-collapsible';
import { isSelectAllProductsGoingToCheckout, isAllProductsGoingToCheckoutBySeller, productItemisGoingToCheckoutChanged, productItemQuantitySet } from '../_redux/purchase-method-slice';

export default function CartItemsContainer() {
  const purchaseMethodState: PurchaseMethodState = useAppSelector((state: RootState) => { return state.purchaseMethod; })
  const dispatch: AppDispatch = useAppDispatch();
  const purchaseMethodItems = useMemo(() => { return purchaseMethodState.purchaseMethodItems }, [purchaseMethodState.purchaseMethodItems]);

  const sellers = useMemo(() => {
    return purchaseMethodState.purchaseMethodItems.length === 0 ? [] :
      purchaseMethodState.purchaseMethodItems.map((valueShopMethod: Cart | BalikbayanBox) => {
        return valueShopMethod.seller;
      }).filter((valueSeller: Seller, index: number, arrayCurrent: Seller[]) => {
        let arrayCurrentTemp = arrayCurrent.map((current: Seller) => { return current.id });
        return arrayCurrentTemp.indexOf(valueSeller.id) === index;
      })

  }, [purchaseMethodState.purchaseMethodItems]);

  return sellers.length === 0 || purchaseMethodItems.length === 0 ? (<div>No Items</div>) : (
    <>
      <SelectAll current={purchaseMethodItems.every((value: Cart | BalikbayanBox) => { return value.isGoingToCheckout; })}
        onCheckboxChanged={(value: boolean) => {
          dispatch(isSelectAllProductsGoingToCheckout(purchaseMethodItems.every((value: Cart | BalikbayanBox) => { return value.isGoingToCheckout; })))
        }} />
      <div className='space-y-8'>
        <div className='space-y-8'>
          {
            sellers.map((seller: Seller) => {

              let currentCheckAllItemsSeller = purchaseMethodItems.filter((shopMethodValue: Cart | BalikbayanBox) => {
                return shopMethodValue.seller.id === seller.id;
              }).every((shopMethodValue: Cart | BalikbayanBox) => {
                return shopMethodValue.isGoingToCheckout;
              });

              return (
                <ShopMethodCollapsible seller={seller}
                  key={`seller-method-${seller.name}`}
                  currentCheckAllItemsSeller={currentCheckAllItemsSeller}
                  onCheckboxChanged={(value: boolean) => {
                    dispatch(isAllProductsGoingToCheckoutBySeller({ seller: seller, isAllGoingToCheckOut: currentCheckAllItemsSeller }));
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
                      purchaseMethodItems.filter((shopMethodValue: Cart | BalikbayanBox) => {
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
                            <div className='flex-none w-48'>C&#36; {valueCart.product.price.toFixed(2)}</div>
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
                            <div className='flex-none w-28'>C&#36; {(valueCart.quantity * valueCart.product.price).toFixed(2)}</div>
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
      </div>
    </>
  )
}