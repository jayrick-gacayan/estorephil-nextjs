import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { StaffAddState } from "./staff-add-state"
import { ValidationStatus } from "@/models/validation-response"
import Validations from "@/types/validations"



export const initialState: StaffAddState = {
    photo: "",
    firstName: {
        value: '',
        error: ''
    },
    lastName: {
        value: '',
        error: ''
    },
    email: {
        value: '',
        error: ''
    },
    role: {
        value: '',
        error: ''
    }
}
export const staffAddSlice = createSlice({
    name: "staffAdd",
    initialState,
    reducers: {
        firstNameChanged: (state: StaffAddState, action: PayloadAction<string>) => {
            var validation = new Validations()
            var validationResponse = validation.isValidName({ name: action.payload, nameColumn: 'first name' })
            console.log('first name changed dispatched', action.payload, validationResponse)
            return {
                ...state,
                firstName: {
                    value: action.payload,
                    valid: validationResponse.status == ValidationStatus.VALID,
                    error: validationResponse.errorText
                }
            }
        },
        lastNameChanged: (state: StaffAddState, action: PayloadAction<string>) => {
            var validation = new Validations()
            var validationResponse = validation.isValidName({ name: action.payload, nameColumn: 'last name' })
            return {
                ...state,
                lastName: {
                    value: action.payload,
                    valid: validationResponse.status == ValidationStatus.VALID,
                    error: validationResponse.errorText
                }
            }
        },
        emailChanged: (state: StaffAddState, action: PayloadAction<string>) => {
            var validation = new Validations()
            var validationResponse = validation.isEmailValid(action.payload)
            return {
                ...state,
                email: {
                    value: action.payload,
                    valid: validationResponse.status == ValidationStatus.VALID,
                    error: validationResponse.errorText
                }
            }
        },
    }
})

export const {
    emailChanged,
    firstNameChanged,
    lastNameChanged
} = staffAddSlice.actions

export default staffAddSlice.reducer