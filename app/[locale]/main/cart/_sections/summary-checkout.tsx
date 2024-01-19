'use client'
import { RootState } from '@/redux/store';
import Link from 'next-intl/link';
import { useEffect } from 'react';
import { FaCcAmex, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { subTotalChanged, summaryItemsquantityChanged, totalChanged } from '../_redux/cart-slice';
import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import { createOrder, getMainCart } from '../_redux/cart-thunk';
import { cartContainer, orderContainer } from '@/inversify/inversify.config';
import { OrderRepository } from '@/repositories/order-repository';
import { TYPES } from '@/inversify/types';
import { useSession } from 'next-auth/react';
import { RequestStatus } from '@/models/result';
import { useRouter } from 'next-intl/client';
import { CartRepository } from '@/repositories/cart-repository';
import Loading from '../../_components/loading';

export default function SummaryCheckout() {
  const state = useSelector((state: RootState) => state.cart)
  const summary = state.summary
  const orderRepository = orderContainer.get<OrderRepository>(TYPES.OrderRepository)
  const { data: sessionData, update: updateSession } = useSession()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const handleCheckOut = () => {
    dispatch(createOrder(orderRepository, sessionData?.token ?? ''))
  }
  const cartRepository = cartContainer.get<CartRepository>(TYPES.CartRepository)
  const updateCartSession = async (method: string) => {
    if (method === 'checkout') {
      const itemsCheckedOut = state.itemsSelected
      const sessionCartProducts = sessionData?.cart?.cart_products
      if (sessionCartProducts && itemsCheckedOut) {
        const updatedCartProducts = sessionCartProducts.map(cartProduct => {
          const selectedItem = itemsCheckedOut.find(item => item.id === cartProduct.id);
          if (selectedItem) {
            const sessionCartItemQuantity = cartProduct.quantity || 0;
            if (selectedItem.quantity >= sessionCartItemQuantity) {
              return null;
            } else {
              return { ...cartProduct, quantity: sessionCartItemQuantity - selectedItem.quantity };
            }
          }
          return cartProduct;
        });
        const cartProducts = updatedCartProducts.filter(Boolean)
        if (!!sessionData) {
          await updateSession({
            user: {
              ...sessionData,
              cart: {
                ...sessionData?.cart,
                cart_products: cartProducts
              }
            }
          })
        }
      }
    }
    else if (method === 'mainCart') {
      const cartCheckout = state.cartCheckout
      const allProducts = cartCheckout.reduce((acc, store) => {
        return acc.concat(store.products);
      }, []);
      if (!!sessionData) {
        await updateSession({
          user: {
            ...sessionData,
            cart: {
              ...sessionData?.cart,
              cart_products: allProducts,
            }
          }
        })
      }
    }

  }
  useEffect(() => {
    if (!!sessionData && state.createOrderStatus === RequestStatus.SUCCESS) {
      dispatch(getMainCart(cartRepository, sessionData.token ?? ''))
      updateCartSession('checkout');
      router.push(`/checkout/sender?order_id=${state.orderId}`)
    }
    if (state.getMainCartStatus === RequestStatus.SUCCESS) {
      updateCartSession('mainCart');
    }

  }, [state.createOrderStatus, state.getMainCartStatus])
  useEffect(() => {
    const totalQuantity = state.itemsSelected.reduce((total, product) => total + (product.quantity || 0), 0);
    const totalPrice = state.itemsSelected.reduce((total, product) => total + (product.quantity || 0) * (product.price || 0), 0);
    dispatch(summaryItemsquantityChanged(totalQuantity));
    dispatch(subTotalChanged(totalPrice));
    dispatch(totalChanged(totalPrice));
  }, [state.itemsSelected]);
  return (
    <div className=' bg-default border-l border-secondary-light'>
      <div className="p-8">
        <div className='border-b border-b-transparent'>
          <div className='text-[44px] leading-0 font-[500]'>SUMMARY</div>
        </div>
      </div>
      <div className="px-8 pt-4">
        <div className="text-tertiary space-y-2">
          <div className="space-y-2 pb-2 border-b border-tertiary">
            <div className="flex">
              <div className="flex-1">ITEMS</div>
              <div className="text-primary">{summary.items}</div>
            </div>
            <div className="flex">
              <div className="flex-1">SUBTOTAL</div>
              <div className="flex-none w-auto">
                C&#36; <span>{(summary.subtotal)?.toFixed(2)}</span>
              </div>
            </div>
            {/* <div className="flex">
              <div className="flex-1">SALES TAX</div>
              <div className="flex-none w-auto"><span className="text-success">Included</span></div>
            </div> */}
          </div>
          {/* <div className="space-y-2 py-2 border-b border-tertiary">
            <div>SHIPPING &#38; HANDLING</div>
            <div className="space-y-2 pl-2 pb-2">
              <div className="flex">
                <div className="flex-1">No. of Boxes</div>
                <div className="flex-none w-auto">
                  <span>2</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">Unit Cost: Box 1</div>
                <div className="flex-none w-auto">
                  C&#36; <span>{(25).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">Unit Cost: Box 2</div>
                <div className="flex-none w-auto">
                  C&#36; <span>{(25).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">S&#38;H Tax</div>
                <div className="flex-none w-auto">
                  <span className="text-success">Inclusive</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">Additional Import Tax</div>
                <div className="flex-none w-auto">
                  <span>10&#37;</span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">Total Shipping Cost</div>
                <div className="flex-none w-auto">
                  C&#36; <span>{(25).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="pb-2 border-b border-tertiary">
            <div className="flex">
              <div className="flex-1">PH</div>
              <div className="flex-none w-auto">
                <span>10&#37;</span>
              </div>
            </div>
          </div> */}
          <div className="pb-2">
            <div className="flex items-center">
              <div className="flex-1">TOTAL</div>
              <div className="flex-none w-auto text-[20px]">
                C&#36; <span>{(summary.total)?.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        <Link href="/" className="text-primary block text-right text-sm py-2 underline cursor-pointer hover:text-primary-light">APPLY A PROMO CODE</Link>
        <button
          disabled={state.itemsSelected.length === 0}
          className='border disabled:cursor-not-allowed cursor-pointer disabled:border-tertiary-dark w-full disabled:bg-tertiary-dark border-warning bg-warning rounded hover:bg-warning-light text-white text-center p-4 disabled:hover:bg-secondary-light'
          onClick={handleCheckOut}>
          {state.createOrderStatus === RequestStatus.IN_PROGRESS
            ? (<div className='flex items-center justify-center'><p>CHECKING OUT ITEMS </p>< Loading /></div>)
            : (<>CHECK OUT</>)}
        </button>
      </div>
      <div className="px-8 pt-20 space-y-8">
        <div className='block space-y-2 text-tertiary'>
          <h3 className='font-[500] text-[26px] leading-0'>SUPPORTED CARDS</h3>
          <div className='block space-x-2'>
            <FaCcVisa className='inline-block w-10 h-10' />
            <FaCcMastercard className='inline-block w-10 h-10' />
            <FaCcJcb className='inline-block w-10 h-10' />
            <FaCcDiscover className='inline-block w-10 h-10' />
            <FaCcPaypal className='inline-block w-10 h-10' />
            <FaCcAmex className='inline-block w-10 h-10' />
          </div>
        </div>
        <div className='block space-y-2 text-tertiary'>
          <h3 className='font-[500] text-[26px] leading-0'>NEED HELP?</h3>
          <div className='block space-y-1'>
            <div>WHAT PAYMENT METHODS CAN I USE?</div>
            <div>HOW DO I USE A PROMO CODE?</div>
            <div>WHERE TO GET PROMO CODE?</div>
            <div>HOW SECURE IS MY PURCHASE?</div>
          </div>
        </div>
      </div>
    </div>
  )
}