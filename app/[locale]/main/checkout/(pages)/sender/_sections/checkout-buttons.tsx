'use client';

import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { orderContainer } from "@/inversify/inversify.config";
import { TYPES } from "@/inversify/types";
import { AppDispatch, RootState } from "@/redux/store";
import { OrderRepository } from "@/repositories/order-repository";
import { useSession } from "next-auth/react";
import { useRouter } from "next-intl/client";
import { useSearchParams, useSelectedLayoutSegment } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";
import { PaymentMethodState } from "../../payment-method/_redux/payment-method-state";
import { ReceiverState } from "../../receiver/_redux/receiver-state";
import { SenderState } from "../_redux/sender-state";
import { RequestStatus } from "@/types/enums/request-status";
import { checkoutReceiverRequestStatusSet } from "../../receiver/_redux/receiver-slice";
import { checkoutSenderRequestStatusSet, validateSender } from "../_redux/sender-slice";
import { checkout, updateCheckoutOrder } from "../../../_redux/checkout-thunk";
import { paymentMethodRequestStatusChanged } from "../../payment-method/_redux/payment-method-slice";
import SubmitLoader from "@/app/[locale]/_components/submit-loader";
import Link from "next-intl/link";

export default function CheckoutButtons() {
  const searchParams = useSearchParams();
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  const dispatch: AppDispatch = useAppDispatch()
  const { data: sessionData } = useSession();

  const memoSegment = useMemo(() => { return segment ?? '' }, [segment]);
  const checkoutState: SenderState | ReceiverState | PaymentMethodState = useAppSelector((state: RootState) => {
    if (memoSegment !== '') {
      if (memoSegment === 'sender') { return state.sender; }
      else if (memoSegment === 'receiver') { return state.receiver; }
    }
    return state.paymentMethod;
  });

  const orderIdSearchParams = useMemo(() => {
    return searchParams.get('order_id')
  }, [searchParams.get('order_id')]);

  const disableButton = useMemo(() => {
    if ((memoSegment === 'sender' || memoSegment === 'receiver') &&
      (checkoutState.requestStatus === RequestStatus.WAITING ||
        checkoutState.requestStatus === RequestStatus.IN_PROGRESS)) {
      return true;
    }
    return false;

  }, [checkoutState.requestStatus, memoSegment]);

  useEffect(() => {
    if (memoSegment !== '') {
      let orderId = orderIdSearchParams;
      let token = sessionData?.token;
      const orderRepository = orderContainer.get<OrderRepository>(TYPES.OrderRepository);
      switch (memoSegment) {
        case 'sender':
          switch (checkoutState.requestStatus) {
            case RequestStatus.WAITING:
              setTimeout(() => {
                dispatch(checkoutSenderRequestStatusSet(RequestStatus.IN_PROGRESS))
              }, 4000);
              break;
            case RequestStatus.IN_PROGRESS:

              dispatch(validateSender());
              break;
            case RequestStatus.SUCCESS:
              if (!!token && !!orderId) {
                dispatch(updateCheckoutOrder(orderRepository, orderId, token));
              }
              router.push(`/checkout/receiver${!!orderId ? `?order_id=${orderId}` : ``}`);
              break;
          }
          break;
        case 'receiver':
          switch (checkoutState.requestStatus) {
            case RequestStatus.WAITING:
              dispatch(checkoutReceiverRequestStatusSet(RequestStatus.IN_PROGRESS))
              break;
            case RequestStatus.IN_PROGRESS:
              dispatch(checkoutReceiverRequestStatusSet(RequestStatus.SUCCESS))
              break;
            case RequestStatus.SUCCESS:
              if (!!token && !!orderId) {
                dispatch(updateCheckoutOrder(orderRepository, orderId, token));
              }
              router.push(`/checkout/order-summary${!!orderId ? `?order_id=${orderId}` : ``}`);
              break;
          }
          break;

      }
    }

  }, [
    memoSegment,
    dispatch,
    router,
    orderIdSearchParams,
    sessionData?.token,
    checkoutState.requestStatus
  ]);

  const cbBackUrl = useCallback(() => {
    if (memoSegment === '' || memoSegment === 'sender') { return '/'; }

    return `/checkout/${memoSegment === 'order-summary' ? 'receiver' : memoSegment === 'payment-method' ? 'order-summary' : 'sender'}${!!orderIdSearchParams ? `?order_id=${orderIdSearchParams}` : ``}`
  }, [orderIdSearchParams, memoSegment]);

  return (
    <div className="mx-16 mb-12">
      {/* Previous Button */}
      {
        memoSegment === '' || memoSegment === 'sender' ? null :
          <Link href={cbBackUrl()} className='text-primary hover:underline'
            onClick={() => {
              switch (memoSegment) {
                case 'receiver': dispatch(checkoutSenderRequestStatusSet(RequestStatus.NONE)); break;
                case 'order-summary': dispatch(checkoutReceiverRequestStatusSet(RequestStatus.NONE)); break;
              }
            }}>
            back
          </Link>
      }

      {/* Next Button */}
      <button className='py-4 bg-warning rounded-md text-white w-[50%] translate-x-1/2'
        onClick={() => {
          switch (memoSegment) {
            case 'sender':
              dispatch(checkoutSenderRequestStatusSet(RequestStatus.WAITING));
              break;
            case 'receiver':
              dispatch(checkoutReceiverRequestStatusSet(RequestStatus.WAITING));
              break;
            case 'order-summary':
              router.push(`/checkout/payment-method${!!orderIdSearchParams ? `?order_id=${orderIdSearchParams}` : ``}`)
              break;
            case 'payment-method':
              const orderRepository = orderContainer.get<OrderRepository>(TYPES.OrderRepository)
              dispatch(paymentMethodRequestStatusChanged(RequestStatus.WAITING));
              setTimeout(() => {
                dispatch(paymentMethodRequestStatusChanged(RequestStatus.IN_PROGRESS));
              }, 2000)

              dispatch(checkout(orderRepository, sessionData?.token ?? ''))
              break;
          }
        }}
        disabled={disableButton}>
        {
          memoSegment !== '' ?
            ((memoSegment === 'sender' || memoSegment === 'receiver') &&
              (checkoutState.requestStatus === RequestStatus.WAITING ||
                checkoutState.requestStatus === RequestStatus.IN_PROGRESS)) ? (<SubmitLoader />) :
              memoSegment === 'payment-method' ? 'Checkout' : 'Next'
            : null
        }
      </button>
    </div>
  )
}