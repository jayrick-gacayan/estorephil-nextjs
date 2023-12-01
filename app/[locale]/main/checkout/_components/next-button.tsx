'use client';

import { usePathname, useRouter } from 'next-intl/client';
import { useEffect } from 'react';
import { RootState } from '@/redux/store';
import { validateSender } from '../(pages)/sender/_redux/sender-slice';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { paymentMethodRequestStatusChanged } from '../(pages)/payment-method/_redux/payment-method-slice';
import { RequestStatus } from '@/types/enums/request-status';

export default function NextButton() {
    const url = usePathname();
    const router = useRouter();
    const dispatch = useAppDispatch()
    const senderState = useAppSelector((state: RootState) => state.sender)
    var valid = false;
    const initiateValidate = (() => {
        if (url.includes('sender')) {
            valid = senderState.valid
        }
        else if (url.includes('receiver')) {
            valid = false;
        }
        else if (url.includes('order-summary')) {
            valid = true;
        }
        if (valid) {
            console.log('initiate redirect')
            url.includes('sender') ? router.push('/checkout/receiver')
                : url.includes('receiver') ? router.push('/checkout/order-summary')
                    : url.includes('order-summary') ? router.push('/checkout/payment-method')
                        : router.push('checkout')
        }
        console.log('is form valid', valid)
    })
    useEffect(() => {
        if (url.includes('sender')) {
            valid = senderState.valid
        }
        else if (url.includes('receiver')) {
            valid = false;
        }
        else if (url.includes('order-summary')) {
            valid = true;
        }
        if (valid) {
            console.log('initiate redirect')
            url.includes('sender') ? router.push('/checkout/receiver')
                : url.includes('receiver') ? router.push('/checkout/order-summary')
                    : url.includes('order-summary') ? router.push('/checkout/payment-method')
                        : null
        }
    }, [senderState.valid])

    return (
        <button className={`py-4 bg-yellow-500 rounded-md text-white w-[50%]`}
            onClick={() => {
                console.log('next button clicked')
                url.includes('sender') ? dispatch(validateSender())
                    : url.includes('receiver') ? router.push('/checkout/order-summary')
                        : url.includes('order-summary') ? router.push('/checkout/payment-method') : null
                initiateValidate()
            }}
        // disabled={disabled}
        >
            {url.includes('payment-method') ? <p onClick={() => {
                dispatch(paymentMethodRequestStatusChanged(RequestStatus.WAITING));
                dispatch(paymentMethodRequestStatusChanged(RequestStatus.IN_PROGRESS));
            }}>Checkout </p> : <p>Next</p>}
        </button>
    )
}