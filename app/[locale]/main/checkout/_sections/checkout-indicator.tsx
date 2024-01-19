"use client"

import { RootState } from "@/redux/store"
import { usePathname, useRouter } from "next-intl/client";
import { useSelectedLayoutSegment } from "next/navigation";

import { useEffect, useMemo } from "react";
import { FaCheck } from "react-icons/fa"

export default function CheckoutIndicator() {
    const segment = useSelectedLayoutSegment();

    const memoSegment = useMemo(() => { return segment ?? ''; }, [segment])

    const url = usePathname()
    // useEffect(() => {
    //     if (state.order.id === null || cartState.itemsSelected.length === 0) {
    //         router.push('/cart')
    //     }
    // }, [state.order])
    // console.log('params', url)

    function StepperIndicators({
        current,
        altText,
        index,
        length,
    }: {
        current: string;
        altText: string;
        index: number;
        length: number;
    }) {
        return (
            <div className="w-[25%]">
                <div className="flex justify-center items-center relative">
                    <div className={`flex items-center justify-center rounded-full w-[50px] h-[50px] px-4 py-2 text-center ${url.includes('payment-method') ? `bg-blue-500 text-white` : url.includes('order-summary') ? `bg-blue-500 text-white` : url.includes('receiver') ? `bg-blue-500 text-white` : url.includes('sender') ? `bg-blue-500 text-white` : `bg-[#f3f3f3] text-black`} text-[20px]`}>{url.includes('payment-method') ? <FaCheck size={25} /> : url.includes('order-summary') ? <FaCheck size={25} /> : url.includes('receiver') ? <FaCheck size={25} /> : 1}</div>
                    {index > length - 1 && <hr className={`w-full border-4 z-0 border-gray-200`} />}

                </div>
                <div className="text-xs text-gray-400 font-medium pt-2"> Step 1</div>
                <div className={`${url.includes('sender') ? `text-[#1487ff]` : `text-gray-400`} font-bold`}>Sender Info</div>
            </div>
        )
    }

    return (

        <div className="flex items-center justify-center p-4 w-[884px] m-auto">
            <div className="w-[25%]">
                <div className="flex justify-center items-center relative">
                    <div className={`flex items-center justify-center rounded-full w-[50px] h-[50px] px-4 py-2 text-center ${url.includes('payment-method') ? `bg-blue-500 text-white` : url.includes('order-summary') ? `bg-blue-500 text-white` : url.includes('receiver') ? `bg-blue-500 text-white` : url.includes('sender') ? `bg-blue-500 text-white` : `bg-[#f3f3f3] text-black`} text-[20px]`}>{url.includes('payment-method') ? <FaCheck size={25} /> : url.includes('order-summary') ? <FaCheck size={25} /> : url.includes('receiver') ? <FaCheck size={25} /> : 1}</div>
                    <hr className="w-full border-4 z-0 border-gray-200" />
                </div>
                <div className="text-xs text-gray-400 font-medium pt-2"> Step 1</div>
                <div className={`${url.includes('sender') ? `text-[#1487ff]` : `text-gray-400`} font-bold`}>Sender Info</div>
            </div>
            <div className="w-[25%]">
                <div className="flex justify-center items-center relative">
                    <div className={`flex items-center justify-center rounded-[100%] w-[50px] h-[50px] px-4 py-2 text-center ${url.includes('payment-method') ? `bg-blue-500 text-white` : url.includes('order-summary') ? `bg-blue-500 text-white` : url.includes('receiver') ? `bg-blue-500 text-white` : `bg-[#f3f3f3] text-black`} text-[20px]`}>{url.includes('payment-method') ? <FaCheck size={25} /> : url.includes('order-summary') ? <FaCheck size={25} /> : 2}</div>
                    <hr className="w-full border-4 z-0 border-gray-200" />
                </div>
                <div className="text-xs text-gray-400 font-medium pt-2">Step 2</div>
                <div className={`${url.includes('receiver') ? `text-[#1487ff]` : `text-gray-400`} font-bold`}>Receiver Info</div>
            </div>
            <div className="w-[25%]">
                <div className="flex justify-center items-center relative">
                    <div className={`flex items-center justify-center rounded-[100%] w-[50px] px-4 py-2 h-[50px] text-center ${url.includes('order-summary') ? `bg-blue-500 text-white` : url.includes('payment-method') ? `bg-blue-500 text-white` : `bg-[#f3f3f3] text-black`} text-[20px]`}>{url.includes('payment-method') ? <FaCheck size={25} /> : 3}</div>
                    <hr className="w-full border-4 z-0 border-gray-200" />
                </div>
                <div className="text-xs text-gray-400 font-medium pt-2">Step 3</div>
                <div className={`${url.includes('order-summary') ? `text-[#1487ff]` : `text-gray-400`} font-bold`}>Order Summary</div>
            </div>
            <div className="w-[25%]">
                <div className="flex relative">

                    <div className={`flex items-center justify-center rounded-[100%] w-[50px] h-[50px] z-10 px-4 py-2 text-center ${url.includes('payment-method') ? `bg-[#f3f3f3] text-black` : !url.includes('payment-method') ? `bg-[#f3f3f3] text-black` : `bg-blue-500 text-white`} text-[20px]`}>4</div>

                </div>
                <div className="text-xs text-gray-400 font-medium pt-2">Step 4</div>
                <div className={`${url.includes('payment-method') ? `text-[#1487ff]` : `text-gray-400`} font-bold`}>Payment Method</div>
            </div>
        </div>
    )
}