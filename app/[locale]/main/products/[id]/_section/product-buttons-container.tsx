'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import { AppDispatch, RootState } from '@/redux/store';
import { useEffect, useMemo, useState } from 'react';
import { FaCartShopping, FaRegHeart } from 'react-icons/fa6';
import { BsBox2 } from 'react-icons/bs';
import { addToCartQuantityChanged, mainModalOpened } from '../../../_redux/main-slice';
import { PurchaseMethodState } from '../../../purchase-method/[slug]/_redux/purchase-method-state';
import { productItemQuantitySet, addToShopMethodItem, removeFromToPurchaseMethodItem } from '../../../purchase-method/[slug]/_redux/purchase-method-slice';
import { MainState } from '../../../_redux/main-state';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { ProductRepository } from '@/repositories/product-repository';
import { addToCart, removeFromCart } from '../../../_redux/main-thunk';

export default function ProductButtonsContainer() {
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const shopMethod: PurchaseMethodState = useAppSelector((state: RootState) => { return state.purchaseMethod; });
  const dispatch: AppDispatch = useAppDispatch();
  const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
  const currentProduct = useSelector((state: RootState) => state.product).product
  const productMemo: Cart | BalikbayanBox | undefined = useMemo(() => {
    let productShopMethod = shopMethod.purchaseMethodItems.find((value: Cart | BalikbayanBox) => {
      return currentProduct.id === value.product.id;
    });

    return productShopMethod;
  }, [currentProduct, shopMethod.purchaseMethodItems]);
  const { data: sessionData } = useSession()
  const cartProducts: [] = mainState?.cart?.cart_products
  const productExistsOnCart = cartProducts?.find((product: { id: number; }) => product.id === currentProduct?.id ?? 0);
  const [quantity, setQuantity] = useState<number>(!productMemo ? 1 : productMemo.quantity);
  const cartType = useMemo(() => {
    const cartType = mainState.cartType;
    return cartType === 'shopping_cart' ? 'Shopping Cart' :
      cartType === 'balikbayan_box' ? 'Balikbayan Box' : '';
  }, [mainState.cartType]);

  useEffect(() => {
    if (productMemo) {
      dispatch(productItemQuantitySet({ product: currentProduct, quantity: quantity }));
    }
  }, [quantity, productMemo, dispatch, currentProduct]);
  console.log('cart', mainState.cart)
  return (
    <div className='flex w-full gap-8'>
      <div className='w-full flex gap-12 items-center'>
        <div className='flex-none w-auto'>Quantity</div>
        <div className='flex-1'>
          <div className='flex items-center justify-between gap-4 text-center'>
            <div className={`transition duration-100 rounded px-4 py-2 bg-tertiary-dark text-2xl 
            ${quantity > 1 ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={() => {
                setQuantity(quantity === 1 ? 1 : quantity - 1)
                dispatch(addToCartQuantityChanged(quantity))
              }}
              onChange={() => { dispatch(addToCartQuantityChanged(quantity - 1)) }}
            >
              &#8722;
            </div>
            <div>{quantity}</div>
            <div className='transition duration-100 cursor-pointer hover:bg-primary-light rounded px-4 py-2 bg-primary text-white text-2xl'
              onClick={() => {
                setQuantity(quantity + 1);
                dispatch(addToCartQuantityChanged(quantity + 1))
              }}
              onChange={() => { dispatch(addToCartQuantityChanged(quantity)) }}
            >
              &#43;
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-around gap-4'>
        <button
          className={`transition border duration-100 rounded-full flex-1 text-[14px] leading-0 h-auto space-x-2 px-6 py-3
          ${cartType !== '' && productExistsOnCart ? 'border-danger text-white hover:text-danger bg-danger hover:bg-danger-light' : 'bg-primary border-primary hover:bg-primary-light text-white'}`}
          onClick={() => {
            if (cartType === '') {
              dispatch(mainModalOpened({ open: true, type: 'enterAddress' }))
            }
            else {
              dispatch(!productExistsOnCart ?
                // addToShopMethodItem({
                //   product: product,
                //   seller: seller,
                //   quantity,
                //   total: product.price * quantity,
                //   isGoingToCheckout: false
                // }) :
                // removeFromToPurchaseMethodItem(productMemo)
                addToCart(productRepository, sessionData?.token ?? `yliaster`) :
                removeFromCart(productRepository, sessionData?.token ?? `yliaster`)
              );
            }
          }}>
          {
            cartType === '' ? (<span>Create An Order</span>) :
              (
                <>
                  {
                    cartType === 'Shopping Cart' ?
                      (<FaCartShopping className='inline-block' />) :
                      (<BsBox2 className='inline-block' />)
                  }
                  <span className='align-middle'>{productExistsOnCart ? 'Remove From' : 'Add to'} {cartType === 'Shopping Cart' ? 'Cart' : 'Box'}</span>
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