import { AppDispatch, store } from "@/redux/store";
import { AgentRegisterState } from "./agent-register-state";
import { AccountRepository } from "@/repositories/account-repository";
import { ResultStatus } from "@/types/enums/result-status";
import { RequestStatus } from "@/types/enums/request-status";
import { signUpThanksRequestStatusSet } from "./agent-register-slice";
import { Result } from "@/types/helpers/result-helpers";
import { Company } from "@/models/company";

export function registerAgent(accountRepository: AccountRepository) {
  return async function (dispatch: AppDispatch, getState: typeof store.getState) {
    let agentRegisterState: AgentRegisterState = getState().agentRegister;

    let result: Result<Company> = await accountRepository.registerAgentCompany({
      companyName: agentRegisterState.companyName.value,
      businessNature: agentRegisterState.businessNature.value,
      firstName: agentRegisterState.firstName.value,
      lastName: agentRegisterState.lastName.value,
      email: agentRegisterState.email.value
    });

    if (result.data && result.resultStatus === ResultStatus.SUCCESS) {
      let getRegisterResult: Result<any> = await accountRepository.agentSendInvitation(result.data?.id!);

      dispatch(
        signUpThanksRequestStatusSet(
          getRegisterResult.resultStatus === ResultStatus.SUCCESS ?
            RequestStatus.SUCCESS : RequestStatus.FAILURE
        )
      );
    }
    else {

      if (result.resultStatus === ResultStatus.MULTIPLE_CHOICES) {

      }
      dispatch(signUpThanksRequestStatusSet(RequestStatus.FAILURE));
    }
  }
}