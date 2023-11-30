'use client';

import { useEffect, useMemo, useRef } from 'react';
import Modal from '../../../_components/modal';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { PaymentMethodState } from '../(pages)/payment-method/_redux/payment-method-state';
import { RequestStatus } from '@/types/enums/request-status';
import { useRouter } from 'next-intl/client';
import { paymentMethodRequestStatusChanged } from '../(pages)/payment-method/_redux/payment-method-slice';

export default function ModalPackingUpItems() {
  const paymentMethodState: PaymentMethodState = useAppSelector((state: RootState) => {
    return state.paymentMethod;
  });
  const router = useRouter();
  const dispatch: AppDispatch = useAppDispatch();

  const paymentMethodRequestStatus: RequestStatus = useMemo(() => {
    return paymentMethodState.requestStatus;
  }, [paymentMethodState.requestStatus])

  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paymentMethodRequestStatus === RequestStatus.IN_PROGRESS) {
      setTimeout(() => {
        if (modalContentRef.current) {
          modalContentRef.current.classList.remove('animate-slide-up');
          modalContentRef.current.classList.add('animate-slide-down');
        }
        dispatch(paymentMethodRequestStatusChanged(RequestStatus.NONE));

        router.push('/checkout/purchase-status')
      }, 5000)
    }

  }, [paymentMethodRequestStatus, dispatch, router])

  return (
    <Modal open={
      (paymentMethodRequestStatus === RequestStatus.WAITING ||
        paymentMethodRequestStatus === RequestStatus.IN_PROGRESS)
    }>
      <div ref={modalContentRef}
        className={`animate-slide-up translate-y-full flex-none w-auto rounded-2xl bg-white text-center relative z-10 px-8`}>
        <div className='py-8 space-y-3 w-[512px] m-auto'>

          <h1 className='font-semibold text-[36px] leading-0'>PACKING-UP ITEMS</h1>
          <p className='text-sm'>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui.
            Morbi purus mauris, vulputate quis felis nec, fermentum aliquam orci.
            Quisque ornare iaculis placerat.
          </p>
        </div>
      </div>
    </Modal>
  )
}