import { FieldInput } from "@/models/field-input";
import { RequestStatus } from "@/types/enums/request-status";
import { TextInputField } from "@/types/props/text-input-field";

export interface AgentAgencyInformationState {
  modalUpdateFormOpen: {
    open: boolean;
    type: string;
  };

  firstName: FieldInput;
  lastName: FieldInput;
  phoneNumber: FieldInput;
  address1: FieldInput
  address2: FieldInput
  city: FieldInput
  province: FieldInput
  zipCode: FieldInput
  country: FieldInput
  updateBasicInfoStatus: RequestStatus;

  companyName: FieldInput;
  businessNature: FieldInput;
  ownerFirstName: FieldInput;
  ownerLastName: FieldInput;
  addressLine1: FieldInput;
  addressLine2: string;
  companyCity: FieldInput;
  companyProvince: FieldInput;
  updateBusinessInfoRequestStatus: RequestStatus;

  password: TextInputField<string>;
  passwordConfirmation: TextInputField<string>;
  currentPassword: TextInputField<string>;
  resetPasswordRequestStatus: RequestStatus;

  modalChangeImage: boolean;
  profileImage?: File;
  updateProfileImageRequestStatus: RequestStatus;

  documents: any[];
  documentsRequestStatus: RequestStatus;
}