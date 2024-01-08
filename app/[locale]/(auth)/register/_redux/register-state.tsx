import { FieldInput } from "@/models/field-input";
import { RequestStatus } from "@/models/result";

export interface RegisterState {
    businessName: FieldInput,
    businessNature: FieldInput,
    firstName: FieldInput,
    lastName: FieldInput,
    email: FieldInput,
    phoneNumber: FieldInput,
    password: FieldInput,
    confirmPassword: FieldInput,
    valid: boolean
    registerStatus: RequestStatus
    status: 'success' | 'loaded' | 'failed' | 'waiting',
}