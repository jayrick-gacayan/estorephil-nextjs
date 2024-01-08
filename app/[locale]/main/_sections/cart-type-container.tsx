'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState, store } from '@/redux/store';
import CartTypeItem from '../_components/cart-type-item';
import { cartTypeChanged, mainModalOpened } from '../_redux/main-slice';
import { HiInformationCircle } from 'react-icons/hi';
import { useSession } from 'next-auth/react';
import { OrderRepository } from '@/repositories/order-repository';
import { orderContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { setCart } from '../_redux/main-thunk';
import { MainState } from '../_redux/main-state';
import Image from 'next/image';
import TabItem from '../../_components/tab-item';
import Tabs from '../../_components/tabs';
import { RequestStatus } from '@/models/result';

type tabItemsProps = {
  labelText: string;
  otherText: string;
}

export default function CartTypeContainer({
  onClose,
}: {
  onClose: () => void;
}): JSX.Element {
  const orderRepository = orderContainer.get<OrderRepository>(TYPES.OrderRepository)
  const { data: sessionData, update: updateSession } = useSession()

  const [tempDeliveryMethod, setTempDeliveryMethod] = useState<string>('Vessel');
  const [sizeBox, setSizeBox] = useState<string>('Small');
  const deliveryMethods: tabItemsProps[] =
    [
      { labelText: 'Vessel', otherText: `\u0024${(50).toFixed(2)} \u002D \u0024${(100).toFixed(2)}` },
      { labelText: 'Air', otherText: `\u0024${(150).toFixed(2)} \u002D \u0024${(250).toFixed(2)}` }
    ];

  const boxSizes: tabItemsProps[] = [
    { labelText: 'Small', otherText: `46 cm \u00D7 41 cm \u00D7 46 cm` },
    { labelText: 'Medium', otherText: `46 cm \u00D7 41 cm \u00D7 46 cm` },
    { labelText: 'Large', otherText: `46 cm \u00D7 46 cm \u00D7 61 cm` },
    { labelText: 'Extra\u2013Large', otherText: `46 cm \u00D7 46 cm \u00D7 61 cm` },
  ];

  function tabClassName(tab: string, currentTab: string) {
    return tab === currentTab ? 'bg-primary-dark text-white' : 'bg-default hover:bg-primary-dark hover:text-white';
  }

  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const dispatch: AppDispatch = useAppDispatch();
  const cartType = useMemo(() => {
    const cartType = mainState.cartType;
    return cartType === 'shopping_cart' ? 'Shopping Cart' :
      cartType === 'balikbayan_box' ? 'Balikbayan Box' : '';
  }, [mainState.cartType]);
  function setCartTypeClass(cartTypeMethod: string) {
    return `${cartTypeMethod === cartType ? 'bg-primary-dark text-white' : 'bg-default'} cursor-pointer hover:bg-primary-dark hover:text-white`;
  }

  function onCartTypeSet(cartTypeMethod: string) {
    dispatch(cartTypeChanged(cartTypeMethod === 'Shopping Cart' ? `shopping_cart` : cartTypeMethod === 'Balikbayan Box' ? 'balikbayan_box' : ''))
  }
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
    console.log('use effect trigger setCartStatus: ', mainState.setCartStatus)
    if (mainState.setCartStatus === RequestStatus.SUCCESS) {
      console.log('set cart status is true')
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
    }
  }, [mainState.setCartStatus])
  return (
    <div className="py-8 space-y-3 w-[640px] px-8">
      <div className="justify-around items-center h-full w-full text-center space-y-2">
        <h3 className="text-primary text-[32px] leading-0">Choose a Shopping Method</h3>
        <div className="flex items-center justify-center h-48">
          <CartTypeItem cartType='Shopping Cart'
            otherText='Shop by Product'
            cartTypeImage='custom_cart_icon.svg'
            cartTypeActiveClass={setCartTypeClass}
            onCartTypeSet={onCartTypeSet} />
          <CartTypeItem cartType='Balikbayan Box'
            otherText='Select your Box Type'
            cartTypeImage='balik_box_icon.svg'
            cartTypeActiveClass={setCartTypeClass}
            onCartTypeSet={onCartTypeSet} />
        </div>
        {
          cartType === 'Balikbayan Box' &&
          (
            <div className='space-y-2'>
              <div className='block space-y-1'>
                <div className='block space-y-1'>
                  <h4 className='font-semibold text-[18px] leading-0 text-left'>Couriers</h4>
                  <div className='flex flex-wrap gap-2 w-fit h-12'>
                    <div className='flex-none w-12 h-full relative'>
                      <Image alt='shop-method-lbc-logo-alt'
                        src='/others/lbc_logo.svg'
                        fill />
                    </div>
                    <div className='flex-none w-12 h-full relative'>
                      <Image alt='shop-method-lbc-logo-alt'
                        src='/others/dhl_logo.svg'
                        fill />
                    </div>
                  </div>
                </div>
                <div className='block space-y-1'>
                  <h4 className='font-semibold text-[18px] leading-0 text-left'>Delivery Method</h4>
                  <Tabs>
                    {
                      deliveryMethods.map((deliveryMethod: tabItemsProps) => {
                        return (
                          <TabItem<string> key={`delivery-method-${deliveryMethod.labelText}`}
                            tab={deliveryMethod.labelText}
                            currentTab={tempDeliveryMethod}
                            tabClassName={tabClassName}
                            onTabChange={(tab: string) => {
                              setTempDeliveryMethod(tab)
                            }}>
                            <div className='w-full text-center text-sm p-2'>
                              <div>{deliveryMethod.labelText}</div>
                              <div>{deliveryMethod.otherText}</div>
                            </div>
                          </TabItem>
                        )
                      })
                    }
                  </Tabs>
                </div>
                <div className='block space-y-1'>
                  <h4 className='font-semibold text-[18px] leading-0 text-left'>Box Size</h4>
                  <Tabs>
                    {
                      boxSizes.map((boxSizes: tabItemsProps) => {
                        return (
                          <TabItem<string> key={`box-sizes-${boxSizes.labelText}`}
                            tab={boxSizes.labelText}
                            currentTab={sizeBox}
                            tabClassName={tabClassName}
                            onTabChange={(tab: string) => { setSizeBox(tab) }}>
                            <div className='w-full text-center leading-0 text-[10px] p-2'>
                              <div className='text-sm'>{boxSizes.labelText}</div>
                              <div>{boxSizes.otherText}</div>
                            </div>
                          </TabItem>
                        )
                      })
                    }
                  </Tabs>
                </div>
              </div>
            </div>
          )
        }

        <h4 className="text-danger font-[500] space-x-1 px-1 py-2">
          <HiInformationCircle size={20} className='inline align-middle' />
          <span className="inline">
            {
              cartType === 'Shopping Cart' ?
                'Choosing shopping cart will automatically set the box where your checked out items will fit.' :
                cartType === 'Balikbayan Box' ? 'Changing couriers on check out will not be allowed.' : ''
            }
          </span>
        </h4>

        <div className="space-y-3 w-full">
          <button className='w-full p-3 rounded bg-warning hover:bg-warning-light text-white'
            onClick={() => {
              onClose();
              dispatch(setCart(orderRepository, sessionData?.token ?? ``, sessionData?.company?.id ?? 0))
            }}>
            Confirm
          </button>
          <button className='w-full p-3 rounded bg-transparent underline font-[500] hover:no-underline'
            onClick={() => {
              onClose();
              setTimeout(() => {
                dispatch(mainModalOpened({
                  open: true,
                  type: 'changeAddress'
                }))
              }, 300)
            }}>
            Back
          </button>
        </div>
      </div>
    </div>
  )
}