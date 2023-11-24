'use client'
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";
import Form from "../_components/form";

export default function Content() {
    const state = useSelector((state: RootState) => state.register)
    return (
        <>
            {state.status === 'waiting' ? (
                <div className="flex items-center w-[80%] justify-between h-[90%]">
                    <div className="flex flex-col justify-between">
                        <div className="my-4">
                            <h1 className="text-[70px] text-primary-dark font-bold">Become an Agent</h1>
                            <p className="text-[25px] text-primary-dark font-medium">
                                You get &#37; commission for every successful customer purchase
                            </p>
                        </div>
                        <div className="my-4">
                            <Image
                                src='register-agent.svg'
                                height={457}
                                width={561}
                                alt=''
                            />
                        </div>
                    </div>

                    <div>
                        {!state.valid && <Form />}
                    </div>
                </div>)
                : state.status == 'success' &&
                (
                    <div className="flex flex-col items-center justify-center gap-4 h-[90vh]">
                        <div className="text-center">
                            <Image
                                src={'/thank-you.png'}
                                height={357}
                                width={373}
                                alt="success"
                            />
                        </div>
                        <div className="text-center">
                            <h1 className="text-[#2F353D] text-[56px] font-semibold">Thank you for signing up</h1>
                            <p className="text-[#2F353D] text-[20px] font-normal">An email will be sent to you once we&#39;re done checking the details you have provided.</p>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <button className="text-white bg-primary py-2 w-[60%]">Home</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}