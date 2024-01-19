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

import { orderContainer } from "@/inversify/inversify.config";
import { OrderRepository } from "@/repositories/order-repository";
import { TYPES } from "@/inversify/types";
import getCheckoutOrder from "../_redux/checkout-thunk";

export default function Providers({ children }: { children: ReactNode }) {
  const dispatch: AppDispatch = useAppDispatch();
  const { data: sessionData } = useSession();
  const searchParams = useSearchParams();

  const searchParamsOrderId = useMemo(() => { return searchParams.get('order_id') }, [searchParams.get('order_id')]);

  useEffect(() => {
    if (!!sessionData?.token) {
      if (!!searchParamsOrderId) {
        let orderRepository = orderContainer.get<OrderRepository>(TYPES.OrderRepository);
        dispatch(checkoutSenderRequestStatusSet(RequestStatus.NONE))
        dispatch(checkoutReceiverRequestStatusSet(RequestStatus.NONE))
        dispatch(paymentMethodRequestStatusChanged(RequestStatus.NONE))
        dispatch(getCheckoutOrder(orderRepository, searchParamsOrderId, sessionData.token));

      }
    }
  }, [sessionData?.token, searchParamsOrderId, dispatch])

  return <>{children}</>
}