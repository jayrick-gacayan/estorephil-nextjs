import { ValidationResponse, ValidationStatus } from "@/models/validation-response"
export default class Validations {
    constructor() {

    }
    validationResponse: ValidationResponse = {
        status: ValidationStatus.NONE,
        errorText: ''
    }
    isEmailValid(email: string) {
        return this.validationResponse = email.length === 0 ? { status: ValidationStatus.EMPTY, errorText: 'email is required' }
            : !(/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/.test(email)) ? { status: ValidationStatus.INVALID_FORMAT, errorText: 'invalid email input' }
                : { status: ValidationStatus.VALID, errorText: '' }
    }
    isValidPhoneNumber(phoneNumber: string) {

        return this.validationResponse = phoneNumber.length == 0 ? { status: ValidationStatus.EMPTY, errorText: 'phone number is required' }
            : !(/^(?:\+65\d{8}|\+63\d{10})$/.test(phoneNumber)) ? { status: ValidationStatus.INVALID_FORMAT, errorText: 'invalid phone number' }
                : { status: ValidationStatus.VALID, errorText: '' }
    }
    isValidName({ name, nameColumn = 'name' }: { name: string, nameColumn?: string }) {

        return this.validationResponse = name.length == 0 ? { status: ValidationStatus.EMPTY, errorText: `${nameColumn} is required` }
            : !(/^[A-Za-z\s]+$/.test(name)) ? { status: ValidationStatus.INVALID_FORMAT, errorText: `invalid ${nameColumn} input` }
                : { status: ValidationStatus.VALID, errorText: '' }
    }
    isEmpty(value: string, field: string) {
        return this.validationResponse = value.length == 0 ? field == 'country' ? { status: ValidationStatus.EMPTY, errorText: `please select a country` } : { status: ValidationStatus.EMPTY, errorText: `${field} is required` }
            : { status: ValidationStatus.VALID, errorText: '' }
    }
    isCardNumberValid(value: string, field?: string) {
        return this.validationResponse = value.length == 0 ? { status: ValidationStatus.EMPTY, errorText: `${field} is required` }
            : value.length < 16 ? { status: ValidationStatus.INVALID_FORMAT, errorText: `invalid format` }
                : { status: ValidationStatus.VALID, errorText: `` }
    }
    isCcvValid(value: string, field?: string) {
        return this.validationResponse = value.length == 0 ? { status: ValidationStatus.EMPTY, errorText: `${field} is required` }
            : value.length < 3 ? { status: ValidationStatus.INVALID_FORMAT, errorText: `invalid format` }
                : { status: ValidationStatus.VALID, errorText: `` }
    }
    isExpiryDateValid(value: any, field?: string) {
        const currentDate = new Date();
        const expiryDate = new Date(value)
        return this.validationResponse = value.length == 0 ? { status: ValidationStatus.EMPTY, errorText: `${field} is required` }
            : expiryDate <= currentDate ? { status: ValidationStatus.INVALID_INPUT, errorText: `date should be in the future` }
                : { status: ValidationStatus.VALID, errorText: `` }
    }
}
