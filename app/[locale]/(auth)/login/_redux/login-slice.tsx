import { LoginState } from "./login-state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { textInputFieldValue } from "@/types/helpers/field-methods";
import { RequestStatus } from "@/types/enums/request-status";
import { ValidationResponse } from "@/types/props/validation-response";
import { getValidationResponse } from "@/types/helpers/validation_helpers";
import { ValidationType } from "@/types/enums/validation-type";

export const initialState: LoginState = {
    email: textInputFieldValue<string>(''),
    password: textInputFieldValue<string>(''),
    requestStatus: RequestStatus.NONE,
    message: ''
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginRequestStatusSet: (state: LoginState, action: PayloadAction<RequestStatus>) => {
            return { ...state, requestStatus: action.payload };
        },
        emailChanged: (state: LoginState, action: PayloadAction<string>) => {
            return { ...state, email: textInputFieldValue(action.payload.trim()) }
        },
        passwordShown: (state: LoginState) => {
            return {
                ...state,
                password: state.password.show ? textInputFieldValue(state.password.value) : {
                    ...state.password,
                    show: true
                }
            }
        },
        passwordChanged: (state: LoginState, action: PayloadAction<string>) => {
            return { ...state, password: textInputFieldValue(action.payload.trim()) }
        },
        loginFormSubmitted: (state: LoginState) => {
            let emailError: ValidationResponse = getValidationResponse<string>(state.email.value, 'Email', ['required', 'email']);
            let passwordError: ValidationResponse = getValidationResponse<string>(state.password.value, 'Password', ['required']);

            return {
                ...state,
                message: '',
                email: { ...state.email, ...emailError },
                password: { ...state.password, ...passwordError },
                requestStatus: emailError.status === ValidationType.VALID ||
                    passwordError.status === ValidationType.VALID ?
                    RequestStatus.IN_PROGRESS : RequestStatus.FAILURE
            }
        },
        loginMessagePrinted: (state: LoginState, action: PayloadAction<string>) => {
            return {
                ...state,
                message: action.payload
            }
        }
    }
})
export const {
    loginRequestStatusSet,
    emailChanged,
    passwordChanged,
    loginFormSubmitted,
    passwordShown,
    loginMessagePrinted,
} = loginSlice.actions
export default loginSlice.reducer