import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AgentAgencyInformationState } from "./agent-agency-information-state";
import { FileCustomBlobString } from "@/models/file-custom-blob-string";
import { textInputFieldValue } from "@/types/helpers/text-input-field-methods";

const initialState: AgentAgencyInformationState = {
  modalUpdateFormOpen: {
    open: false,
    type: ''
  },
  firstName: textInputFieldValue<string>(''),
  lastName: textInputFieldValue<string>(''),
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
    firstNameChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return { ...state, firstName: { ...state.firstName, value: action.payload } }
    },
    lastNameChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return { ...state, firstName: { ...state.lastName, value: action.payload } }
    },
    updateModalBasicInfoClicked: (state: AgentAgencyInformationState) => {

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
  firstNameChanged,
  lastNameChanged,
  updateModalBasicInfoClicked
} = agentAgencyInformationSlice.actions;

export default agentAgencyInformationSlice.reducer;