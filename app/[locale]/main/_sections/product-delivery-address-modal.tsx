'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import Modal from '../../_components/modal';
import { AppDispatch, StoreState } from '@/redux/store';
import { MainState } from '../_redux/main_state';
import { memo, useMemo, useRef } from 'react';
import { onModalProductDeliveryAddressOpened } from '../_redux/main-slice';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import EnterDeliveryAddress from './enter-delivery-address';
import ChangeAddress from './change-address';
import ShoppingMethod from './shopping-method';

function ProductDeliveryAddressModal() {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const mainState: MainState = useAppSelector((state: StoreState) => { return state.main; });
  const dispatch: AppDispatch = useAppDispatch();

  const { open, type } = useMemo(() => {
    let { open, type } = mainState.modalProductDeliveryAddressInfo;
    return { open, type };

  }, [mainState.modalProductDeliveryAddressInfo]);


  useOutsideClick(modalContentRef, () => { onClose(); });

  function onClose(): void { dispatch(onModalProductDeliveryAddressOpened('')); }

  return (
    <Modal open={open}>
      <div ref={modalContentRef}
        className={`transition-all duration-200 ease-in-out md:w-[640px] flex-none w-auto rounded-2xl bg-white text-center relative z-10 
        ${mainState.modalProductDeliveryAddressInfo.open ? 'bottom-0' : '-bottom-40'}`}>
        {(open && type === 'enterAddress') && (<EnterDeliveryAddress />)}
        {(open && type === 'changeAddress') && (<ChangeAddress />)}
        {(open && type === 'shoppingMethod') && (<ShoppingMethod />)}
      </div>
    </Modal>
  )
}

export default memo(ProductDeliveryAddressModal)