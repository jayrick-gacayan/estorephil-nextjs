import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RegisterState } from "./register-state"
import Validations from "@/types/validations"
import { ValidationType } from "@/models/validation-response"
import { error } from "console"



export const initialState: RegisterState = {
    businessName: {
        value: '',
    },
    businessNature: {
        value: '',
    },
    firstName: {
        value: '',
    },
    lastName: {
        value: '',
    },
    email: {
        value: '',
    },
    phoneNumber: {
        value: '',
    },
    password: {
        value: '',
        show: false
    },
    confirmPassword: {
        value: '',
        show: false,
    },
    status: 'waiting',
    valid: false
}
export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        businessNameChanged: (state: RegisterState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateBusinessName = validation.isEmpty(action.payload, 'business name')
            return {
                ...state,
                businessName: {
                    value: action.payload,
                    valid: validateBusinessName.status == ValidationType.VALID,
                    error: validateBusinessName.errorText,
                }
            }

        },
        businessNatureChanged: (state: RegisterState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateBusinessNature = validation.isEmpty(action.payload, 'business nature')
            return {
                ...state,
                businessNature: {
                    value: action.payload,
                    valid: validateBusinessNature.status == ValidationType.VALID,
                    error: validateBusinessNature.errorText,
                }
            }
        },
        firstNameChanged: (state: RegisterState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateFullName = validation.isValidName({ name: action.payload, nameColumn: 'first name' })
            return {
                ...state,
                firstName: {
                    value: action.payload,
                    valid: validateFullName.status == ValidationStatus.VALID,
                    error: validateFullName.errorText
                }
            }
        },
        lastNameChanged: (state: RegisterState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateFullName = validation.isValidName({ name: action.payload, nameColumn: 'last name' })
            return {
                ...state,
                lastName: {
                    value: action.payload,
                    valid: validateFullName.status == ValidationType.VALID,
                    error: validateFullName.errorText
                }
            }
        },
        emailChanged: (state: RegisterState, action: PayloadAction<string>) => {
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
        phoneNumberChanged: (state: RegisterState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validatePhoneNumber = validation.isValidPhoneNumber(action.payload)
            return {
                ...state,
                phoneNumber: {
                    value: action.payload,
                    valid: validatePhoneNumber.status == ValidationType.VALID,
                    error: validatePhoneNumber.errorText
                }
            }
        },
        passwordChanged: (state: RegisterState, action: PayloadAction<string>) => {
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
        confirmPassworChanged: (state: RegisterState, action: PayloadAction<{
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
        signUpClicked: (state: RegisterState, action) => {
            return {
                ...state,
                status: 'success'
            }
        }
    },
})

export const {
    businessNameChanged,
    businessNatureChanged, confirmPassworChanged,
    emailChanged, firstNameChanged, lastNameChanged, passwordChanged, phoneNumberChanged,
    signUpClicked
} = registerSlice.actions

export default registerSlice.reducer