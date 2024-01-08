'use client';

import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { Cart } from '@/models/cart';
import { Seller } from '@/models/seller';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { useMemo } from 'react';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { CartState } from '../_redux/cart-state';
import SelectAll from '../_components/select-all';
import { isSelectAllProductsGoingToCheckout, isAllProductsGoingToCheckoutBySeller, productItemisGoingToCheckoutChanged, productItemQuantitySet } from '../_redux/cart-slice';
import Collapsible from '../../_components/collapsible';
import CollapsibleItem from '../../_components/collapsible-item';
import CartRowItems from '../../_components/cart-row-items';
import CartQuantityContainer from '../../_components/cart-quantity-container';
import { useSession } from 'next-auth/react';

export default function CartItemsContainer() {
  const { data: sessionData } = useSession();
  const cartState: CartState = useAppSelector((state: RootState) => { return state.cart; })
  const dispatch: AppDispatch = useAppDispatch();
  const purchaseMethodItems = useMemo(() => { return cartState.purchaseMethodItems }, [cartState.purchaseMethodItems]);

  const sellers = useMemo(() => {
    return cartState.purchaseMethodItems.length === 0 ? [] :
      cartState.purchaseMethodItems.map((valueShopMethod: Cart | BalikbayanBox) => {
        return valueShopMethod.seller;
      }).filter((valueSeller: Seller, index: number, arrayCurrent: Seller[]) => {
        let arrayCurrentTemp = arrayCurrent.map((current: Seller) => { return current.id });
        return arrayCurrentTemp.indexOf(valueSeller.id) === index;
      })

  }, [cartState.purchaseMethodItems]);

  console.log('sdfjsdlkfjds', sessionData)
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
                <Collapsible data={seller}
                  key={`seller-method-${seller.name}`}
                  checkAllData={currentCheckAllItemsSeller}
                  collapsibleOpen={true}
                  onCheckboxChanged={(value: boolean) => {
                    dispatch(isAllProductsGoingToCheckoutBySeller({ seller: seller, isAllGoingToCheckOut: currentCheckAllItemsSeller }));
                  }}>
                  <CollapsibleItem hasFirstEmptyColumn={true}>
                    <>
                      {
                        purchaseMethodItems.filter((purchaseMethodItem: Cart | BalikbayanBox) => {
                          return purchaseMethodItem.seller.id === seller.id;
                        }).map((valuePurchaseMethod: Cart) => {
                          return (
                            <CartRowItems key={`purchase-method-${valuePurchaseMethod.product.id}`}
                              purchaseMethodItem={valuePurchaseMethod}
                              withCheckboxComponent={
                                <div className='flex-none w-auto'>
                                  <Checkbox<boolean> value={true}
                                    current={valuePurchaseMethod.isGoingToCheckout!}
                                    checkBoxClassName={(value: boolean, current: boolean) => {
                                      return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-tertiary'} rounded w-6 h-6`;
                                    }}
                                    checkClassName={(value: boolean, current: boolean) => {
                                      return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
                                    }}
                                    onCheckboxChanged={(value: boolean) => {
                                      dispatch(productItemisGoingToCheckoutChanged(valuePurchaseMethod))
                                    }} />
                                </div>
                              }
                              withQuantityComponent={
                                <CartQuantityContainer quantity={valuePurchaseMethod.quantity}
                                  minusQuantityComponent={
                                    <div className={`py-1.5 pl-2.5 pr-1 w-8 flex-none hover:bg-secondary-light
                                        ${valuePurchaseMethod.quantity === 1 ? 'disabled:cursor-not-allowed' : 'cursor-pointer'}`}
                                      onClick={() => {
                                        if (valuePurchaseMethod.quantity > 1) {
                                          dispatch(productItemQuantitySet({ product: valuePurchaseMethod.product, quantity: valuePurchaseMethod.quantity - 1 }))
                                        }
                                      }}>
                                      &#8722;
                                    </div>
                                  }
                                  addQuantityComponent={
                                    <div className='py-1.5 pr-2.5 pl-1 w-8 flex-none cursor-pointer hover:bg-secondary-light'
                                      onClick={() => {
                                        dispatch(productItemQuantitySet({ product: valuePurchaseMethod.product, quantity: valuePurchaseMethod.quantity + 1 }))
                                      }}>&#43;</div>
                                  }
                                />
                              } />
                          )
                        })
                      }
                    </>
                  </CollapsibleItem>
                </Collapsible>
              )
            })
          }
        </div>
      </div>
    </>
  )
}