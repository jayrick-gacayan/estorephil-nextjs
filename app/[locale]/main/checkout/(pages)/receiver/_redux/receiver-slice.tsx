import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Validations from "@/types/validations";
import { ValidationType } from "@/models/validation-response";
import { ReceiverState } from "./receiver-state";
import { SenderState } from "../../sender/_redux/sender-state";
import { RequestStatus } from "@/types/enums/request-status";

export const initialState: ReceiverState = {
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
    deliveryNotes: {
        value: '',
        error: '',
    },
    valid: false,

    requestStatus: RequestStatus.NONE
}
export const receiverSlice = createSlice({
    name: "receiver",
    initialState,
    reducers: {
        checkoutReceiverRequestStatusSet: (state: ReceiverState, action: PayloadAction<RequestStatus>) => {
            return {
                ...state, requestStatus: action.payload
            }
        },
        validateReceiver: (state: ReceiverState) => {
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
            console.log('is valid: ', isValid)
            return {
                ...state,
                valid: isValid,
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
        firstNameChanged: (state: ReceiverState, action: PayloadAction<string>) => {
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
        lastNameChanged: (state: ReceiverState, action: PayloadAction<string>) => {
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
        emailChanged: (state: ReceiverState, action: PayloadAction<string>) => {
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
        address1Changed: (state: ReceiverState, action: PayloadAction<string>) => {
            return {
                ...state,
                address1: {
                    value: action.payload,
                }
            }
        },
        address2Changed: (state: ReceiverState, action: PayloadAction<string>) => {
            return {
                ...state,
                address2: {
                    value: action.payload,
                }
            }
        },
        cityChanged: (state: ReceiverState, action: PayloadAction<string>) => {
            return {
                ...state,
                city: {
                    value: action.payload,
                }
            }
        },
        provinceChanged: (state: ReceiverState, action: PayloadAction<string>) => {
            return {
                ...state,
                province: {
                    value: action.payload,
                }
            }
        },
        zipCodeChanged: (state: ReceiverState, action: PayloadAction<string>) => {
            return {
                ...state,
                zipCode: {
                    value: action.payload,
                }
            }
        },
        phoneNumberChanged: (state: ReceiverState, action: PayloadAction<string>) => {
            return {
                ...state,
                phoneNumber: {
                    value: action.payload,
                }
            }
        },
        mobileNumberChanged: (state: ReceiverState, action: PayloadAction<string>) => {
            return {
                ...state,
                mobileNumber: {
                    value: action.payload,
                }
            }
        },
        countryChanged: (state: ReceiverState, action: PayloadAction<string>) => {
            return {
                ...state,
                country: {
                    value: action.payload,
                }
            }
        },
        checkBoxReceiverInfoClicked: (state: ReceiverState, action: PayloadAction<{ isChecked: boolean, senderState: SenderState }>) => {
            const payload = action.payload
            return {
                ...state,
                firstName: {
                    value: payload.isChecked ? payload.senderState.firstName.value : ''
                },
                lastName: {
                    value: payload.isChecked ? payload.senderState.lastName.value : ''
                }
            }
        },
        checkBoxReceiverAddressClicked: (state: ReceiverState, action: PayloadAction<{ isChecked: boolean, senderState: SenderState }>,) => {
            const payload = action.payload
            return {
                ...state,
                address1: {
                    value: payload.isChecked ? payload.senderState.address1.value : ''
                },
                address2: {
                    value: payload.isChecked ? payload.senderState.address2.value : ''
                },
                city: {
                    value: payload.isChecked ? payload.senderState.city.value : ''
                },
                province: {
                    value: payload.isChecked ? payload.senderState.province.value : ''
                },
                zipCode: {
                    value: payload.isChecked ? payload.senderState.zipCode.value : ''
                },
                country: {
                    value: payload.isChecked ? payload.senderState.country.value : ''
                }
            }
        },
        checkBoxReceiverContactClicked: (state: ReceiverState, action: PayloadAction<{ isChecked: boolean, senderState: SenderState }>,) => {
            const payload = action.payload
            return {
                ...state,
                phoneNumber: {
                    value: payload.isChecked ? payload.senderState.phoneNumber.value : ''
                },
                mobileNumber: {
                    value: payload.isChecked ? payload.senderState.mobileNumber.value : ''
                },
                emailAddress: {
                    value: payload.isChecked ? payload.senderState.emailAddress.value : ''
                }
            }
        },
        receiverFormFilled: (state: ReceiverState, action: PayloadAction<any>) => {
            return {
                ...state,
                firstName: { ...state.firstName, value: action.payload.first_name },
                lastName: { ...state.firstName, value: action.payload.last_name },
                address1: { ...state.address1, value: action.payload.street },
                emailAddress: { ...state.emailAddress, value: action.payload.email },
                phoneNumber: { ...state.phoneNumber, value: action.payload.phone_number },
                city: { ...state.city, value: action.payload.city },
                province: { ...state.city, value: action.payload.province },
                zipCode: { ...state.zipCode, value: action.payload.postal_code },
                country: { ...state.country, value: action.payload.country },
                mobileNumber: { ...state.mobileNumber, value: action.payload.mobile_number }
            }
        }
    }
})

export const {
    firstNameChanged,
    lastNameChanged, emailChanged,
    address1Changed, address2Changed, cityChanged,
    countryChanged, mobileNumberChanged, phoneNumberChanged,
    provinceChanged, zipCodeChanged, checkBoxReceiverInfoClicked,
    validateReceiver, checkBoxReceiverAddressClicked, checkBoxReceiverContactClicked,
    checkoutReceiverRequestStatusSet, receiverFormFilled
} = receiverSlice.actions
export default receiverSlice.reducer