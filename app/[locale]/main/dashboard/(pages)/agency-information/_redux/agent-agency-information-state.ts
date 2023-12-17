import { FileCustomBlobString } from "@/models/file-custom-blob-string";

export interface AgentAgencyInformationState {
  modalUpdateFormOpen: {
    open: boolean;
    type: string;
  }

  documents: FileCustomBlobString[];
}