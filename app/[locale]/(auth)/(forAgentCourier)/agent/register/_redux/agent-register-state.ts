import { RequestStatus } from "@/types/enums/request-status";
import { TextInputField } from "@/types/props/text-input-field";

export interface AgentRegisterState {
  companyName: TextInputField<string>;
  businessNature: TextInputField<string>;
  firstName: TextInputField<string>;
  lastName: TextInputField<string>;
  email: TextInputField<string>;

  password: TextInputField<string>;
  passwordConfirmation: TextInputField<string>;

  signUpThanksRequestStatus: RequestStatus;
}