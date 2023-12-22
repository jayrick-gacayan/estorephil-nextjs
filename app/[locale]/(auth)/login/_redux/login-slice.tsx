import { LoginState } from "./login-state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { textInputFieldValue } from "@/types/helpers/text-input-field-methods";
import { RequestStatus } from "@/types/enums/request-status";
import { ValidationResponse } from "@/types/props/validation-response";
import { getValidationResponse } from "@/types/helpers/validation_helpers";
import { ValidationType } from "@/types/enums/validation-type";

export const initialState: LoginState = {
    email: textInputFieldValue<string>(''),
    password: textInputFieldValue<string>(''),
    requestStatus: RequestStatus.NONE
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
        passwordChanged: (state: LoginState, action: PayloadAction<string>) => {
            return { ...state, password: textInputFieldValue(action.payload.trim()) }
        },
        loginFormSubmitted: (state: LoginState) => {
            let emailError: ValidationResponse = getValidationResponse<string>(state.email.value, 'Email', ['required', 'email']);
            let passwordError: ValidationResponse = getValidationResponse<string>(state.password.value, 'Password', ['required']);

            return {
                ...state,
                email: { ...state.email, ...emailError },
                password: { ...state.password, ...passwordError },
                requestStatus: emailError.status === ValidationType.VALID ||
                    passwordError.status === ValidationType.VALID ?
                    RequestStatus.IN_PROGRESS : RequestStatus.FAILURE
            }
        }
    }
})
export const {
    loginRequestStatusSet,
    emailChanged,
    passwordChanged,
    loginFormSubmitted
} = loginSlice.actions
export default loginSlice.reducer