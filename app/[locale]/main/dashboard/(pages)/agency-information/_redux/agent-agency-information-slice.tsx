import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AgentAgencyInformationState } from "./agent-agency-information-state";
import { FileCustomBlobString } from "@/models/file-custom-blob-string";
import { textInputFieldValue } from "@/types/helpers/field-methods";
import { RequestStatus } from "@/types/enums/request-status";
import { getValidationResponse } from "@/types/helpers/validation_helpers";
import { ValidationType } from "@/types/enums/validation-type";
import { User } from "@/models/user";
import Validations from "@/types/validations";

const initialState: AgentAgencyInformationState = {
  modalUpdateFormOpen: {
    open: false,
    type: ''
  },
  firstName: { value: '', error: '' },
  lastName: { value: '', error: '' },
  phoneNumber: { value: '', error: '' },
  address1: { value: '', error: '' },
  address2: { value: '', error: '' },
  city: { value: '', error: '' },
  province: { value: '', error: '' },
  zipCode: { value: '', error: '' },
  country: { value: '', error: '' },
  updateBasicInfoStatus: RequestStatus.WAITING,
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
    agentRegisterFormReset: () => {
      return initialState;
    },

    updateBasicInfoStatusLoaded: (state: AgentAgencyInformationState) => {
      return {
        ...state,
        updateBasicInfoStatus: RequestStatus.IN_PROGRESS,
      }
    },
    updateBasicInfoStatusSuccess: (state: AgentAgencyInformationState) => {
      return {
        ...state,
        updateBasicInfoStatus: RequestStatus.SUCCESS,
      }
    },
    firstNameChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      const validation = new Validations()
      const validateFullName = validation.isValidName({ name: action.payload, nameColumn: 'first name' })
      return {
        ...state,
        firstName: {
          value: action.payload,
          valid: validateFullName.status == ValidationType.VALID,
          error: validateFullName.errorText
        }
      }
    },
    lastNameChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      const validation = new Validations()
      const validateFullName = validation.isValidName({ name: action.payload, nameColumn: 'last name' })
      return {
        ...state,
        lastName: {
          value: action.payload,
          valid: validateFullName.status == ValidationType.VALID,
          error: validateFullName.errorText
        }
      }
    },
    phoneNumberChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      const validation = new Validations()
      const validatePhoneNumber = validation.isValidPhoneNumberOptional(action.payload)
      return {
        ...state,
        phoneNumber: {
          value: action.payload,
          valid: validatePhoneNumber.status == ValidationType.VALID,
          error: validatePhoneNumber.errorText
        }
      }
    },
    address1Changed: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return {
        ...state,
        address1: {
          value: action.payload,
        }
      }
    },
    address2Changed: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return {
        ...state,
        address2: {
          value: action.payload,
        }
      }
    },
    cityChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return {
        ...state,
        city: {
          value: action.payload,
        }
      }
    },
    provinceChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return {
        ...state,
        province: {
          value: action.payload,
        }
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
        }
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
        updateBasicInfoRequestStatus: RequestStatus.NONE
      }
    }
  }
});

export const {
  modalUpdateFormOpened,
  agentInfoDocumentAdded, address2Changed,
  firstNameChanged, address1Changed, cityChanged,
  lastNameChanged, provinceChanged, phoneNumberChanged,
  updateModalBasicInfoClicked, updateBasicInfoStatusLoaded,
  updateBasicInfoRequestStatusSet, updateBasicInfoStatusSuccess,
  agentBasicInfoSet,agentRegisterFormReset,
  agentFormBasicInfoFieldsReset
} = agentAgencyInformationSlice.actions;

export default agentAgencyInformationSlice.reducer;