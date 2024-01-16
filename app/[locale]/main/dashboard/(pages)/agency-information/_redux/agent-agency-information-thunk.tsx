import { AppDispatch, store } from "@/redux/store";
import { AccountRepository } from "@/repositories/account-repository";
import { AgentAgencyInformationState } from "./agent-agency-information-state";
import { ResultStatus } from "@/types/enums/result-status";
import {
  currentPasswordSetErrors,
  resetPasswordRequestStatusChanged,
  updateBasicInfoRequestStatusSet,
  updateProfileImageRequestStatusSet
} from "./agent-agency-information-slice";
import { RequestStatus } from "@/types/enums/request-status";
import { toastAdded } from "@/app/[locale]/_redux/start-slice";
import { ValidationType } from "@/types/enums/validation-type";

export function updateBasicInfo(
  accountRepository: AccountRepository,
  token: string,
) {
  return async function (dispatch: AppDispatch, getState: typeof store.getState) {
    let state: AgentAgencyInformationState = getState().agentAgencyInfo;
    dispatch(updateBasicInfoRequestStatusSet(RequestStatus.WAITING))
    dispatch(updateBasicInfoRequestStatusSet(RequestStatus.IN_PROGRESS));

    let user = {
      firstName: state.firstName.value,
      lastName: state.lastName.value,
      phoneNumber: state.phoneNumber.value,
      address1: state.address1.value,
      address2: state.address2.value,
      city: state.city.value,
      province: state.province.value
    }
    let result = await accountRepository.updateAgentBasicInfo(user, token);

    if (result.data && result.resultStatus === ResultStatus.SUCCESS) {

      dispatch(updateBasicInfoRequestStatusSet(RequestStatus.SUCCESS))
      dispatch(toastAdded({
        id: Date.now(),
        duration: 1,
        position: "",
        type: 'success',
        message: 'Successfully update information.'
      }));
    }
    else {
      console.log('I am here')
      dispatch(updateBasicInfoRequestStatusSet(RequestStatus.FAILURE))
    }
  }
}

export function updateAgentProfileImage(
  accountRepository: AccountRepository,
  token: string,
  file: File,
  updateImage: (imageUrl: any) => void
) {
  return async function (dispatch: AppDispatch) {
    dispatch(updateProfileImageRequestStatusSet(RequestStatus.WAITING));
    dispatch(updateProfileImageRequestStatusSet(RequestStatus.IN_PROGRESS));

    setTimeout(async () => {
      let result = await accountRepository.updateAgentProfileImage({
        profileImage: file
      }, token);

      if (result.data && result.resultStatus === ResultStatus.SUCCESS) {
        updateImage(result.data.profileImageUrl);
        setTimeout(() => { dispatch(updateProfileImageRequestStatusSet(RequestStatus.SUCCESS)) }, 1000);
      }
      else {
        dispatch(updateProfileImageRequestStatusSet(RequestStatus.FAILURE));
      }
    }, 2000);

  }
}

export function agentResetPassword(accountRepository: AccountRepository, token: string) {
  return async function (dispatch: AppDispatch, getState: typeof store.getState) {
    let agentAgencyInfoState: AgentAgencyInformationState = getState().agentAgencyInfo;

    let result = await accountRepository.resetPassword(
      {
        password: agentAgencyInfoState.password.value,
        passwordConfirmation: agentAgencyInfoState.passwordConfirmation.value
      },
      agentAgencyInfoState.currentPassword.value,
      token);

    if (result.resultStatus === ResultStatus.SUCCESS) {
      dispatch(resetPasswordRequestStatusChanged(RequestStatus.SUCCESS));
      dispatch(toastAdded({
        id: Date.now(),
        duration: 1,
        type: 'success',
        position: '',
        message: 'Successfully reset password.'
      }))
    } else {
      dispatch(currentPasswordSetErrors({
        status: ValidationType.MISMATCH,
        errorText: `Current password input field does not match with your current password.`
      }));
      dispatch(resetPasswordRequestStatusChanged(RequestStatus.FAILURE));
    }

  }
}