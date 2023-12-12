'use client';

import { ReactNode, useMemo, useState } from 'react';
import { MainState } from '../_redux/main-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import PurchaseMethodType from '../_components/shop-method-type';
import { modalProductDeliveryAddressOpened, purchaseMethodChanged } from '../_redux/main-slice';
import { HiInformationCircle } from 'react-icons/hi';

export default function PurchaseMethod({
  onClose,
  isSetPurchaseMethod,
  children,
}: {
  onClose: () => void;
  isSetPurchaseMethod?: boolean;
  children?: ReactNode;
}): JSX.Element {
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const [purchaseMethod, setPurchaseMethod] = useState<string>(mainState.purchaseMethod);
  const dispatch: AppDispatch = useAppDispatch();

  const { type } = useMemo(() => {
    let { type } = mainState.modalProductDeliveryAddressInfo;
    return { type };

  }, [mainState.modalProductDeliveryAddressInfo]);

  function setPurchaseMethodClass(purchaseMethodType: string) {
    if (isSetPurchaseMethod !== undefined) {
      return purchaseMethodType === purchaseMethod ? 'bg-primary-dark text-white' : 'bg-default';
    }
    return `${purchaseMethodType === purchaseMethod ? 'bg-primary-dark text-white' : 'bg-default'} cursor-pointer hover:bg-primary-dark hover:text-white`;
  }

  function onPurchaseMethodSet(purchaseMethodType: string) {
    if (isSetPurchaseMethod === undefined) { setPurchaseMethod(purchaseMethodType) }
    else return;
  }

  return (
    <div className="py-8 space-y-3 w-[640px] px-8">
      <div className="justify-around items-center h-full w-full text-center space-y-2">
        <h3 className="text-primary text-[32px] leading-0">Choose a Shopping Method</h3>
        <div className="flex items-center justify-center h-48">
          <PurchaseMethodType purchaseMethodType='Shopping Cart'
            otherText='Shop by Product'
            purchaseMethodImage='custom_cart_icon.svg'
            purchaseMethodActiveClass={setPurchaseMethodClass}
            onShoppingMethodSet={onPurchaseMethodSet} />
          <PurchaseMethodType purchaseMethodType='Balikbayan Box'
            otherText='Select your Box Type'
            purchaseMethodImage='balik_box_icon.svg'
            purchaseMethodActiveClass={setPurchaseMethodClass}
            onShoppingMethodSet={onPurchaseMethodSet} />
        </div>
        {children && (<div className='space-y-2'>{children}</div>)}

        <h4 className="text-danger font-[500] space-x-1 px-1 py-2">
          <HiInformationCircle size={20} className='inline align-middle' />
          <span className="inline">
            {type === 'purchaseMethod' && 'Choosing shopping cart will automatically set the box where your checked out items will fit.'}
            {type === 'shopMethodDetails' && 'Changing couriers on check out will not be allowed.'}
          </span>
        </h4>

        <div className="space-y-3 w-full">
          <button className='w-full p-3 rounded bg-warning hover:bg-warning-light text-white'
            onClick={() => {
              onClose();
              if (!children) {
                dispatch(purchaseMethodChanged(purchaseMethod));
                if (purchaseMethod === 'Balikbayan Box') {
                  setTimeout(() => {
                    dispatch(modalProductDeliveryAddressOpened({ open: true, type: 'shopMethodDetails' }));
                  }, 1000)
                }

              }
            }}>
            {type === 'purchaseMethod' && 'Next'}
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