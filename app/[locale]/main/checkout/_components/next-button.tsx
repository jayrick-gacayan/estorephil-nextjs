'use client';

import { usePathname, useRouter } from 'next-intl/client';
import { useEffect, useMemo } from 'react';
import { AppDispatch, RootState } from '@/redux/store';
import { requestStatusSet as senderRequestStatus, validateSender } from '../(pages)/sender/_redux/sender-slice';
import { requestStatusSet as receiverRequestStatus } from '../(pages)/receiver/_redux/receiver-slice';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { RequestStatus } from '@/types/enums/request-status';
import { ReceiverState } from '../(pages)/receiver/_redux/receiver-state';
import { SenderState } from '../(pages)/sender/_redux/sender-state';
import { PaymentMethodState } from '../(pages)/payment-method/_redux/payment-method-state';
import { useSelectedLayoutSegment } from 'next/navigation';
import SubmitLoader from '@/app/[locale]/_components/submit-loader';
import { paymentMethodRequestStatusChanged } from '../(pages)/payment-method/_redux/payment-method-slice';

export default function NextButton() {
    const segment = useSelectedLayoutSegment();
    const pathname = usePathname();
    const router = useRouter();
    const dispatch: AppDispatch = useAppDispatch()

    const checkoutState: SenderState | ReceiverState | PaymentMethodState = useAppSelector((state: RootState) => {
        if (pathname.includes('sender')) { return state.sender; }
        else if (pathname.includes('receiver')) { return state.receiver; }
        return state.paymentMethod;
    });

    const disableButton = useMemo(() => {
        if ((segment === 'sender' || segment === 'receiver') &&
            (checkoutState.requestStatus === RequestStatus.WAITING ||
                checkoutState.requestStatus === RequestStatus.IN_PROGRESS)) {
            return true;
        }
        return false;

    }, [checkoutState.requestStatus, segment]);

    useEffect(() => {
        if (!!segment) {
            switch (segment) {
                case 'sender':
                    switch (checkoutState.requestStatus) {
                        case RequestStatus.WAITING:
                            setTimeout(() => {
                                dispatch(senderRequestStatus(RequestStatus.IN_PROGRESS))
                            }, 4000);
                            break;
                        case RequestStatus.IN_PROGRESS:
                            dispatch(validateSender());
                            break;
                        case RequestStatus.SUCCESS:
                            router.push('/checkout/receiver');
                            break;
                    }
                    break;
                case 'receiver':
                    switch (checkoutState.requestStatus) {
                        case RequestStatus.WAITING:
                            dispatch(receiverRequestStatus(RequestStatus.IN_PROGRESS))
                            break;
                        case RequestStatus.IN_PROGRESS:
                            setTimeout(() => {
                                dispatch(receiverRequestStatus(RequestStatus.SUCCESS))
                            }, 5000)
                            break;
                        case RequestStatus.SUCCESS:
                            router.push('/checkout/order-summary');
                            break;
                    }
                    break;
                case 'order-summary':
                    // router.push('/checkout/payment-method');
                    break;
            }
        }

    }, [segment, dispatch, router, checkoutState.requestStatus])

    function CheckoutButtonNextContent() {
        if (!!segment) {
            if ((segment === 'sender' || segment === 'receiver') &&
                (checkoutState.requestStatus === RequestStatus.WAITING ||
                    checkoutState.requestStatus === RequestStatus.IN_PROGRESS)
            ) {
                return (<SubmitLoader />)
            }
            else if (segment === 'payment-method') {
                return 'Checkout';
            }
            else {
                return 'Next';
            }
        }

    }

    return (
        <button className={`py-4 bg-warning rounded-md text-white w-[50%]`}
            onClick={() => {
                switch (segment) {
                    case 'sender':
                        dispatch(senderRequestStatus(RequestStatus.WAITING));
                        break;
                    case 'receiver':
                        dispatch(receiverRequestStatus(RequestStatus.WAITING));
                        break;
                    case 'order-summary':
                        router.push('/checkout/payment-method');
                        break;
                    case 'payment-method':
                        dispatch(paymentMethodRequestStatusChanged(RequestStatus.WAITING));
                        setTimeout(() => {
                            dispatch(paymentMethodRequestStatusChanged(RequestStatus.IN_PROGRESS));
                        }, 2000)
                        break;
                }
            }}
            disabled={disableButton}>
            <CheckoutButtonNextContent />
        </button>
    )
}