import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AgentRegisterState } from "./agent-register-state";
import Validations from "@/types/validations";
import { ValidationType } from "@/models/validation-response";
import { RequestStatus } from "@/models/result";

export const initialState: AgentRegisterState = {
    withToken: false,
    businessName: { value: '', error: '' },
    businessNature: { value: '', error: '' },
    firstName: { value: '', error: '' },
    lastName: { value: '', error: '' },
    email: { value: '', error: '' },
    phoneNumber: { value: '', error: '' },
    password: { value: '', error: '' },
    confirmPassword: { value: '', error: '' },
    valid: false,
    getCompanyDataByInvitationStatus: RequestStatus.WAITING,
    registerAgentStatus: RequestStatus.WAITING,
    status: "waiting",
}
export const agentRegisterSlice = createSlice({
    name: "agentRegister",
    initialState,
    reducers: {
        getCompanyDataByInvitationLoaded: (state: AgentRegisterState) => {
            return {
                ...state,
                getCompanyDataByInvitationStatus: RequestStatus.IN_PROGRESS
            }
        },
        getCompanyDataByInvitationSuccess: (state: AgentRegisterState, action: PayloadAction<any>) => {
            console.log('action payload', action.payload)
            return {
                ...state,
                businessName: {
                    value: action.payload.companyName,
                },
                firstName: {
                    value: action.payload.firstName,
                },
                lastName: {
                    value: action.payload.lastName,
                },
                email: {
                    value: action.payload.email
                }
            }
        },
        registerAgentLoaded: (state: AgentRegisterState) => {
            return {
                ...state,
                registerAgentStatus: RequestStatus.IN_PROGRESS
            }
        },
        registerAgentSuccess: (state: AgentRegisterState) => {
            return {
                ...state,
                registerAgentStatus: RequestStatus.SUCCESS
            }
        },

        passwordChanged: (state: AgentRegisterState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validatePassword = validation.passwordValid(action.payload)
            return {
                ...state,
                password: {
                    value: action.payload,
                    valid: validatePassword.status == ValidationType.VALID,
                    error: validatePassword.errorText
                }
            }
        },
        confirmPassworChanged: (state: AgentRegisterState, action: PayloadAction<{
            confirmPassword: string,
            password: string,
        }>) => {
            const validation = new Validations()
            const validateConfirmPassword = validation.confirmPasswordValid(action.payload.confirmPassword, action.payload.password)
            return {
                ...state,
                confirmPassword: {
                    value: action.payload.confirmPassword,
                    valid: validateConfirmPassword.status == ValidationType.VALID,
                    error: validateConfirmPassword.errorText
                }
            }
        },
    }
})

export const {
    confirmPassworChanged,
    passwordChanged, getCompanyDataByInvitationLoaded,
    getCompanyDataByInvitationSuccess, registerAgentLoaded,
    registerAgentSuccess
} = agentRegisterSlice.actions
export default agentRegisterSlice.reducer