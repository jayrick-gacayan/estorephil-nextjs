import { AppDispatch, store } from "@/redux/store";
import { AccountRepository } from "@/repositories/account-repository";
import { AgentAgencyInformationState } from "./agent-agency-information-state";
import { ResultStatus } from "@/types/enums/result-status";
import { updateBasicInfoRequestStatusSet } from "./agent-agency-information-slice";
import { RequestStatus } from "@/types/enums/request-status";
import { Session } from "next-auth";
import { snakeCase } from "change-case/keys";

export function updateBasicInfo(
  accountRepository: AccountRepository,
  token: string,
  sessionData: Session | null,
  update: (data?: any) => Promise<Session | null>
) {
  return async function (dispatch: AppDispatch, getState: typeof store.getState) {
    let agentRegisterInfoState: AgentAgencyInformationState = getState().agentAgencyInfo;

    console.log('session data on thunk', sessionData, agentRegisterInfoState.firstName.value,);
    let user = {
      firstName: agentRegisterInfoState.firstName.value,
      lastName: agentRegisterInfoState.lastName.value,
    }
    let result = await accountRepository.updateAgentBasicInfo(user, token);

    if (result.data && result.resultStatus === ResultStatus.SUCCESS) {
      dispatch(updateBasicInfoRequestStatusSet(RequestStatus.SUCCESS))
      console.log('session data on thunk', result.data);
      await update({
        user: {
          ...sessionData,
          user: {
            ...sessionData?.user,
            first_name: agentRegisterInfoState.firstName.value,
            last_name: result.data.lastName,
          }
        }
      })

    }
    else {
      dispatch(updateBasicInfoRequestStatusSet(RequestStatus.FAILURE))
    }
  }
}