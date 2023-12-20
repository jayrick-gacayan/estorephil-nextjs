import { FileCustomBlobString } from "@/models/file-custom-blob-string";
import { TextInputField } from "@/types/props/text-input-field";

export interface AgentAgencyInformationState {
  modalUpdateFormOpen: {
    open: boolean;
    type: string;
  };
  firstName: TextInputField<string>;
  lastName: TextInputField<string>;

  documents: FileCustomBlobString[];
}