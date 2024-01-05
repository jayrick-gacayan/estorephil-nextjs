import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AgentAgencyInformationState } from "./agent-agency-information-state";
import { FileCustomBlobString } from "@/models/file-custom-blob-string";
import { textInputFieldValue } from "@/types/helpers/field-methods";
import { RequestStatus } from "@/types/enums/request-status";
import { getValidationResponse } from "@/types/helpers/validation_helpers";
import { ValidationType } from "@/types/enums/validation-type";
import { User } from "@/models/user";

const initialState: AgentAgencyInformationState = {
  modalUpdateFormOpen: {
    open: false,
    type: ''
  },

  firstName: textInputFieldValue<string>(''),
  lastName: textInputFieldValue<string>(''),
  province: textInputFieldValue<string>(''),
  city: textInputFieldValue<string>(''),
  phoneNumber: textInputFieldValue<string>(''),
  updateBasicInfoRequestStatus: RequestStatus.NONE,

  documents: [],
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
    phoneNumberChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return {
        ...state,
        phoneNumber: textInputFieldValue(action.payload)
      }
    },
    provinceSelectionShown: (state: AgentAgencyInformationState, action: PayloadAction<boolean | undefined>) => {
      return {
        ...state,
        province: action.payload ? {
          ...state.province,
          show: action.payload
        } : textInputFieldValue(state.province.value)
      }
    },

    provinceChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return {
        ...state,
        province: textInputFieldValue(action.payload)
      }
    },

    citySelectionShown: (state: AgentAgencyInformationState, action: PayloadAction<boolean | undefined>) => {
      return {
        ...state,
        city: action.payload ? {
          ...state.city,
          show: action.payload
        } : textInputFieldValue(state.city.value)
      }
    },
    cityChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return {
        ...state,
        city: textInputFieldValue(action.payload)
      }
    },
    updateBasicInfoRequestStatusSet: (state: AgentAgencyInformationState, action: PayloadAction<RequestStatus>) => {
      return { ...state, updateBasicInfoRequestStatus: action.payload }
    },
    agentBasicInfoSet: (state: AgentAgencyInformationState, action: PayloadAction<User>) => {

      return {
        ...state,
        firstName: {
          ...state.firstName,
          value: action.payload.firstName ?? ''
        },
        lastName: {
          ...state.lastName,
          value: action.payload.lastName ?? ''
        },
      }
    },
    updateModalBasicInfoClicked: (state: AgentAgencyInformationState) => {
      let firstNameError = getValidationResponse(state.firstName.value, 'Firstname', ['required']);
      let lastNameError = getValidationResponse(state.lastName.value, 'Lastname', ['required']);

      return {
        ...state,
        firstName: { ...state.firstName, ...firstNameError },
        lastName: { ...state.lastName, ...lastNameError },
        updateBasicInfoRequestStatus:
          firstNameError.status === ValidationType.VALID &&
            lastNameError.status === ValidationType.VALID ?
            RequestStatus.IN_PROGRESS : RequestStatus.FAILURE
      }

    },
    agentInfoDocumentAdded: (state: AgentAgencyInformationState, action: PayloadAction<FileCustomBlobString>) => {
      return {
        ...state, documents: [...state.documents, action.payload]
      }
    },
    agentFormBasicInfoFieldsReset: (state: AgentAgencyInformationState) => {
      return {
        ...state,
        firstName: textInputFieldValue<string>(''),
        lastName: textInputFieldValue<string>(''),
        province: textInputFieldValue<string>(''),
        city: textInputFieldValue<string>(''),
        updateBasicInfoRequestStatus: RequestStatus.NONE
      }
    }
  }
});

export const {
  modalUpdateFormOpened,
  agentInfoDocumentAdded,
  firstNameChanged,
  lastNameChanged,
  updateModalBasicInfoClicked,
  updateBasicInfoRequestStatusSet,
  agentBasicInfoSet,
  agentFormBasicInfoFieldsReset,
  provinceSelectionShown,
  provinceChanged,
  citySelectionShown,
  cityChanged,
  phoneNumberChanged
} = agentAgencyInformationSlice.actions;

export default agentAgencyInformationSlice.reducer;