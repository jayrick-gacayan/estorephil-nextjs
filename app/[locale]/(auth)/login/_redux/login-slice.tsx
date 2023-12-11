import { RequestStatus } from "@/models/result";
import { LoginState } from "./login-state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState: LoginState = {
    email: {
        value: '',
    },
    password: {
        value: '',
    },
    requestStatus: RequestStatus.WAITING
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginLoaded: (state: LoginState) => {
            return {
                ...state,
                requestStatus: RequestStatus.IN_PROGRESS
            }
        },
        emailChanged: (state: LoginState, action: PayloadAction<string>) => {
            return {
                ...state,
                email: {
                    value: action.payload.trim()
                }
            }
        },
        passwordChanged: (state: LoginState, action: PayloadAction<string>) => {
            return {
                ...state,
                password: {
                    value: action.payload.trim()
                }
            }
        },
        loginSuccess: (state: LoginState) => {
            return {
                ...state,
                requestStatus: RequestStatus.SUCCESS
            }
        },
        loginFailed: (state: LoginState) => {
            return {
                ...state,
                requestStatus: RequestStatus.FAILURE
            }
        }
    }
})
export const {
    loginLoaded,
    emailChanged, passwordChanged
    , loginSuccess, loginFailed
} = loginSlice.actions
export default loginSlice.reducer