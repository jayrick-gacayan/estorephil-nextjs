'use client'
import { usePathname, useRouter } from "next-intl/client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { validateSender } from "../(pages)/sender/_redux/sender-slice";

export default function NextButton() {
    const url = usePathname();
    const router = useRouter();
    const dispatch = useDispatch()
    const senderState = useSelector((state: RootState) => state.sender)
    var valid = false;
    const initiateValidate = () => {
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
    }
    useEffect(() => { initiateValidate() }, [senderState.valid])

    return (
        <button className={`py-4 bg-yellow-500 rounded-md text-white w-[50%]`}
            onClick={() => {
                console.log('next button clicked')
                url.includes('sender') ? dispatch(validateSender())
                    : url.includes('receiver') ? router.push('/checkout/order-summary')
                        : url.includes('order-summary') ? router.push('/checkout/payment-method')
                            : router.push('/')
                initiateValidate()
            }}
        // disabled={disabled}
        >
            {url.includes('payment-method') ? <p>Checkout </p> : <p>Next</p>}
        </button>
    )
}