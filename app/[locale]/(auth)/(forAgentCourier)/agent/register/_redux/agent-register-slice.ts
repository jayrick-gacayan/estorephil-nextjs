import { textInputFieldValue } from '@/types/helpers/text-input-field-methods';
import { AgentRegisterState } from './agent-register-state';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import CustomValidation from '@/types/helpers/custom-validation';
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
    fieldValidResponseSet: (state: AgentRegisterState, action: PayloadAction<{ field: agentRegisterTypeFields, validResponse: ValidationResponse }>) => {
      return {
        ...state,
        [action.payload.field]: { ...state[action.payload.field], ...action.payload.validResponse }
      }
    },
    agentRegisterFormClicked: (state: AgentRegisterState) => {
      let businessNameError: ValidationResponse = getValidationResponse<string>(state.companyName.value, 'Business name', ['required']);
      let businessNatureError: ValidationResponse = getValidationResponse<string>(state.businessNature.value, 'Nature of business', ['required']);
      let firstNameError: ValidationResponse = getValidationResponse<string>(state.firstName.value, 'Firstname', ['required']);
      let lastNameError: ValidationResponse = getValidationResponse<string>(state.lastName.value, 'Lastname', ['required']);
      let emailError: ValidationResponse = getValidationResponse<string>(state.email.value, 'Email', ['required', 'email']);

      return {
        ...state,
        companyName: { ...state.companyName, ...businessNameError },
        businessNature: { ...state.businessNature, ...businessNatureError },
        firstName: { ...state.firstName, ...firstNameError },
        lastName: { ...state.lastName, ...lastNameError },
        email: { ...state.email, ...emailError },
        signUpThanksRequestStatus: businessNameError.status !== ValidationType.NONE ||
          businessNatureError.status !== ValidationType.NONE ||
          firstNameError.status !== ValidationType.NONE ||
          lastNameError.status !== ValidationType.NONE ||
          emailError.status !== ValidationType.NONE ?
          RequestStatus.FAILURE : RequestStatus.IN_PROGRESS
      }

    }
  }
});

export const {
  businessNameChanged,
  emailChanged,
  firstNameChanged,
  lastNameChanged,
  natureOfBusinessChanged,
  agentRegisterFormClicked,
  signUpThanksRequestStatusSet,
  fieldValidResponseSet
} = agentRegisterSlice.actions;

export default agentRegisterSlice.reducer;

