import PasswordFieldInput from "@/app/[locale]/_components/password-field-input";
import TextFieldInput from "@/app/[locale]/_components/text-field-input";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { businessNameChanged, businessNatureChanged, confirmPassworChanged, emailChanged, firstNameChanged, lastNameChanged, passwordChanged, phoneNumberChanged, signUpClicked } from "../_redux/register-slice";
import { useAppDispatch } from "@/app/_hooks/redux_hooks";
import { accountContainer } from "@/inversify/inversify.config";
import { AccountRepository } from "@/repositories/account-repository";
import { TYPES } from "@/inversify/types";
import { register } from "../_redux/register-thunk";

export default function Form() {
    const state = useSelector((state: RootState) => state.register)
    const accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
    const dispatch = useAppDispatch()
    return (
        <>
            <div className="bg-white shadow-md py-[30px] px-[25px] w-full rounded-md">
                <div>
                    <h1 className="text-[35px] text-primary-dark font-bold">Agent Sign Up</h1>
                </div>
                <div>
                    <TextFieldInput label={"Business Name"} value={state.businessName.value} onChange={(e) => { dispatch(businessNameChanged(e.target.value)) }} errorText={state.businessName.error} type={"text"} />
                    <TextFieldInput label={"Nature of Business"} value={state.businessNature.value} onChange={(e) => { dispatch(businessNatureChanged(e.target.value)) }} errorText={state.businessNature.error} type={"text"} />
                    <div className="h-24 max-h-24 flex flex-col">
                        <label className="text-base font-medium text-zinc-500 ">Company Owner</label>
                        <div className="flex items-center gap-2 my-2">
                            <TextFieldInput label={""} errorTextClassName='absolute text-xs -top-4' className={"w-full"} placeholder={"First name"} value={state.firstName.value} onChange={(e) => { dispatch(firstNameChanged(e.target.value)) }} errorText={state.firstName.error} type={"text"} />
                            <TextFieldInput label={""} errorTextClassName='absolute text-xs -top-4' className={"w-full"} placeholder={"Last name"} value={state.lastName.value} onChange={(e) => { dispatch(lastNameChanged(e.target.value)) }} errorText={state.lastName.error} type={"text"} />
                        </div>
                    </div>
                    <TextFieldInput label={"Email Address"} value={state.email.value} onChange={(e) => { dispatch(emailChanged(e.target.value)) }} errorText={state.email.error} type={"text"} />
                    <TextFieldInput label={"Phone Number"} value={state.phoneNumber.value} onChange={(e) => { dispatch(phoneNumberChanged(e.target.value)) }} errorText={state.phoneNumber.error} type={"text"} />
                    {/* <PasswordFieldInput label="Password" value={state.password.value} onChange={(e) => { dispatch(passwordChanged(e.target.value)) }} errorText={state.password.error} show={state.password.show} />
                    <PasswordFieldInput label="Confirm Password" value={state.confirmPassword.value} onChange={(e) => { dispatch(confirmPassworChanged({ confirmPassword: e.target.value, password: state.password.value })) }} errorText={state.confirmPassword.error} show={state.password.show} /> */}
                </div>
                <div className="w-full mt-8">
                    <button
                        className="w-full bg-primary text-white py-2 rounded-sm"
                        onClick={() => {
                            dispatch(signUpClicked('clicked'))
                            dispatch(register(accountRepository))
                        }}>
                        Sign up
                    </button>
                </div>
            </div >
        </>
    )
}