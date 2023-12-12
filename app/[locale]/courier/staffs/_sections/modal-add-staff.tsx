'use client';

import Modal from '@/app/[locale]/_components/modal';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { useCallback, useMemo, useRef } from 'react';
import AddStaffForm from './add-staff-form';
import { CourierStaffState } from '../_redux/courier-staff-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { modalAddStaffFormOpened } from '../_redux/courier-staff-slice';

export default function ModalAddStaff() {
  const courierStaffState: CourierStaffState = useAppSelector((state: RootState) => {
    return state.courierStaff;
  });
  const dispatch: AppDispatch = useAppDispatch();

  const modalAddStaffFormOpen = useMemo(() => { return courierStaffState.modalAddStaffFormOpen; }, [courierStaffState.modalAddStaffFormOpen])
  const modalContentRef = useRef<HTMLDivElement>(null);

  const cbOnModalClose = useCallback(() => {
    if (modalContentRef.current) {
      modalContentRef.current.classList.remove('animate-slide-up');
      modalContentRef.current.classList.add('animate-slide-down');
      setTimeout(() => {
        dispatch(modalAddStaffFormOpened())
      }, 300);
    }
  }, [dispatch]);

  useOutsideClick(modalContentRef, () => { cbOnModalClose(); });

  return (
    <Modal open={modalAddStaffFormOpen}>
      <div ref={modalContentRef}
        className={`animate-slide-up translate-y-full flex-none w-auto rounded bg-white text-center relative z-10 px-8`}>
        <AddStaffForm onClose={cbOnModalClose} />
      </div>
    </Modal>
  )
}