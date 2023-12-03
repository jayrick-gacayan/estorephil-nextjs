'use client'

import Image from "next/image"

export default function HeaderInfo() {
    return (
        <>
            <div className="flex items-center w-full justify-between border-b-[5px] border-[#041D60] py-[23px]">
                <div className="flex items-center gap-4">
                    <div>
                        <Image alt='' src='https://janondras.files.wordpress.com/2020/11/agent.jpg' height={125} width={125} />
                    </div>
                    <div className="">
                        <div><h1 className="text-primary-dark text-[25px] font-semibold">Non Pulvinar</h1></div>
                        <div><p className="text-slate-800 text-[24px] font-medium">403-534-2342</p></div>
                        <div>
                            <p className="text-slate-800 text-[24px] font-medium">
                                3482 Port Washington Road Arrowwood Alberta T0L 0B0
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center h-[96px] w-[316px] border-4 border-primary-dark px-[55px] py-[19px]">
                        <h1 className="text-[43px] text-primary-dark font-bold">SHIPPING</h1>
                    </div>
                </div>

            </div>
        </>
    )
}