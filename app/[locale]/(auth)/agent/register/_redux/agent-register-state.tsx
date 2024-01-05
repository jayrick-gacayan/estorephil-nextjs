import { FieldInput } from "@/models/field-input";

export interface AgentRegisterState {
    businessName: FieldInput,
    businessNature: FieldInput,
    firstName: FieldInput,
    lastName: FieldInput,
    email: FieldInput,
    phoneNumber: FieldInput,
    password: FieldInput,
    confirmPassword: FieldInput,
    valid: boolean
    status: 'success' | 'loaded' | 'failed' | 'waiting',
}