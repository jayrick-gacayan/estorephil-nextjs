import { ValidationResponse, ValidationStatus } from "@/models/validation-response"

export function isEmail({ email }: { email: string }) {
    var validationResponse: ValidationResponse = {
        status: ValidationStatus.NONE,
        errorText: ''
    }
    return validationResponse = email.length === 0 ? { status: ValidationStatus.EMPTY, errorText: 'this field is required' }
        : !(/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/.test(email)) ? { status: ValidationStatus.INVALID_FORMAT, errorText: 'invalid email input' }
            : { status: ValidationStatus.VALID, errorText: '' }
}
export function isValidPhoneNumber({ phoneNumber }: { phoneNumber: string }) {
    var validationResponse: ValidationResponse = {
        status: ValidationStatus.NONE,
        errorText: ''
    }
    return validationResponse = phoneNumber.length == 0 ? { status: ValidationStatus.EMPTY, errorText: 'this field is required' }
        : !(/^(?:\+65\d{8}|\+63\d{10})$/.test(phoneNumber)) ? { status: ValidationStatus.INVALID_FORMAT, errorText: 'invalid phone number' }
            : { status: ValidationStatus.VALID, errorText: '' }
}
export function isValidName({ name }: { name: string }) {
    var validationResponse: ValidationResponse = {
        status: ValidationStatus.NONE,
        errorText: ''
    }
    return validationResponse = name.length == 0 ? { status: ValidationStatus.EMPTY, errorText: ' this field is required' }
        : !(/^[A-Za-z\s]+$/.test(name)) ? { status: ValidationStatus.INVALID_FORMAT, errorText: 'invalid name input' }
            : { status: ValidationStatus.VALID, errorText: '' }
}