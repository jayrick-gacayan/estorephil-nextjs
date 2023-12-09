import { FieldInput } from "@/models/field-input"
import { RequestStatus } from "@/models/result"

export interface LoginState {
    email: FieldInput
    password: FieldInput
    requestStatus: RequestStatus
}