'use client'

import { useTranslations } from "next-intl"
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa"

export default function Form() {
    const translate = useTranslations()
    return (
        <>
            <div className="bg-white rounded-md w-[350px] shadow-sm">
                <div className="bg-[#3a3f51] rounded-sm p-4 text-white flex items-center justify-center text-[25px]">{translate("agent")}</div>
                <div className="flex flex-col items-center justify-center px-8 py-2">
                    <div className="mb-8">{translate("signIn")}</div>

                    <div className="w-full my-2 flex items-center relative">
                        <input className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `}
                            placeholder="Enter email"
                            type="text"
                        />
                        <div className={`absolute right-2`}>
                            {/* <FaEnvelope color="gray" /> */}
                        </div>
                    </div>
                    <div className="w-full my-2 flex items-center relative">
                        <input className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `}
                            placeholder="Enter password"
                            type="password"
                        />
                        <div className={`absolute right-2`}>
                            {/* <FaLock color="gray" /> */}
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-2">
                        <div className="flex items-center gap-2">
                            <input className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `}
                                type="checkbox"
                            />
                            <div className={`text-xs text-gray-400 whitespace-nowrap`}>
                                {translate('rememberMe')}
                            </div>
                        </div>
                        <div className="text-gray-400 text-xs font-semibold hover:underline hover:cursor-pointer">
                            {translate('forgotPassword?')}
                        </div>
                    </div>
                </div>
                <div className="px-8 mb-2 flex flex-col gap-2">
                    <div className="my-2">
                        <button className="w-full bg-primary rounded-sm text-white py-2">
                            {translate("login")}
                        </button>
                    </div>
                    <div className="">
                        <button className="text-gray-400 w-full text-center">
                            {translate("needToSignUp?")}
                        </button>
                    </div>
                    <div className="my-2">
                        <button className="bg-white w-full text-slate-800 border-gray-200 rounded-sm border-[1.5px] py-2">
                            {translate("registerNow")}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}