import { RequestStatus } from "@/models/result";
import { ForgotPasswordState } from "./forgot-password-state";
import Validations from "@/types/validations";
import { ValidationType } from "@/models/validation-response";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: ForgotPasswordState = {
    email: {
        value: ''
    },
    forgotPasswordStatus: RequestStatus.WAITING
}
export const forgotPasswordSlice = createSlice({
    name: "forgotPassword",
    initialState,
    reducers: {
        forgotPasswordLoaded: (state: ForgotPasswordState) => {
            return {
                ...state,
                forgotPasswordStatus: RequestStatus.IN_PROGRESS,
            }
        },
        forgotPasswordSuccess: (state: ForgotPasswordState) => {
            return {
                ...state,
                forgotPasswordStatus: RequestStatus.SUCCESS
            }
        },
        emailChanged: (state: ForgotPasswordState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateEmail = validation.isEmailValid(action.payload)
            return {
                ...state,
                email: {
                    value: action.payload,
                    valid: validateEmail.status == ValidationType.VALID,
                    error: validateEmail.errorText
                }
            }
        },
    }
})

export const {
    emailChanged, forgotPasswordLoaded, forgotPasswordSuccess
} = forgotPasswordSlice.actions
export default forgotPasswordSlice.reducer