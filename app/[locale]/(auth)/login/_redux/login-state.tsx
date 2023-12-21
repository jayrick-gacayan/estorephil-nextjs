import { RequestStatus } from "@/types/enums/request-status"
import { TextInputField } from "@/types/props/text-input-field"

export interface LoginState {
    email: TextInputField<string>;
    password: TextInputField<string>;
    requestStatus: RequestStatus
}