'use client';

import { AppDispatch, RootState } from '@/redux/store';
import { CourierBoxesState } from '../_redux/courier-boxes-state';
import { boxFormFieldsReset, modalBoxesOpened } from '../_redux/courier-boxes-slice';
import Modal from '@/app/[locale]/_components/modal';
import { useAppSelector, useAppDispatch } from '@/app/_hooks/redux_hooks';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { useMemo, useRef, useCallback, useEffect } from 'react';
import BoxesModalForm from './boxes-modal-form';
import { RequestStatus } from '@/types/enums/request-status';

export default function ModalBoxesContainer() {
  const courierBoxesState: CourierBoxesState = useAppSelector((state: RootState) => {
    return state.courierBoxes;
  });
  const dispatch: AppDispatch = useAppDispatch();

  const { open, type } = useMemo(() => {
    return {
      open: courierBoxesState.modalBoxesOpen.open,
      type: courierBoxesState.modalBoxesOpen.type
    }
  }, [courierBoxesState.modalBoxesOpen]);

  const requestStatus = useMemo(() => {
    return courierBoxesState.boxFormFields.requestStatus;
  }, [courierBoxesState.boxFormFields.requestStatus])

  const modalContentRef = useRef<HTMLDivElement>(null);



  const cbOnModalClose = useCallback(() => {
    if (modalContentRef.current) {
      modalContentRef.current.classList.remove('animate-slide-up');
      modalContentRef.current.classList.add('animate-slide-down');
      setTimeout(() => {
        dispatch(modalBoxesOpened(''))
        dispatch(boxFormFieldsReset())
      }, 300);
    }
  }, [dispatch]);

  useEffect(() => {
    if (requestStatus === RequestStatus.SUCCESS) {
      cbOnModalClose();
    }
  }, [requestStatus, cbOnModalClose])

  useOutsideClick(modalContentRef, () => { cbOnModalClose(); });

  return (
    <Modal open={open}>
      <div ref={modalContentRef}
        className={`animate-slide-up translate-y-full flex-none w-auto rounded bg-white text-center relative z-10 px-8`}>
        {(open && type !== '') && (<BoxesModalForm type={type} onClose={cbOnModalClose} />)}
      </div>
    </Modal>
  )
}