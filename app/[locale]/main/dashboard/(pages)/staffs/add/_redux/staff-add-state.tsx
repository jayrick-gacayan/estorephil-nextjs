import { FieldInput } from "@/models/field-input";

export interface StaffAddState {
    photo: string
    firstName: FieldInput
    lastName: FieldInput
    email: FieldInput
    role: FieldInput
}