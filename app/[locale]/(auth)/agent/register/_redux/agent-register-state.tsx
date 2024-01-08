import { FieldInput } from "@/models/field-input";
import { RequestStatus } from "@/models/result";

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
    withToken: boolean
    getCompanyDataByInvitationStatus: RequestStatus,
    registerAgentStatus: RequestStatus,
    status: 'success' | 'loaded' | 'failed' | 'waiting',
}