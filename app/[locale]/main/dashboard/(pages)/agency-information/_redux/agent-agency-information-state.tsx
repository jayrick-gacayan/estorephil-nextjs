import { FieldInput } from "@/models/field-input";
import { FileCustomBlobString } from "@/models/file-custom-blob-string";
import { RequestStatus } from "@/types/enums/request-status";

export interface AgentAgencyInformationState {
  modalUpdateFormOpen: {
    open: boolean;
    type: string;
  };
  modalChangeImage: boolean;
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

  profileImage?: File;
  updateProfileImageRequestStatus: RequestStatus;

  documents: FileCustomBlobString[];
}