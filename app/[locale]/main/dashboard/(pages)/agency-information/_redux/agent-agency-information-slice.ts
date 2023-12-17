import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AgentAgencyInformationState } from "./agent-agency-information-state";
import { FileCustomBlobString } from "@/models/file-custom-blob-string";

const initialState: AgentAgencyInformationState = {
  modalUpdateFormOpen: {
    open: false,
    type: ''
  },
  documents: []
}

const agentAgencyInformationSlice = createSlice({
  name: 'agentAgencyInfo',
  initialState,
  reducers: {
    modalUpdateFormOpened: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return {
        ...state,
        modalUpdateFormOpen: {
          open: !state.modalUpdateFormOpen.open,
          type: action.payload
        }
      }
    },
    agentInfoDocumentAdded: (state: AgentAgencyInformationState, action: PayloadAction<FileCustomBlobString>) => {
      return {
        ...state, documents: [...state.documents, action.payload]
      }
    }
  }
});

export const {
  modalUpdateFormOpened,
  agentInfoDocumentAdded,
} = agentAgencyInformationSlice.actions;

export default agentAgencyInformationSlice.reducer;