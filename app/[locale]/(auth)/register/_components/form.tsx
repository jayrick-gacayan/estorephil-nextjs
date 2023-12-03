import PasswordFieldInput from "@/app/[locale]/_components/password-field-input";
import TextFieldInput from "@/app/[locale]/_components/text-field-input";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { businessNameChanged, businessNatureChanged, confirmPassworChanged, emailChanged, fullNameChanged, passwordChanged, phoneNumberChanged, signUpClicked } from "../_redux/register-slice";

export default function Form() {
    const state = useSelector((state: RootState) => state.register)
    const dispatch = useDispatch()
    return (
        <>
            <div className="bg-white shadow-md py-[30px] px-[25px] w-full rounded-md">
                <div>
                    <h1 className="text-[35px] text-primary-dark font-bold">Agent Sign Up</h1>
                </div>
                <div>
                    <TextFieldInput label={"Business Name"} value={state.businessName.value} onChange={(e) => { dispatch(businessNameChanged(e.target.value)) }} errorText={state.businessName.error} type={"text"} />
                    <TextFieldInput label={"Nature of Business"} value={state.businessNature.value} onChange={(e) => { dispatch(businessNatureChanged(e.target.value)) }} errorText={state.businessNature.error} type={"text"} />
                    <TextFieldInput label={"Full Name"} value={state.fullName.value} onChange={(e) => { dispatch(fullNameChanged(e.target.value)) }} errorText={state.fullName.error} type={"text"} />
                    <TextFieldInput label={"Email Address"} value={state.email.value} onChange={(e) => { dispatch(emailChanged(e.target.value)) }} errorText={state.email.error} type={"text"} />
                    <TextFieldInput label={"Phone Number"} value={state.phoneNumber.value} onChange={(e) => { dispatch(phoneNumberChanged(e.target.value)) }} errorText={state.phoneNumber.error} type={"text"} />
                    <PasswordFieldInput label="Password" value={state.password.value} onChange={(e) => { dispatch(passwordChanged(e.target.value)) }} errorText={state.password.error} show={state.password.show} />
                    <PasswordFieldInput label="Confirm Password" value={state.confirmPassword.value} onChange={(e) => { dispatch(confirmPassworChanged({ confirmPassword: e.target.value, password: state.password.value })) }} errorText={state.confirmPassword.error} show={state.password.show} />
                </div>
                <div className="w-full">
                    <button className="w-full bg-primary text-white py-2 rounded-sm" onClick={() => dispatch(signUpClicked('clicked'))}>Sign up</button>
                </div>
            </div>
        </>
    )
}