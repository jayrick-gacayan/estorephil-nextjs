import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AgentAgencyInformationState } from "./agent-agency-information-state";
import { FileCustomBlobString } from "@/models/file-custom-blob-string";
import { RequestStatus } from "@/types/enums/request-status";
import { getValidationResponse } from "@/types/helpers/validation_helpers";
import { ValidationType } from "@/types/enums/validation-type";
import { User } from "@/models/user";
import Validations from "@/types/validations";
import { textInputFieldValue } from "@/types/helpers/field-methods";
import { ValidationCustom } from "@/types/helpers/validation-custom";

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
  updateBasicInfoStatus: RequestStatus.NONE,

  updateProfileImageRequestStatus: RequestStatus.NONE,
  modalChangeImage: false,

  documents: [],
  documentsRequestStatus: RequestStatus.NONE,

  password: textInputFieldValue(''),
  passwordConfirmation: textInputFieldValue(''),
  currentPassword: textInputFieldValue(''),
  resetPasswordRequestStatus: RequestStatus.NONE,

}

const agentAgencyInformationSlice = createSlice({
  name: 'agentAgencyInfo',
  initialState,
  reducers: {
    modalImageChangeOpened: (state: AgentAgencyInformationState, action: PayloadAction<boolean>) => {
      return { ...state, modalChangeImage: action.payload }
    },
    profileImageChanged: (state: AgentAgencyInformationState, action: PayloadAction<File | undefined>) => {
      let { profileImage, ...rest } = state;
      return action.payload ? {
        ...state,
        profileImage: action.payload
      } : rest;
    },
    updateProfileImageRequestStatusSet: (state: AgentAgencyInformationState, action: PayloadAction<RequestStatus>) => {
      return {
        ...state,
        updateProfileImageRequestStatus: action.payload,
      }
    },

    modalUpdateFormOpened: (state: AgentAgencyInformationState, action: PayloadAction<{ type: string; open: boolean }>) => {
      return {
        ...state,
        modalUpdateFormOpen: {
          open: action.payload.open,
          type: action.payload.type
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
      return { ...state, updateBasicInfoStatus: action.payload }
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
        firstName: { value: '', error: '' },
        lastName: { value: '', error: '' },
        phoneNumber: { value: '', error: '' },
        address1: { value: '', error: '' },
        address2: { value: '', error: '' },
        city: { value: '', error: '' },
        province: { value: '', error: '' },
        zipCode: { value: '', error: '' },
        country: { value: '', error: '' },
        updateBasicInfoRequestStatus: RequestStatus.NONE
      }
    },

    passwordChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return { ...state, password: { ...state.password, value: action.payload } }
    },
    passwordConfirmationChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return { ...state, passwordConfirmation: { ...state.passwordConfirmation, value: action.payload } }
    },
    currentPasswordChanged: (state: AgentAgencyInformationState, action: PayloadAction<string>) => {
      return { ...state, currentPassword: { ...state.currentPassword, value: action.payload } }
    },
    resetPasswordRequestStatusChanged: (state: AgentAgencyInformationState, action: PayloadAction<RequestStatus>) => {
      return { ...state, resetPasswordRequestStatus: action.payload };
    },
    resetPasswordFormClicked: (state: AgentAgencyInformationState) => {
      let errors = new ValidationCustom([
        { currentPassword: { field: 'Current Password', value: state.currentPassword.value, validations: 'required|min:8' } },
        { password: { field: 'Password', value: state.password.value, validations: 'required|min:8|match:passwordConfirmation' } },
        { passwordConfirmation: { field: 'Confirm Password', value: state.passwordConfirmation.value, validations: 'required|min:8' } },
      ]);

      let currentPasswordError = errors.getErrors()['currentPassword'];
      let passwordError = errors.getErrors()['password'];
      let passwordConfirmationError = errors.getErrors()['passwordConfirmation']

      return {
        ...state,
        currentPassword: {
          ...state.currentPassword,
          ...currentPasswordError
        },
        password: {
          ...state.password,
          ...passwordError
        },
        passwordConfirmation: {
          ...state.passwordConfirmation,
          ...passwordConfirmationError
        },
        resetPasswordRequestStatus:
          (currentPasswordError['status'] === ValidationType.VALID &&
            passwordError['status'] === ValidationType.VALID &&
            passwordConfirmationError['status'] === ValidationType.VALID) ?
            RequestStatus.IN_PROGRESS : RequestStatus.FAILURE
      }
    },
    resetPasswordFormReset: (state: AgentAgencyInformationState) => {
      return {
        ...state,

        currentPassword: textInputFieldValue(''),
        resetPasswordRequestStatus: RequestStatus.NONE,
      }
    },
    currentPasswordSetErrors: (state: AgentAgencyInformationState, action: PayloadAction<{ status: ValidationType; errorText: string; }>) => {
      return {
        ...state,
        currentPassword: {
          ...state.currentPassword,
          status: action.payload.status,
          errorText: action.payload.errorText
        }
      }
    },

    documentsSet: (state: AgentAgencyInformationState, action: PayloadAction<any[]>) => {
      return { ...state, documents: action.payload };
    },
    documentsRequestStatusSet: (state: AgentAgencyInformationState, action: PayloadAction<RequestStatus>) => {
      return { ...state, documentsRequestStatus: action.payload };
    }
  }
});

export const {
  modalUpdateFormOpened,
  profileImageChanged,
  modalImageChangeOpened,
  updateProfileImageRequestStatusSet,

  passwordChanged,
  passwordConfirmationChanged,
  currentPasswordChanged,
  resetPasswordFormClicked,
  resetPasswordRequestStatusChanged,
  resetPasswordFormReset,
  currentPasswordSetErrors,

  documentsSet,
  documentsRequestStatusSet,

  agentInfoDocumentAdded, address2Changed,
  firstNameChanged, address1Changed, cityChanged,
  lastNameChanged, provinceChanged, phoneNumberChanged,
  updateModalBasicInfoClicked, updateBasicInfoStatusLoaded,
  updateBasicInfoRequestStatusSet, updateBasicInfoStatusSuccess,
  agentBasicInfoSet, agentRegisterFormReset,
  agentFormBasicInfoFieldsReset
} = agentAgencyInformationSlice.actions;

export default agentAgencyInformationSlice.reducer;