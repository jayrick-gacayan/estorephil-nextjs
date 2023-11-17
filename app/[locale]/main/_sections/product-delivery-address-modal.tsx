'use client';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import Modal from '../../_components/modal';
import { AppDispatch, RootState } from '@/redux/store';
import { MainState } from '../_redux/main_state';
import { memo, useEffect, useMemo, useRef } from 'react';
import { onModalProductDeliveryAddressOpened } from '../_redux/main-slice';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import EnterDeliveryAddress from './enter-delivery-address';
import ChangeAddress from './change-address';
import ShoppingMethod from './shopping-method';

function ProductDeliveryAddressModal() {
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
  const dispatch: AppDispatch = useAppDispatch();

  const { open, type } = useMemo(() => {
    let { open, type } = mainState.modalProductDeliveryAddressInfo;
    return { open, type };

  }, [mainState.modalProductDeliveryAddressInfo]);

  useEffect(() => {
    if (modalWrapperRef.current) {
      if (open) {
        setTimeout(() => {
          if (modalContentRef.current) {
            modalContentRef.current.classList.add('bottom-0');
            modalContentRef.current.classList.remove('-bottom-40');
          }
        }, 300);
        modalWrapperRef.current.classList.remove('hidden');
        modalWrapperRef.current.classList.add('flex');
      }
    }
  }, [open])

  useOutsideClick(modalContentRef, () => { onClose(); });

  function onClose(): void {
    if (modalContentRef.current) {
      if (open) {
        modalContentRef.current.classList.remove('bottom-0');
        modalContentRef.current.classList.add('-bottom-40');
        setTimeout(() => {
          modalWrapperRef.current?.classList.remove('flex');
          modalWrapperRef.current?.classList.add('hidden');
          dispatch(onModalProductDeliveryAddressOpened({ open: false, type: '' }));
        }, 300);
      }
    }
  }

  return (
    <Modal ref={modalWrapperRef}>
      <div ref={modalContentRef}
        className={`transition-all duration-200 ease-in-out md:w-[640px] flex-none w-auto rounded-2xl bg-white text-center relative z-10`}>
        {(open && type === 'enterAddress') && (<EnterDeliveryAddress onClose={onClose} />)}
        {(open && type === 'changeAddress') && (<ChangeAddress onClose={onClose} />)}
        {(open && type === 'shoppingMethod') && (<ShoppingMethod onClose={onClose} />)}
      </div>
    </Modal>
  )
}

export default memo(ProductDeliveryAddressModal)