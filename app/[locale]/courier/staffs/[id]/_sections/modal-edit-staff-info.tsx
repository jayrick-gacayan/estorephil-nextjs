'use client';

import { useAppSelector, useAppDispatch } from "@/app/_hooks/redux_hooks";
import { CourierStaffInfoState } from "../_redux/courier-staff-info-state";
import { AppDispatch, RootState } from "@/redux/store";
import { useCallback, useMemo, useRef } from "react";
import { modalStaffEditOpened } from "../_redux/courier-staff-info-slice";
import { useOutsideClick } from "@/app/_hooks/use-outside-click";
import Modal from "@/app/[locale]/_components/modal";
import EditStaffForm from "./edit-staff-form";

export default function ModalEditStaffInfo() {
  const courierStaffInfoState: CourierStaffInfoState = useAppSelector((state: RootState) => {
    return state.courierStaffInfo;
  });
  const dispatch: AppDispatch = useAppDispatch();

  const modalEditStaffInfoOpen = useMemo(() => { return courierStaffInfoState.modalStaffEditOpen; }, [courierStaffInfoState.modalStaffEditOpen])
  const modalContentRef = useRef<HTMLDivElement>(null);

  const cbOnModalClose = useCallback(() => {
    if (modalContentRef.current) {
      modalContentRef.current.classList.remove('animate-slide-up');
      modalContentRef.current.classList.add('animate-slide-down');
      setTimeout(() => {
        dispatch(modalStaffEditOpened())
      }, 300);
    }
  }, [dispatch]);

  useOutsideClick(modalContentRef, () => { cbOnModalClose(); });

  return (
    <Modal open={modalEditStaffInfoOpen}>
      <div ref={modalContentRef}
        className={`animate-slide-up translate-y-full flex-none w-auto rounded bg-white text-center relative z-10 px-8`}>
        <EditStaffForm onClose={cbOnModalClose} />
      </div>
    </Modal>
  )
}