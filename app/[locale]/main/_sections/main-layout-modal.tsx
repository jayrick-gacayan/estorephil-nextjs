'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import Modal from '../../_components/modal';
import { AppDispatch, RootState } from '@/redux/store';
import { useCallback, useMemo, useRef } from 'react';
import { mainModalOpened } from '../_redux/main-slice';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import DeliveryAddressForm from './enter-delivery-address';
import ChangeAddress from './change-address';
import CartTypeContainer from './cart-type-container';
import ChangeCartType from './change-cart-type';
import { MainState } from '../_redux/main_state';

export default function MainLayoutModal() {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const dispatch: AppDispatch = useAppDispatch();

  const { open, type } = useMemo(() => {
    return mainState.mainModalInfo;
  }, [mainState.mainModalInfo]);

  const isToChange = useMemo(() => { return mainState.isToChange }, [mainState.isToChange])

  const cbOnModalClose = useCallback(() => {
    if (modalContentRef.current) {
      modalContentRef.current.classList.remove('animate-slide-up');
      modalContentRef.current.classList.add('animate-slide-down');
      setTimeout(() => {
        dispatch(mainModalOpened({ open: false, type: '' }));
      }, 300);
    }
  }, [dispatch]);

  useOutsideClick(modalContentRef, () => { cbOnModalClose(); });

  return (
    <Modal open={open}>
      <div ref={modalContentRef}
        className={`animate-slide-up translate-y-full flex-none w-auto rounded-2xl bg-white text-center relative z-10 px-8`}>
        {(open && type === 'deliveryAddress') && (<DeliveryAddressForm isToChange={isToChange} onClose={cbOnModalClose} />)}
        {(open && type === 'changeAddress') && (<ChangeAddress onClose={cbOnModalClose} />)}
        {(open && type === 'cartType') && (<CartTypeContainer onClose={cbOnModalClose} />)}
        {(open && type === 'changeCartType') && (<ChangeCartType onClose={cbOnModalClose} />)}
      </div>
    </Modal>
  )
}