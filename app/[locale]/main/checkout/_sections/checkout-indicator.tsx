"use client"

import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

export default function CheckoutIndicator() {
    const state = useSelector((state: RootState) => state.checkout)
    return (
        <>
            <div className="flex items-center justify-center p-4 w-[884px] m-auto">
                <div className="w-[25%]">
                    <div className="flex justify-center items-center relative">
                        <div className={`rounded-full w-[50px] px-4 py-2 text-center ${state.checkoutProgress  == 0 ? `bg-blue-500 text-white` : `bg-[#f3f3f3] text-black`} text-[20px]`}>1</div>
                        <hr className="w-full border-4 z-0 border-gray-200" />
                    </div>
                    <div className="text-xs text-gray-400 font-medium pt-2"> Step 1</div>
                    <div className={`${state.checkoutProgress === 0 ? `text-[#1487ff]` : `text-gray-400`} font-bold`}>Sender Info</div>
                </div>
                <div className="w-[25%]">
                    <div className="flex justify-center items-center relative">
                        <div className={`rounded-full w-[50px] px-4 py-2 text-center ${state.checkoutProgress < 25 ? `bg-[#f3f3f3] text-black` : `bg-blue-500 text-white`} text-[20px]`}>2</div>
                        <hr className="w-full border-4 z-0 border-gray-200" />
                    </div>
                    <div className="text-xs text-gray-400 font-medium pt-2">Step 2</div>
                    <div className={`${state.checkoutProgress === 25 ? `text-[#1487ff]` : `text-gray-400`} font-bold`}>Receiver Info</div>
                </div>
                <div className="w-[25%]">
                    <div className="flex justify-center items-center relative">
                        <div className={`rounded-full w-[50px] px-4 py-2 text-center ${state.checkoutProgress < 50 ? `bg-[#f3f3f3] text-black` : `bg-blue-500 text-white`} text-[20px]`}>3</div>
                        <hr className="w-full border-4 z-0 border-gray-200" />
                    </div>
                    <div className="text-xs text-gray-400 font-medium pt-2">Step 3</div>
                    <div className={`${state.checkoutProgress === 50 ? `text-[#1487ff]` : `text-gray-400`} font-bold`}>Order Summary</div>
                </div>
                <div className="w-[25%]">
                    <div className="flex relative">

                        <div className={`rounded-full w-[50px] z-10 px-4 py-2 text-center ${state.checkoutProgress < 25 ? `bg-[#f3f3f3] text-black` : `bg-blue-500 text-white`} text-[20px]`}>4</div>

                    </div>
                    <div className="text-xs text-gray-400 font-medium pt-2">Step 4</div>
                    <div className={`${state.checkoutProgress === 75 ? `text-[#1487ff]` : `text-gray-400`} font-bold`}>Payment Method</div>
                </div>
            </div>
        </>
    )
}