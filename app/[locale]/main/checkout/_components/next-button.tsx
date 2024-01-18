'use client';

import { usePathname, useRouter } from 'next-intl/client';
import { useEffect, useMemo } from 'react';
import { AppDispatch, RootState } from '@/redux/store';
import { checkoutSenderRequestStatusSet, validateSender } from '../(pages)/sender/_redux/sender-slice';
import { checkoutReceiverRequestStatusSet } from '../(pages)/receiver/_redux/receiver-slice';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { RequestStatus } from '@/types/enums/request-status';
import { ReceiverState } from '../(pages)/receiver/_redux/receiver-state';
import { SenderState } from '../(pages)/sender/_redux/sender-state';
import { PaymentMethodState } from '../(pages)/payment-method/_redux/payment-method-state';
import { useSearchParams, useSelectedLayoutSegment } from 'next/navigation';
import SubmitLoader from '@/app/[locale]/_components/submit-loader';
import { paymentMethodRequestStatusChanged } from '../(pages)/payment-method/_redux/payment-method-slice';
import { useSession } from 'next-auth/react';
import { orderContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { OrderRepository } from '@/repositories/order-repository';
import { checkout } from '../_redux/checkout-thunk';
import { useSelector } from 'react-redux';

export default function NextButton() {
    const searchParams = useSearchParams();
    const segment = useSelectedLayoutSegment();
    const router = useRouter();
    const dispatch: AppDispatch = useAppDispatch()
    const { data: sessionData } = useSession();

    const orderRepository = orderContainer.get<OrderRepository>(TYPES.OrderRepository)

    const memoSegment = useMemo(() => { return segment ?? '' }, [segment]);
    const checkoutState: SenderState | ReceiverState | PaymentMethodState = useAppSelector((state: RootState) => {
        if (memoSegment !== '') {
            if (memoSegment === 'sender') { return state.sender; }
            else if (memoSegment === 'receiver') { return state.receiver; }
        }
        return state.paymentMethod;
    });

    const orderIdSearchParams = useMemo(() => { return searchParams.get('order_id') }, [searchParams.get('order_id')]);
    // const disableButton = useMemo(() => {
    //     if ((memoSegment === sender|| segment.includes('receiver')) &&
    //         (checkoutState.requestStatus === RequestStatus.WAITING ||
    //             checkoutState.requestStatus === RequestStatus.IN_PROGRESS)) {
    //         return true;
    //     }
    //     return false;
    // }, [checkoutState.requestStatus, segment]);
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
                            setTimeout(() => {
                                dispatch(checkoutReceiverRequestStatusSet(RequestStatus.SUCCESS))
                            }, 5000)
                            break;
                        case RequestStatus.SUCCESS:
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
        checkoutState.requestStatus
    ]);

    function CheckoutButtonNextContent() {
        if (memoSegment !== '') {
            if ((memoSegment === 'sender' || memoSegment === 'receiver') &&
                (checkoutState.requestStatus === RequestStatus.WAITING ||
                    checkoutState.requestStatus === RequestStatus.IN_PROGRESS)
            ) {
                return (<SubmitLoader />)
            }
            else if (memoSegment === 'payment-method') {
                return 'Checkout';
            }
            else {
                return 'Next';
            }
        }
        return null;
    }

    return (
        <button className={`py-4 bg-warning rounded-md text-white w-[50%]`}
            onClick={() => {
                switch (segment) {
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
                        dispatch(paymentMethodRequestStatusChanged(RequestStatus.WAITING));
                        setTimeout(() => {
                            dispatch(paymentMethodRequestStatusChanged(RequestStatus.IN_PROGRESS));
                        }, 2000)
                        dispatch(checkout(orderRepository, sessionData?.token ?? ''))
                        break;
                }
            }}
            disabled={disableButton}>
            <CheckoutButtonNextContent />
        </button>
    )
}