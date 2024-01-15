import { AppDispatch, store } from "@/redux/store";
import { AccountRepository } from "@/repositories/account-repository";
import { AgentAgencyInformationState } from "./agent-agency-information-state";
import { ResultStatus } from "@/types/enums/result-status";
import { updateBasicInfoRequestStatusSet, updateProfileImageRequestStatusSet } from "./agent-agency-information-slice";
import { RequestStatus } from "@/types/enums/request-status";
import { Session } from "next-auth";
import { toastAdded } from "@/app/[locale]/_redux/start-slice";

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
  update: (data?: any) => Promise<Session | null>,
  sessionData: Session
) {
  return async function (dispatch: AppDispatch, getState: typeof store.getState) {
    let agentAgencyInfoState: AgentAgencyInformationState = getState().agentAgencyInfo;
    dispatch(updateProfileImageRequestStatusSet(RequestStatus.WAITING));
    dispatch(updateProfileImageRequestStatusSet(RequestStatus.IN_PROGRESS));


    let result = await accountRepository.updateAgentProfileImage({
      profileImage: agentAgencyInfoState.profileImage
    }, token);

    if (result.data && result.resultStatus === ResultStatus.SUCCESS) {
      dispatch(updateBasicInfoRequestStatusSet(RequestStatus.SUCCESS))
    }
    else {
      dispatch(updateBasicInfoRequestStatusSet(RequestStatus.FAILURE))
    }
  }
}