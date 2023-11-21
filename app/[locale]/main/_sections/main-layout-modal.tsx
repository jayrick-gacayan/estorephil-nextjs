'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import Modal from '../../_components/modal';
import { AppDispatch, RootState } from '@/redux/store';
import { MainState } from '../_redux/main_state';
import { memo, useEffect, useMemo, useRef } from 'react';
import { modalProductDeliveryAddressOpened } from '../_redux/main-slice';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import EnterDeliveryAddress from './enter-delivery-address';
import ChangeAddress from './change-address';
import ShoppingMethod from './shopping-method';
import ChangeShopMethod from './change-shop-method';

function MainLayoutModal() {
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const dispatch: AppDispatch = useAppDispatch();

  const { open, type } = useMemo(() => {
    let { open, type } = mainState.modalProductDeliveryAddressInfo;
    return { open, type };

  }, [mainState.modalProductDeliveryAddressInfo]);

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

  useOutsideClick(modalContentRef, () => { onClose(); });

  function onClose(): void {
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
  }

  return (
    <Modal ref={modalWrapperRef} open={open}>
      <div ref={modalContentRef}
        className={`modal-content md:w-[640px] flex-none w-auto rounded-2xl bg-white text-center relative z-10`}>
        {(open && type === 'enterAddress') && (<EnterDeliveryAddress onClose={onClose} />)}
        {(open && type === 'changeAddress') && (<ChangeAddress onClose={onClose} />)}
        {(open && type === 'shoppingMethod') && (<ShoppingMethod onClose={onClose} />)}
        {(open && type === 'changeShopMethod') && (<ChangeShopMethod onClose={onClose} />)}
      </div>
    </Modal>
  )
}

export default memo(MainLayoutModal)