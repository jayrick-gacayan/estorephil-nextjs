import { FieldInput } from "@/models/field-input";
import { RequestStatus } from "@/models/result";

export interface ForgotPasswordState {
    email: FieldInput,
    forgotPasswordStatus: RequestStatus
}