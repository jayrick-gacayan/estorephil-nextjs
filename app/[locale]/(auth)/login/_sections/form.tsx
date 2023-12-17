'use client'

import { accountContainer } from "@/inversify/inversify.config";
import { TYPES } from "@/inversify/types";
import { RootState, store } from "@/redux/store";
import { AccountRepository } from "@/repositories/account-repository";
import { useTranslations } from "next-intl"
import { FaEnvelope, FaLock } from "react-icons/fa"
import { login } from "../_redux/login-thunk";
import { useDispatch, useSelector } from "react-redux";
import { emailChanged, passwordChanged } from "../_redux/login-slice";
import { RequestStatus } from "@/models/result";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/[locale]/main/_components/loading";
import LoginSuccess from "./login-success";
import LoginFailed from "./login-failed";
import { useSession } from "next-auth/react";

export default function Form() {
    const translate = useTranslations()
    const accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository)
    const dispatch = useDispatch()
    const loginStatus = useSelector((state: RootState) => state.login).requestStatus
    const router = useRouter();
    const { data: sessionData } = useSession()
    useEffect(() => {
        // If there is an active session, redirect the user to another page
        if (!!sessionData) {
            router.push("/"); // replace with your desired redirect path
        }
    }, [sessionData, router]);
    return (
        <>
            {
                (<>
                    {
                        loginStatus == RequestStatus.WAITING || loginStatus == RequestStatus.FAILURE || loginStatus == RequestStatus.IN_PROGRESS
                            ? (<div className="block">
                                <div className="bg-white rounded-md w-[350px] shadow-sm">
                                    <div className="bg-[#3a3f51] rounded-sm p-4 text-white flex items-center justify-center text-[25px]">
                                        {translate("agent")}
                                    </div>
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        store.dispatch(login(accountRepository))
                                    }}>
                                        <div className="flex flex-col items-center justify-center px-8 py-2">
                                            <div className="mb-8">{translate("signIn")}</div>
                                            <div className="w-full my-2 flex items-center relative">
                                                <input className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `}
                                                    placeholder="Enter email"
                                                    type="text"
                                                    onChange={(e) => { dispatch(emailChanged(e.target.value)) }}
                                                />
                                                <div className={`absolute right-2`}>
                                                    {/* <FaEnvelope color="gray" /> */}
                                                </div>
                                            </div>
                                            <div className="w-full my-2 flex items-center relative">
                                                <input className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `}
                                                    placeholder="Enter password"
                                                    type="password"
                                                    onChange={(e) => { dispatch(passwordChanged(e.target.value)) }}
                                                />
                                                <div className={`absolute right-2`}>
                                                    {/* <FaLock color="gray" /> */}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between w-full my-2">
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `}
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
                                                <button
                                                    className="w-full bg-primary rounded-sm text-white py-2 flex items-center justify-center"
                                                    type="submit"
                                                >
                                                    {loginStatus == RequestStatus.IN_PROGRESS
                                                        ? <Loading /> : translate("login")}
                                                </button>
                                            </div>
                                            <div className="">
                                                <button className="text-gray-400 w-full text-center">
                                                    {translate("needToSignUp?")}
                                                </button>
                                            </div>
                                            <div className="my-2">
                                                <button
                                                    className="bg-white w-full text-slate-800 border-gray-200 rounded-sm border-[1.5px] py-2"
                                                    onClick={(e) => {
                                                        store.dispatch(login(accountRepository))
                                                    }}
                                                >
                                                    {translate("registerNow")}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {loginStatus == RequestStatus.FAILURE && <div className="flex items-center justify-center text-red-500">invalid credentials</div>}
                            </div>
                            )
                            : loginStatus == RequestStatus.SUCCESS && <LoginSuccess />
                    }
                </>
                )
            }
        </>
    )
}