'use client';

import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { AppDispatch, RootState } from "@/redux/store";
import { CourierBoxesState } from "../_redux/courier-boxes-state";
import { useMemo, } from "react";
import ModalAlertResponse from "@/app/[locale]/_components/modal-alert-response";
import { RequestStatus } from "@/types/enums/request-status";
import { boxFormFieldsReset } from "../_redux/courier-boxes-slice";

export default function ModalAlertInfo() {
  const courierBoxesState: CourierBoxesState = useAppSelector((state: RootState) => {
    return state.courierBoxes;
  });
  const dispatch: AppDispatch = useAppDispatch();

  const requestStatus = useMemo(() => {
    return courierBoxesState.boxFormFields.requestStatus
  }, [courierBoxesState.boxFormFields.requestStatus]);


  return (
    <ModalAlertResponse open={requestStatus === RequestStatus.SUCCESS || requestStatus === RequestStatus.FAILURE}
      message={
        requestStatus === RequestStatus.SUCCESS ? 'Successfully added to the box list.' :
          requestStatus === RequestStatus.FAILURE ? 'Something went wrong. Please try again.' : ''
      }
      type={
        requestStatus === RequestStatus.SUCCESS ? 'success' :
          requestStatus === RequestStatus.FAILURE ? 'danger' :
            'none'
      }
      onCloseModal={() => {
        dispatch(boxFormFieldsReset())
      }} />
  )
}