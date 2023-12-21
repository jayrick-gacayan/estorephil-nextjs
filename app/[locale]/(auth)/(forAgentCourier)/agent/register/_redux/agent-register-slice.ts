import { textInputFieldValue } from '@/types/helpers/text-input-field-methods';
import { AgentRegisterState } from './agent-register-state';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '@/types/enums/request-status';
import { ValidationType } from '@/types/enums/validation-type';
import { ValidationResponse } from '@/types/props/validation-response';
import { agentRegisterTypeFields } from '@/types/input-fields/agent-register-type-fields';
import { getValidationResponse } from '@/types/helpers/validation_helpers';

const initialState: AgentRegisterState = {
  companyName: textInputFieldValue<string>(''),
  businessNature: textInputFieldValue<string>(''),
  firstName: textInputFieldValue(''),
  lastName: textInputFieldValue(''),
  email: textInputFieldValue(''),

  password: textInputFieldValue(''),
  passwordConfirmation: textInputFieldValue(''),

  signUpThanksRequestStatus: RequestStatus.NONE
}


const agentRegisterSlice = createSlice({
  name: 'agentRegister',
  initialState: initialState,
  reducers: {
    businessNameChanged: (state: AgentRegisterState, action: PayloadAction<string>) => {
      return { ...state, companyName: textInputFieldValue(action.payload) }
    },
    natureOfBusinessChanged: (state: AgentRegisterState, action: PayloadAction<string>) => {
      return { ...state, businessNature: textInputFieldValue(action.payload) }
    },
    firstNameChanged: (state: AgentRegisterState, action: PayloadAction<string>) => {
      return { ...state, firstName: textInputFieldValue(action.payload) }
    },
    lastNameChanged: (state: AgentRegisterState, action: PayloadAction<string>) => {
      return { ...state, lastName: textInputFieldValue(action.payload) }
    },
    emailChanged: (state: AgentRegisterState, action: PayloadAction<string>) => {
      return { ...state, email: textInputFieldValue(action.payload) }
    },
    signUpThanksRequestStatusSet: (state: AgentRegisterState, action: PayloadAction<RequestStatus>) => {
      return { ...state, signUpThanksRequestStatus: action.payload }
    },
    passwordChanged: (state: AgentRegisterState, action: PayloadAction<string>) => {
      return { ...state, password: textInputFieldValue(action.payload) }
    },
    confirmPasswordChanged: (state: AgentRegisterState, action: PayloadAction<string>) => {
      return { ...state, passwordConfirmation: textInputFieldValue(action.payload) }
    },
    fieldValidResponseSet: (state: AgentRegisterState,
      action: PayloadAction<{ field: agentRegisterTypeFields, validResponse: ValidationResponse }>) => {
      return {
        ...state,
        [action.payload.field]: { ...state[action.payload.field], ...action.payload.validResponse }
      }
    },
    fieldInputSet: (state: AgentRegisterState,
      action: PayloadAction<{ field: agentRegisterTypeFields, data: { value: string } & ValidationResponse }>) => {
      return {
        ...state,
        [action.payload.field]: { ...state[action.payload.field], ...action.payload.data }
      }
    },
    agentRegisterFormClicked: (state: AgentRegisterState, action: PayloadAction<{ token: string | undefined }>) => {
      let businessNameError: ValidationResponse = getValidationResponse<string>(state.companyName.value, 'Business name', ['required']);
      let businessNatureError: ValidationResponse = getValidationResponse<string>(state.businessNature.value, 'Nature of business', ['required']);
      let firstNameError: ValidationResponse = getValidationResponse<string>(state.firstName.value, 'Firstname', ['required']);
      let lastNameError: ValidationResponse = getValidationResponse<string>(state.lastName.value, 'Lastname', ['required']);
      let emailError: ValidationResponse = getValidationResponse<string>(state.email.value, 'Email', ['required', 'email']);
      let passwordError: ValidationResponse = { status: ValidationType.NONE, errorText: '' };
      let confirmationPasswordError: ValidationResponse = { status: ValidationType.NONE, errorText: '' };


      if (action.payload.token && action.payload.token !== '') {
        passwordError = getValidationResponse<string>(state.password.value, 'Email', ['required', 'email']);
      }

      return {
        ...state,
        companyName: { ...state.companyName, ...businessNameError },
        businessNature: { ...state.businessNature, ...businessNatureError },
        firstName: { ...state.firstName, ...firstNameError },
        lastName: { ...state.lastName, ...lastNameError },
        email: { ...state.email, ...emailError },
        signUpThanksRequestStatus:
          businessNameError.status === ValidationType.VALID ||
            businessNatureError.status === ValidationType.VALID ||
            firstNameError.status === ValidationType.VALID ||
            lastNameError.status === ValidationType.VALID ||
            emailError.status === ValidationType.VALID ?
            RequestStatus.IN_PROGRESS : RequestStatus.FAILURE
      }
    },
    agentRegisterFormReset: () => {
      return initialState;
    }
  }
});

export const {
  businessNameChanged,
  emailChanged,
  firstNameChanged,
  lastNameChanged,
  natureOfBusinessChanged,
  passwordChanged,
  confirmPasswordChanged,
  agentRegisterFormClicked,
  signUpThanksRequestStatusSet,
  fieldValidResponseSet,
  agentRegisterFormReset,
  fieldInputSet,
} = agentRegisterSlice.actions;

export default agentRegisterSlice.reducer;

