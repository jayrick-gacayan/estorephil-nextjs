'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import { AppDispatch, RootState } from '@/redux/store';
import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import { FaCartShopping, FaHeartCrack, FaRegHeart } from 'react-icons/fa6';
import { BsBox2 } from 'react-icons/bs';
import { addToCartQuantityChanged, cartChanged, mainModalOpened } from '../../../_redux/main-slice';
import { CartState } from '../../../cart/_redux/cart-state';
import { productItemQuantitySet, addToShopMethodItem, removeFromToPurchaseMethodItem } from '../../../cart/_redux/cart-slice';
import { MainState } from '../../../_redux/main-state';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { ProductRepository } from '@/repositories/product-repository';
import { addToCart, removeFromCart } from '../../../_redux/main-thunk';
import { ProductState } from '../_redux/product-state';
import { addProductToFavorites, deleteProductFromFavorites } from '../_redux/product-thunk';
import { RequestStatus } from '@/types/enums/request-status';
import CirclingLoader from '@/app/[locale]/_components/circling-loader';

export default function ProductButtonsContainer() {
  const [favoriteDisabled, setFavoriteDisabled] = useState(false);

  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const shopMethod: CartState = useAppSelector((state: RootState) => { return state.cart; });
  const dispatch: AppDispatch = useAppDispatch();
  const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
  const productState: ProductState = useAppSelector((state: RootState) => { return state.product });

  const { currentProduct, isLoved, isLovedLoadStatus } = useMemo(() => {
    return {
      currentProduct: productState.product,
      isLoved: productState.isLoved,
      isLovedLoadStatus: productState.getIsLovedLoadStatus,
    }
  }, [productState.product, productState.isLoved])
  const productMemo: Cart | BalikbayanBox | undefined = useMemo(() => {
    let productShopMethod = shopMethod.purchaseMethodItems.find((value: Cart | BalikbayanBox) => {
      return currentProduct.id === value.product.id;
    });
    return productShopMethod;
  }, [currentProduct, shopMethod.purchaseMethodItems]);

  const { data: sessionData, update: updateSession } = useSession()
  const cartProducts: [] = !!sessionData?.cart ? sessionData?.cart?.cart_products : mainState?.cart?.cart_products
  const productExistsOnCart = cartProducts?.find((product: { id: number; }) => product.id === currentProduct?.id ?? 0);
  const [quantity, setQuantity] = useState<number>(!productMemo ? 1 : productMemo.quantity);
  const cartType = sessionData?.cart?.cart_type === 'shopping_cart' ? 'Shopping Cart' : sessionData?.cart?.cart_type === 'balikbayan' ? 'Balikbayan Box' : ''
  const updateCartSession = async () => {
    if (!!sessionData) {
      await updateSession({
        user: {
          ...sessionData,
          cart: mainState.cart,
        },
      })
    }
  }
  useEffect(() => {
    if (productMemo) {
      dispatch(productItemQuantitySet({ product: currentProduct, quantity: quantity }));
    }
  }, [quantity, productMemo, dispatch, currentProduct]);

  useEffect(() => {
    if (!!sessionData) {
      if (mainState.cart === undefined) {
        console.log('update -1st condition called')
        return
      }
      else if (mainState.cart != undefined && sessionData.cart === undefined) {
        console.log('update cart condition 2 calleed')
        updateCartSession()
      }
      else {
        console.log('update cart condition 3s calleed')
        updateCartSession()
        console.log('sessionData:', sessionData)
      }
    }
  }, [mainState.cart])


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
              )
            }
          }}>
          {
            !(!!cartType) ? (<span>Create An Order</span>) :
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
        {
          isLovedLoadStatus !== RequestStatus.SUCCESS ?
            (
              <div className='rounded-full w-20 bg-tertiark-dark border border-tertiary px-6 py-3'>
                <div className="w-fit m-auto block">
                  <CirclingLoader height={32} width={32} color='#2F353D' />
                </div>
              </div>
            ) :
            (
              <button disabled={favoriteDisabled}
                className={`rounded-full w-20 h-auto space-x-2 px-6 py-3 text-center border disabled:cursor-not-allowed
                  ${isLoved ? 'bg-danger border-danger-light text-white hover:bg-danger-light hover:text-danger hover:border-danger' :
                    'bg-danger-light border-danger text-danger hover:bg-danger hover:text-white hover:border-danger-light'}`}
                onClick={() => {
                  setFavoriteDisabled(true)
                  let productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository);
                  if (sessionData?.token && Object.keys(currentProduct).length > 0) {

                    isLoved ? dispatch(deleteProductFromFavorites(productRepository, sessionData.token, currentProduct.id, setFavoriteDisabled)) :
                      dispatch(addProductToFavorites(productRepository, sessionData.token, currentProduct.id, setFavoriteDisabled))
                  }
                }}>
                {isLoved ? <FaHeartCrack className='inline-block' /> : <FaRegHeart className='inline-block' />}

              </button>
            )
        }

      </div>
    </div>
  )
}