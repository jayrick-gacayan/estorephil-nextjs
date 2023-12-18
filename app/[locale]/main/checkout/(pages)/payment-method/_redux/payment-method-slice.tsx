import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { PaymentMethodState } from "./payment-method-state"
import Validations from "@/types/validations"
import { ValidationType } from "@/models/validation-response"
import { SenderState } from "../../sender/_redux/sender-state"
import { RequestStatus } from "@/types/enums/request-status"


export const initialState: PaymentMethodState = {
    card: {
        type: {
            value: '',
        },
        name: {
            value: '',
            error: '',
        },
        number: {
            value: '',
            error: '',
        },
        expiryDate: {
            value: '',
            error: '',
        },
        ccv: {
            value: '',
            error: '',
        }
    },
    firstName: {
        value: '',
        error: '',
    },
    lastName: {
        value: '',
        error: '',
    },
    billingAddress: {
        value: '',
        error: '',
    },
    contactNumber: {
        value: '',
        error: '',
    },
    emailAddress: {
        value: '',
        error: '',
    },
    requestStatus: RequestStatus.NONE
}
export const paymentMethodSlice = createSlice({
    name: "paymentMethod",
    initialState,
    reducers: {
        paymentMethodRequestStatusChanged: (state: PaymentMethodState, action: PayloadAction<RequestStatus>) => {
            return {
                ...state,
                requestStatus: action.payload
            }
        },
        selectPaymentMethod: (state: PaymentMethodState, action: PayloadAction<string>) => {
            return {
                ...state,
                card: {
                    ...state.card,
                    type: {
                        value: action.payload
                    }
                }
            }
        },
        cardHolderNameChanged: (state: PaymentMethodState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateName = validation.isValidName({ name: action.payload, nameColumn: 'name' })
            return {
                ...state,
                card: {
                    ...state.card,
                    name: {
                        value: action.payload,
                        valid: validateName.status == ValidationType.VALID,
                        error: validateName.errorText
                    }
                }
            }
        },
        cardNumberChanged: (state: PaymentMethodState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateCardNumber = validation.isCardNumberValid(action.payload, 'card number')
            return {
                ...state,
                card: {
                    ...state.card,
                    number: {
                        value: action.payload,
                        valid: validateCardNumber.status == ValidationType.VALID,
                        error: validateCardNumber.errorText
                    }
                }
            }
        },
        ccvChanged: (state: PaymentMethodState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateCCV = validation.isCcvValid(action.payload, 'ccv')
            return {
                ...state,
                card: {
                    ...state.card,
                    ccv: {
                        value: action.payload,
                        error: validateCCV.errorText,
                        valid: validateCCV.status == ValidationType.VALID
                    }
                }
            }
        },
        cardExpiryDateChanged: (state: PaymentMethodState, action: PayloadAction<any>) => {
            const validation = new Validations()
            const validateExpiry = validation.isExpiryDateValid(action.payload, 'date')
            console.log('date expiry: ', action.payload, validateExpiry.status, validateExpiry.errorText)
            return {
                ...state,
                card: {
                    ...state.card,
                    expiryDate: {
                        ...state.card.expiryDate,
                        value: action.payload,
                        valid: validateExpiry.status == ValidationType.VALID,
                        error: validateExpiry.errorText
                    }
                }
            }
        },
        firstNameChanged: (state: PaymentMethodState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateName = validation.isValidName({ name: action.payload, nameColumn: 'first name' })
            return {
                ...state,
                firstName: {
                    value: action.payload,
                    valid: validateName.status == ValidationType.VALID,
                    error: validateName.errorText
                }
            }
        },
        lastNameChanged: (state: PaymentMethodState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateName = validation.isValidName({ name: action.payload, nameColumn: 'last name' })
            return {
                ...state,
                lastName: {
                    value: action.payload,
                    valid: validateName.status == ValidationType.VALID,
                    error: validateName.errorText
                }
            }
        },
        billingAddressChanged: (state: PaymentMethodState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateBillingAddress = validation.isEmpty(action.payload, 'Billing address')
            return {
                ...state,
                billingAddress: {
                    value: action.payload,
                    valid: validateBillingAddress.status == ValidationType.VALID,
                    error: validateBillingAddress.errorText
                }
            }
        },
        contactNumberChanged: (state: PaymentMethodState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validatePhoneNumber = validation.isValidPhoneNumber(action.payload)
            return {
                ...state,
                contactNumber: {
                    value: action.payload,
                    valid: validatePhoneNumber.status == ValidationType.VALID
                }
            }
        },
        emailAddressChanged: (state: PaymentMethodState, action: PayloadAction<string>) => {
            const validation = new Validations()
            const validateEmail = validation.isEmailValid(action.payload)
            return {
                ...state,
                emailAddress: {
                    value: action.payload,
                    valid: validateEmail.status == ValidationType.VALID,
                    error: validateEmail.errorText
                }
            }
        },
        billingInformationCheckboxClicked: (state: PaymentMethodState, action: PayloadAction<{ isChecked: boolean, senderState: SenderState }>) => {
            const payload = action.payload
            return {
                ...state,
                firstName: {
                    value: payload.isChecked ? payload.senderState.firstName.value : ''
                },
                lastName: {
                    value: payload.isChecked ? payload.senderState.lastName.value : ''
                },
                billingAddress: {
                    value: payload.isChecked ? payload.senderState.address1.value : ''
                },
                contactNumber: {
                    value: payload.isChecked ? payload.senderState.mobileNumber.value : ''
                },
                emailAddress: {
                    value: payload.isChecked ? payload.senderState.emailAddress.value : ''
                }
            }
        }
    }
})

export const {
    selectPaymentMethod,
    cardExpiryDateChanged, cardHolderNameChanged,
    cardNumberChanged, ccvChanged, billingAddressChanged,
    contactNumberChanged, emailAddressChanged, firstNameChanged,
    lastNameChanged, billingInformationCheckboxClicked,
    paymentMethodRequestStatusChanged
} = paymentMethodSlice.actions

export default paymentMethodSlice.reducer