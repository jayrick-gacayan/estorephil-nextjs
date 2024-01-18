'use client'
import { AppDispatch, RootState } from "@/redux/store";
import Validations from "@/types/validations"
import { usePathname, useRouter } from "next-intl/client";
import { useSelector } from "react-redux";
import Link from 'next-intl/link';
import { useSearchParams, useSelectedLayoutSegment } from "next/navigation";
import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { PaymentMethodState } from "../(pages)/payment-method/_redux/payment-method-state";
import { ReceiverState } from "../(pages)/receiver/_redux/receiver-state";
import { SenderState } from "../(pages)/sender/_redux/sender-state";
import { checkoutSenderRequestStatusSet } from "../(pages)/sender/_redux/sender-slice";
import { RequestStatus } from "@/types/enums/request-status";
import { checkoutReceiverRequestStatusSet } from "../(pages)/receiver/_redux/receiver-slice";

export default function PreviousButton() {
    const dispatch: AppDispatch = useAppDispatch();
    const searchParams = useSearchParams();
    const segment = useSelectedLayoutSegment();
    const memoSegment = useMemo(() => { return segment ?? '' }, [segment]);
    const orderIdSearchParams = useMemo(() => { return searchParams.get('order_id') }, [searchParams.get('order_id')]);

    const cbBackUrl = useCallback(() => {
        if (memoSegment === '' || memoSegment === 'sender') { return '/'; }

        return `/checkout/${memoSegment === 'order-summary' ? 'receiver' : memoSegment === 'payment-method' ? 'order-summary' : 'sender'}${!!orderIdSearchParams ? `?order_id=${orderIdSearchParams}` : ``}`
    }, [orderIdSearchParams, memoSegment]);

    return memoSegment === '' || memoSegment === 'sender' ? null :
        <Link href={cbBackUrl()} className='text-primary hover:underline '
            onClick={() => {
                switch (memoSegment) {
                    case 'receiver': dispatch(checkoutSenderRequestStatusSet(RequestStatus.NONE)); break;
                    case 'order-summary': dispatch(checkoutReceiverRequestStatusSet(RequestStatus.NONE));
                }
            }}>
            back
        </Link>;
}