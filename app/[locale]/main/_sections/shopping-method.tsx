'use client';

import { ReactNode, useMemo, useState } from 'react';
import { MainState } from '../_redux/main_state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import ShopMethodType from '../_components/shop-method-type';
import { modalProductDeliveryAddressOpened, shoppingMethodChanged } from '../_redux/main-slice';

export default function ShoppingMethod({
  onClose,
  isSetShopMethod,
  children,
}: {
  onClose: () => void;
  isSetShopMethod?: boolean;
  children?: ReactNode;
}): JSX.Element {
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const [shopMethod, setShopMethod] = useState<string>(mainState.shoppingMethod);
  const dispatch: AppDispatch = useAppDispatch();

  const { type } = useMemo(() => {
    let { type } = mainState.modalProductDeliveryAddressInfo;
    return { type };

  }, [mainState.modalProductDeliveryAddressInfo]);

  function setShopMethodClass(shopMethodType: string) {
    return shopMethodType === shopMethod ? 'bg-primary-dark text-white' : 'bg-primary-light';
  }

  function onShopMethodSet(shopMethodType: string) {
    if (!isSetShopMethod) { setShopMethod(shopMethodType) }
    else return;
  }

  return (
    <div className="py-8 space-y-3 w-[640px] px-8">
      <div className="justify-around items-center h-full w-full text-center space-y-2">
        <h3 className="text-primary text-[32px] leading-0">Choose a Shopping Method</h3>
        <div className="flex items-center justify-center h-48">
          <ShopMethodType shopMethodType='Shopping Cart'
            otherText='Shop by Product'
            shopMethodImage='custom_cart_icon.svg'
            shopMethodActiveClass={setShopMethodClass}
            onShoppingMethodSet={onShopMethodSet} />
          <ShopMethodType shopMethodType='Balikbayan Box'
            otherText='Select your Box Type'
            shopMethodImage='balik_box_icon.svg'
            shopMethodActiveClass={setShopMethodClass}
            onShoppingMethodSet={onShopMethodSet} />
        </div>
        {
          children &&
          (
            <div className='space-y-2'>
              {children}
            </div>
          )
        }
        <div className="space-y-3 w-full">
          <button className='w-full p-3 rounded bg-warning hover:bg-warning-light text-white'
            onClick={() => {
              onClose();
              if (!children) {
                dispatch(shoppingMethodChanged(shopMethod));
                setTimeout(() => {
                  dispatch(modalProductDeliveryAddressOpened({ open: true, type: 'shopMethodDetails' }));
                }, 1000)
              }
            }}>
            {type === 'shoppingMethod' && 'Next'}
            {type === 'shopMethodDetails' && 'Confirm'}
          </button>
          <button className='w-full p-3 rounded bg-transparent underline font-[500] hover:no-underline'
            onClick={() => {
              if (children) {
                onClose();
              }
              else {
                onClose();
                dispatch(modalProductDeliveryAddressOpened({
                  open: true,
                  type: 'changeAddress'
                }))
              }
            }}>
            Back
          </button>
        </div>
      </div>
    </div>
  )
}