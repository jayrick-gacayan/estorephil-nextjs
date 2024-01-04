import { FileCustomBlobString } from "@/models/file-custom-blob-string";
import { RequestStatus } from "@/types/enums/request-status";
import { TextInputField } from "@/types/props/text-input-field";

export interface AgentAgencyInformationState {
  modalUpdateFormOpen: {
    open: boolean;
    type: string;
  };

  firstName: TextInputField<string>;
  lastName: TextInputField<string>;
  province: TextInputField<string>;
  city: TextInputField<string>;
  updateBasicInfoRequestStatus: RequestStatus;

  documents: FileCustomBlobString[];
}