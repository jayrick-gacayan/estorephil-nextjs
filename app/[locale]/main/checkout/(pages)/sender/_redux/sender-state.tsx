import { FieldInput } from "@/models/field-input";
import { RequestStatus } from "@/types/enums/request-status";

export interface SenderState {
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
    valid: boolean
    requestStatus: RequestStatus;
}