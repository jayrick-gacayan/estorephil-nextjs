'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import Modal from '../../_components/modal';
import { AppDispatch, RootState } from '@/redux/store';
import { MainState } from '../_redux/main_state';
import { useCallback, useMemo, useRef } from 'react';
import { modalProductDeliveryAddressOpened } from '../_redux/main-slice';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import EnterDeliveryAddress from './enter-delivery-address';
import ChangeAddress from './change-address';
import PurchaseMethod from './purchase-method';
import ChangeShopMethod from './change-shop-method';
import SelectedShopMethodDetails from './selected-shop-method-details';

export default function MainLayoutModal() {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const dispatch: AppDispatch = useAppDispatch();

  const { open, type } = useMemo(() => {
    return mainState.modalProductDeliveryAddressInfo;
  }, [mainState.modalProductDeliveryAddressInfo]);

  const cbOnModalClose = useCallback(() => {
    if (modalContentRef.current) {
      modalContentRef.current.classList.remove('animate-slide-up');
      modalContentRef.current.classList.add('animate-slide-down');
      setTimeout(() => {
        dispatch(modalProductDeliveryAddressOpened({ open: false, type: '' }));
      }, 300);
    }
  }, [dispatch]);

  useOutsideClick(modalContentRef, () => { cbOnModalClose(); });

  return (
    <Modal open={open}>
      <div ref={modalContentRef}
        className={`animate-slide-up translate-y-full flex-none w-auto rounded-2xl bg-white text-center relative z-10 px-8`}>
        {(open && type === 'enterAddress') && (<EnterDeliveryAddress onClose={cbOnModalClose} />)}
        {(open && type === 'changeAddress') && (<ChangeAddress onClose={cbOnModalClose} />)}
        {(open && type === 'purchaseMethod') && (<PurchaseMethod onClose={cbOnModalClose} />)}
        {(open && type === 'changeShopMethod') && (<ChangeShopMethod onClose={cbOnModalClose} />)}
        {(open && type === 'shopMethodDetails') && (<SelectedShopMethodDetails onClose={cbOnModalClose} />)}
      </div>
    </Modal>
  )
}