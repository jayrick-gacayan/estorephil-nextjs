'use client'

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import TextFieldInput from "../_components/text-field-input";
import PasswordFieldInput from "../_components/password-field-input";
import { useEffect } from "react";
import { useAppDispatch } from "@/app/_hooks/redux_hooks";
import { useSearchParams } from "next/navigation";
import { getCompanyDataByInvitation, registerAgent } from "../_redux/agent-register-thunk";
import { accountContainer } from "@/inversify/inversify.config";
import { TYPES } from "@/inversify/types";
import { AccountRepository } from "@/repositories/account-repository";
import { signUpClicked } from "../../../register/_redux/register-slice";
import { passwordChanged, confirmPassworChanged } from "../_redux/agent-register-slice";
import { RequestStatus } from "@/models/result";
import Image from "next/image";
import { useRouter } from "next-intl/client";

export default function Form() {
    const router = useRouter();
    const state = useSelector((state: RootState) => state.agentRegister)
    const token = useSearchParams().get('token')
    const accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
    const registerAgentStatus = state.registerAgentStatus
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!!token) {
            console.log('token ', token)
            dispatch(getCompanyDataByInvitation(accountRepository, token))
        }
    }, []);
    return (
        <div className="bg-white shadow-md w-[45rem] rounded-md">
            <div className=" bg-[#3a3f51] w-full p-4">
                <h1 className="text-[30px] text-white font-medium text-center">Agent Sign Up</h1>
            </div>
            <div className="p-4 text-center">
                <p className="text-sm">Please enter the password that you will be using to sign-up as an agent.</p>
            </div>
            <div className="p-4">
                <TextFieldInput disabled={true} placeholder={"Company Name"} className="w-full" value={state.businessName.value} errorText={state.businessName.error} type={"text"} />
                <TextFieldInput disabled={true} className={"w-full "} placeholder={"First name"} value={state.firstName.value} errorText={state.firstName.error} type={"text"} />
                <TextFieldInput disabled={true} className={"w-full "} placeholder={"Last name"} value={state.lastName.value} errorText={state.lastName.error} type={"text"} />
                <TextFieldInput disabled={true} placeholder={'Email'} className="w-full" value={state.email.value} errorText={state.email.error} type={"text"} />
                <PasswordFieldInput placeholder={'Password'} className="w-full" value={state.password.value} onChange={(e) => { dispatch(passwordChanged(e.target.value)) }} errorText={state.password.error} show={state.password.show} />
                <PasswordFieldInput placeholder={'Confirm Password'} className="w-full" value={state.confirmPassword.value} onChange={(e) => { dispatch(confirmPassworChanged({ confirmPassword: e.target.value, password: state.password.value })) }} errorText={state.confirmPassword.error} show={state.password.show} />
            </div>
            <div className="w-full p-4">
                <button className="w-full bg-primary text-white py-2 rounded-sm" onClick={() => {
                    console.log('register button clicked')
                    dispatch(signUpClicked('clicked'))
                    dispatch(registerAgent(accountRepository, () => {
                        router.push('/login');
                    }))
                }}>Sign up</button>
            </div>
        </div>
    )
}