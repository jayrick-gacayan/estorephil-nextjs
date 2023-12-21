import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SenderState } from "./sender-state";
import Validations from "@/types/validations";
import { ValidationType } from "@/models/validation-response";
import { RequestStatus } from "@/types/enums/request-status";


export const initialState: SenderState = {
    firstName: {
        value: '',
        error: '',
    },
    lastName: {
        value: '',
        error: '',
    },
    address1: {
        value: '',
        error: '',
    },
    address2: {
        value: '',
        error: '',
    },
    city: {
        value: '',
        error: '',
    },
    province: {
        value: '',
        error: '',
    },
    zipCode: {
        value: '',
        error: '',
    },
    country: {
        value: '',
        error: '',
    },
    phoneNumber: {
        value: '',
        error: '',
    },
    mobileNumber: {
        value: '',
        error: '',
    },
    emailAddress: {
        value: '',
        error: '',
    },
    valid: false,
    requestStatus: RequestStatus.NONE
}
export const senderSlice = createSlice({
    name: "sender",
    initialState,
    reducers: {
        requestStatusSet: (state: SenderState, action: PayloadAction<RequestStatus>) => {
            return {
                ...state, requestStatus: action.payload
            }
        },
        validateSender: (state: SenderState) => {
            var validation = new Validations()
            const validateFirstName = validation.isValidName({ name: state.firstName.value, nameColumn: 'first name' });
            const validateLastName = validation.isValidName({ name: state.lastName.value, nameColumn: 'last name' });
            const validateEmail = validation.isEmailValid(state.emailAddress.value);
            const validateAddress1 = validation.isEmpty(state.address1.value, 'address')
            const validateCity = validation.isEmpty(state.city.value, 'city')
            const validateZipCode = validation.isEmpty(state.zipCode.value, 'zip code')
            const validateCountry = validation.isEmpty(state.country.value, 'country')
            const isValid = validateFirstName.status == ValidationType.VALID
                && validateLastName.status == ValidationType.VALID
                && validateEmail.status == ValidationType.VALID
                && validateAddress1.status == ValidationType.VALID
                && validateCity.status == ValidationType.VALID
                && validateZipCode.status == ValidationType.VALID
                && validateCountry.status == ValidationType.VALID

            return {
                ...state,
                valid: isValid,
                requestStatus: isValid ? RequestStatus.SUCCESS : RequestStatus.FAILURE,
                firstName: {
                    ...state.firstName,
                    valid: validateFirstName.status === ValidationType.VALID,
                    error: validateFirstName.errorText,
                },
                lastName: {
                    ...state.lastName,
                    valid: validateLastName.status === ValidationType.VALID,
                    error: validateLastName.errorText,
                },
                emailAddress: {
                    ...state.emailAddress,
                    valid: validateEmail.status === ValidationType.VALID,
                    error: validateEmail.errorText,
                },
                address1: {
                    ...state.address1,
                    valid: validateAddress1.status === ValidationType.VALID,
                    error: validateAddress1.errorText,
                },
                city: {
                    ...state.city,
                    valid: validateCity.status === ValidationType.VALID,
                    error: validateCity.errorText,
                },
                zipCode: {
                    ...state.zipCode,
                    valid: validateZipCode.status === ValidationType.VALID,
                    error: validateZipCode.errorText,
                },
                country: {
                    ...state.country,
                    valid: validateCountry.status === ValidationType.VALID,
                    error: validateCountry.errorText,
                },
            }
        },
        firstNameChanged: (state: SenderState, action: PayloadAction<string>) => {
            var validation = new Validations()
            var validationResponse = validation.isValidName({ name: action.payload, nameColumn: 'first name' })
            return {
                ...state,
                firstName: {
                    value: action.payload,
                    valid: validationResponse.status == ValidationType.VALID,
                    error: validationResponse.errorText
                }
            }
        },
        lastNameChanged: (state: SenderState, action: PayloadAction<string>) => {
            var validation = new Validations()
            var validationResponse = validation.isValidName({ name: action.payload, nameColumn: 'last name' })
            return {
                ...state,
                lastName: {
                    value: action.payload,
                    valid: validationResponse.status == ValidationType.VALID,
                    error: validationResponse.errorText
                }
            }
        },
        emailChanged: (state: SenderState, action: PayloadAction<string>) => {
            var validation = new Validations()
            var validationResponse = validation.isEmailValid(action.payload)
            return {
                ...state,
                emailAddress: {
                    value: action.payload,
                    valid: validationResponse.status == ValidationType.VALID,
                    error: validationResponse.errorText
                }
            }
        },
        address1Changed: (state: SenderState, action: PayloadAction<string>) => {
            return {
                ...state,
                address1: {
                    value: action.payload,
                }
            }
        },
        address2Changed: (state: SenderState, action: PayloadAction<string>) => {
            return {
                ...state,
                address2: {
                    value: action.payload,
                }
            }
        },
        cityChanged: (state: SenderState, action: PayloadAction<string>) => {
            return {
                ...state,
                city: {
                    value: action.payload,
                }
            }
        },
        provinceChanged: (state: SenderState, action: PayloadAction<string>) => {
            return {
                ...state,
                province: {
                    value: action.payload,
                }
            }
        },
        zipCodeChanged: (state: SenderState, action: PayloadAction<string>) => {
            return {
                ...state,
                zipCode: {
                    value: action.payload,
                }
            }
        },
        phoneNumberChanged: (state: SenderState, action: PayloadAction<string>) => {
            return {
                ...state,
                phoneNumber: {
                    value: action.payload,
                }
            }
        },
        mobileNumberChanged: (state: SenderState, action: PayloadAction<string>) => {
            return {
                ...state,
                mobileNumber: {
                    value: action.payload,
                }
            }
        },
        countryChanged: (state: SenderState, action: PayloadAction<string>) => {
            return {
                ...state,
                country: {
                    value: action.payload,
                }
            }
        },

    }
})

export const {
    firstNameChanged,
    lastNameChanged, emailChanged,
    validateSender, address1Changed, address2Changed,
    cityChanged, countryChanged, mobileNumberChanged, phoneNumberChanged,
    provinceChanged, zipCodeChanged,
    requestStatusSet,
} = senderSlice.actions
export default senderSlice.reducer