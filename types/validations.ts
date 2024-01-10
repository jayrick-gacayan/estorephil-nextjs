import { ValidationResponse, ValidationType } from "@/models/validation-response"
export default class Validations {

    constructor() {

    }
    validationResponse: ValidationResponse = {
        status: ValidationType.NONE,
        errorText: ''
    }
    isEmailValid(email: string) {
        return this.validationResponse = email.length === 0 ? { status: ValidationType.EMPTY, errorText: 'email is required' }
            : !(/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/.test(email)) ? { status: ValidationType.INVALID_FORMAT, errorText: 'invalid email input' }
                : { status: ValidationType.VALID, errorText: '' }
    }
    isValidPhoneNumber(phoneNumber: string) {

        return this.validationResponse = phoneNumber.length == 0 ? { status: ValidationType.EMPTY, errorText: 'phone number is required' }
            : !(/^(?:\+65\d{8}|\+63\d{10}|09\d{9}|63\d{10})$/.test(phoneNumber)) ? { status: ValidationType.INVALID_FORMAT, errorText: 'invalid phone number' }
                : { status: ValidationType.VALID, errorText: '' }
    }
    isValidPhoneNumberOptional(phoneNumber: string) {
        return this.validationResponse = !(/^(?:\+65\d{8}|\+63\d{10}|09\d{9}|63\d{10})$/.test(phoneNumber))
            ? { status: ValidationType.INVALID_FORMAT, errorText: 'invalid phone number' }
            : { status: ValidationType.VALID, errorText: '' }
    }
    isValidName({ name, nameColumn = 'name' }: { name: string, nameColumn?: string }) {

        return this.validationResponse = name.length == 0 ? { status: ValidationType.EMPTY, errorText: `${nameColumn} is required` }
            : !(/^[A-Za-z\s]+$/.test(name)) ? { status: ValidationType.INVALID_FORMAT, errorText: `invalid ${nameColumn} input` }
                : { status: ValidationType.VALID, errorText: '' }
    }
    isEmpty(value: string, field: string) {
        return this.validationResponse = value.length == 0 ? field == 'country' ? { status: ValidationType.EMPTY, errorText: `please select a country` } : { status: ValidationType.EMPTY, errorText: `${field} is required` }
            : { status: ValidationType.VALID, errorText: '' }
    }
    isCardNumberValid(value: string, field?: string) {
        return this.validationResponse = value.length == 0 ? { status: ValidationType.EMPTY, errorText: `${field} is required` }
            : value.length < 16 ? { status: ValidationType.INVALID_FORMAT, errorText: `invalid format` }
                : { status: ValidationType.VALID, errorText: `` }
    }
    isCcvValid(value: string, field?: string) {
        return this.validationResponse = value.length == 0 ? { status: ValidationType.EMPTY, errorText: `${field} is required` }
            : value.length < 3 ? { status: ValidationType.INVALID_FORMAT, errorText: `invalid format` }
                : { status: ValidationType.VALID, errorText: `` }
    }
    isExpiryDateValid(value: any, field?: string) {
        const currentDate = new Date();
        const expiryDate = new Date(value)
        return this.validationResponse = value.length == 0 ? { status: ValidationType.EMPTY, errorText: `${field} is required` }
            : expiryDate <= currentDate ? { status: ValidationType.INVALID_INPUT, errorText: `date should be in the future` }
                : { status: ValidationType.VALID, errorText: `` }
    }
    passwordValid(value: string) {
        const hasSpecialOrNumeric = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value) || /\d+/.test(value);
        return this.validationResponse = value.length == 0 ? { status: ValidationType.EMPTY, errorText: `password required` }
            : value.length < 8 ? { status: ValidationType.INVALID_FORMAT, errorText: ` minimum of 8 characters` }
                : value.length > 16 ? { status: ValidationType.INVALID_FORMAT, errorText: ` maximum of 16 characters` }
                    : !hasSpecialOrNumeric ? { status: ValidationType.INVALID_FORMAT, errorText: `Password should contain at least one special or numeric character` }
                        : { status: ValidationType.VALID, errorText: '' };
    }
    confirmPasswordValid(value: string, password: string) {
        return this.validationResponse = value.length == 0 ? { status: ValidationType.EMPTY, errorText: `confirm password required` }
            : value != password ? { status: ValidationType.INVALID_INPUT, errorText: `does not match password` }
                : { status: ValidationType.VALID, errorText: `` }
    }
}
