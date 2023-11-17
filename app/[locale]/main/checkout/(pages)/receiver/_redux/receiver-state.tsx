import { FieldInput } from "@/models/field-input"

export interface ReceiverState {
    firstName: FieldInput
    lastName: FieldInput
    address1: FieldInput
    address2: FieldInput
    city: FieldInput
    province: FieldInput
    zipCode: FieldInput
    country: FieldInput
    phoneNumber: FieldInput
    mobileNumber: FieldInput
    emailAddress: FieldInput
    deliveryNotes: FieldInput
    valid: boolean

}