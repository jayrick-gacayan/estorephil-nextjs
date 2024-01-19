'use client'

import { useAppDispatch } from "@/app/_hooks/redux_hooks";
import { AppDispatch } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useMemo } from "react";
import { checkoutSenderRequestStatusSet } from "../(pages)/sender/_redux/sender-slice";
import { RequestStatus } from "@/types/enums/request-status";
import { checkoutReceiverRequestStatusSet } from "../(pages)/receiver/_redux/receiver-slice";
import { paymentMethodRequestStatusChanged } from "../(pages)/payment-method/_redux/payment-method-slice";

export default function Providers({ children }: { children: ReactNode }) {
  const dispatch: AppDispatch = useAppDispatch();
  const { data: sessionData } = useSession();
  const searchParams = useSearchParams();

  const searchParamsOrderId = useMemo(() => { return searchParams.get('order_id') }, [searchParams.get('order_id')]);

  useEffect(() => {
    if (!!sessionData?.token) {
      if (!!searchParamsOrderId) {
        dispatch(checkoutSenderRequestStatusSet(RequestStatus.NONE))
        dispatch(checkoutReceiverRequestStatusSet(RequestStatus.NONE))
        dispatch(paymentMethodRequestStatusChanged(RequestStatus.NONE))
      }
    }
  }, [sessionData?.token, searchParamsOrderId, dispatch])

}