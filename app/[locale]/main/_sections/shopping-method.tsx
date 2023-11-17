'use client';

import { useState } from 'react';
import { MainState } from '../_redux/main_state';
import { useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, StoreState } from '@/redux/store';
import ShopMethodType from '../_components/shop-method-type';
import { useDispatch } from 'react-redux';
import { onModalProductDeliveryAddressOpened, onShoppingMethodChanged } from '../_redux/main-slice';

export default function ShoppingMethod() {
  const mainState: MainState = useAppSelector((state: StoreState) => { return state.main });
  const [shopMethod, setShopMethod] = useState<string>(mainState.shoppingMethod);
  const dispatch: AppDispatch = useDispatch();

  function setShopMethodClass(shopMethodType: string) {
    return shopMethodType === shopMethod ? 'bg-primary-dark text-white' : 'bg-primary-light';
  }

  return (
    <div className="py-8 space-y-3 w-[512px] h-[448px] m-auto">
      <div className="flex justify-around items-center flex-col h-full w-full text-center">
        <h3 className="text-primary text-[32px] leading-0">Choose a Shopping Method</h3>
        <div className="flex items-center h-48">
          <ShopMethodType shopMethodType='Shopping Cart'
            otherText='Shop by Product'
            shopMethodImage='custom_cart_icon.png'
            shopMethodActiveClass={setShopMethodClass}
            onShoppingMethodSet={(shopMethodType: string) => { setShopMethod(shopMethodType) }} />
          <ShopMethodType shopMethodType='Balikbayan Box'
            otherText='Select your Box Type'
            shopMethodImage='balik_box_icon.png'
            shopMethodActiveClass={setShopMethodClass}
            onShoppingMethodSet={(shopMethodType: string) => { setShopMethod(shopMethodType) }} />
        </div>

        <div className="space-y-3 w-full">
          <button className='w-full p-3 rounded bg-warning hover:bg-warning-light text-white'
            onClick={() => {
              dispatch(onShoppingMethodChanged(shopMethod));
              dispatch(onModalProductDeliveryAddressOpened(''));

              // setTimeout(() => {
              //   dispatch(onModalProductDeliveryAddressOpened('changeAddress'));
              // }, 1000)
            }}>
            Next
          </button>
          <button className='w-full p-3 rounded bg-transparent underline font-[500] hover:no-underline'>
            Back
          </button>
        </div>
      </div>
    </div>
  )
}