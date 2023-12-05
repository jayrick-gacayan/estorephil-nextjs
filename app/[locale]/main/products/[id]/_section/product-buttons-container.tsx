'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import { Product } from '@/models/product';
import { AppDispatch, RootState } from '@/redux/store';
import { useEffect, useMemo, useState } from 'react';
import { FaCartShopping, FaRegHeart } from 'react-icons/fa6';
import { MainState } from '../../../_redux/main_state';
import { BsBox2 } from 'react-icons/bs';
import { modalProductDeliveryAddressOpened } from '../../../_redux/main-slice';
import { Seller } from '@/models/seller';
import { PurchaseMethodState } from '../../../purchase-method/[slug]/_redux/purchase-method-state';
import { productItemQuantitySet, addToShopMethodItem, removeFromToPurchaseMethodItem } from '../../../purchase-method/[slug]/_redux/purchase-method-slice';


export default function ProductButtonsContainer({
  product,
  seller
}: {
  product: Product;
  seller: Seller;
}) {
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const shopMethod: PurchaseMethodState = useAppSelector((state: RootState) => { return state.purchaseMethod; });
  const dispatch: AppDispatch = useAppDispatch();

  const productMemo: Cart | BalikbayanBox | undefined = useMemo(() => {
    let productShopMethod = shopMethod.purchaseMethodItems.find((value: Cart | BalikbayanBox) => {
      return product.id === value.product.id;
    });

    return productShopMethod;
  }, [product, shopMethod.purchaseMethodItems]);

  const [quantity, setQuantity] = useState<number>(!productMemo ? 1 : productMemo.quantity);
  const purchaseMethod = useMemo(() => { return mainState.purchaseMethod; }, [mainState.purchaseMethod]);

  useEffect(() => {
    if (productMemo) {
      dispatch(productItemQuantitySet({ product: product, quantity: quantity }));
    }
  }, [quantity, productMemo, dispatch, product]);

  return (
    <div className='flex w-full gap-8'>
      <div className='w-full flex gap-12 items-center'>
        <div className='flex-none w-auto'>Quantity</div>
        <div className='flex-1'>
          <div className='flex items-center justify-between gap-4 text-center'>
            <div className={`transition duration-100 rounded px-4 py-2 bg-tertiary text-secondary text-2xl 
            ${quantity > 1 ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={() => { setQuantity(quantity === 1 ? 1 : quantity - 1); }}>
              &#8722;
            </div>
            <div>{quantity}</div>
            <div className='transition duration-100 cursor-pointer hover:bg-primary-light rounded px-4 py-2 bg-primary text-white text-2xl'
              onClick={() => { setQuantity(quantity + 1); }}>
              &#43;
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-around gap-4'>
        <button className={`transition border duration-100 rounded-full flex-1 text-[14px] leading-0 h-auto space-x-2 px-6 py-3
          ${purchaseMethod !== '' && productMemo ? 'border-danger text-white hover:text-danger bg-danger hover:bg-danger-light' : 'bg-primary border-primary hover:bg-primary-light text-white'}`}
          onClick={() => {
            if (purchaseMethod === '') {
              dispatch(modalProductDeliveryAddressOpened({ open: true, type: 'enterAddress' }))
            }
            else {
              dispatch(!productMemo ?
                addToShopMethodItem({
                  product: product,
                  seller: seller,
                  quantity,
                  total: product.price * quantity,
                  isGoingToCheckout: false
                }) :
                removeFromToPurchaseMethodItem(productMemo)
              );
            }
          }}>
          {
            purchaseMethod === '' ? (<span>Create An Order</span>) :
              (
                <>
                  {
                    purchaseMethod === 'Shopping Cart' ?
                      (<FaCartShopping className='inline-block' />) :
                      (<BsBox2 className='inline-block' />)
                  }
                  <span className='align-middle'>{productMemo ? 'Remove From' : 'Add to'} {purchaseMethod === 'Shopping Cart' ? 'Cart' : 'Box'}</span>
                </>
              )
          }
        </button>
        <button className='rounded-full w-20 h-auto bg-danger-light text-danger hover:bg-danger hover:text-white border border-danger space-x-2 px-6 py-3 text-center'>
          <FaRegHeart className='inline-block' />
        </button>
      </div>
    </div>
  )
}