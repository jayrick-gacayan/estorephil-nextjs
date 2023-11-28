'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import Modal from '../../_components/modal';
import { AppDispatch, RootState } from '@/redux/store';
import { MainState } from '../_redux/main_state';
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { modalProductDeliveryAddressOpened } from '../_redux/main-slice';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import EnterDeliveryAddress from './enter-delivery-address';
import ChangeAddress from './change-address';
import PurchaseMethod from './purchase-method';
import ChangeShopMethod from './change-shop-method';
import SelectedShopMethodDetails from './selected-shop-method-details';

function MainLayoutModal() {
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const dispatch: AppDispatch = useAppDispatch();

  const { open, type } = useMemo(() => {
    let { open, type } = mainState.modalProductDeliveryAddressInfo;
    return { open, type };

  }, [mainState.modalProductDeliveryAddressInfo]);

  const cbOnModalClose = useCallback(() => {
    if (modalContentRef.current) {
      if (open) {
        modalContentRef.current.classList.add('animate-slide-bottom-down');
        modalContentRef.current.classList.remove('animate-slide-bottom-up');
        setTimeout(() => {
          modalWrapperRef.current?.classList.remove('flex');
          modalWrapperRef.current?.classList.add('hidden');
          dispatch(modalProductDeliveryAddressOpened({ open: false, type: '' }));
        }, 300);
      }
    }
  }, [open, dispatch]);

  useEffect(() => {
    if (modalContentRef.current) {
      if (open) {
        setTimeout(() => {
          if (modalContentRef.current) {
            modalContentRef.current.classList.remove('animate-slide-bottom-down');
            modalContentRef.current.classList.add('animate-slide-bottom-up');
          }
        }, 300)

      }
    }
  }, [open]);

  useOutsideClick(modalContentRef, () => { cbOnModalClose(); });

  return (
    <Modal ref={modalWrapperRef} open={open}>
      <div ref={modalContentRef}
        className={`modal-content flex-none w-auto rounded-2xl bg-white text-center relative z-10 px-8`}>
        {(open && type === 'enterAddress') && (<EnterDeliveryAddress onClose={cbOnModalClose} />)}
        {(open && type === 'changeAddress') && (<ChangeAddress onClose={cbOnModalClose} />)}
        {(open && type === 'purchaseMethod') && (<PurchaseMethod onClose={cbOnModalClose} />)}
        {(open && type === 'changeShopMethod') && (<ChangeShopMethod onClose={cbOnModalClose} />)}
        {(open && type === 'shopMethodDetails') && (<SelectedShopMethodDetails onClose={cbOnModalClose} />)}
      </div>
    </Modal>
  )
}

export default memo(MainLayoutModal)