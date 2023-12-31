import { FieldInput } from "@/models/field-input"
import { RequestStatus } from "@/types/enums/request-status"

export interface PaymentMethodState {
    card: {
        type: FieldInput
        name: FieldInput
        number: FieldInput
        expiryDate: FieldInput
        ccv: FieldInput
    }
    firstName: FieldInput
    lastName: FieldInput
    billingAddress: FieldInput
    contactNumber: FieldInput
    emailAddress: FieldInput
    requestStatus: RequestStatus;
}