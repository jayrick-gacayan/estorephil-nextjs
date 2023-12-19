import { AppDispatch, store } from "@/redux/store";
import { AgentRegisterState } from "./agent-register-state";
import { AccountRepository } from "@/repositories/account-repository";
import { ResultStatus } from "@/types/enums/result-status";
import { RequestStatus } from "@/types/enums/request-status";
import { signUpThanksRequestStatusSet } from "./agent-register-slice";

export function registerAgent({
  accountRepository
}: {
  accountRepository: AccountRepository;
}) {
  return async function (dispatch: AppDispatch, getState: typeof store.getState) {
    let agentRegisterState: AgentRegisterState = getState().agentRegister;

    let result = await accountRepository.registerAgentCompany({
      companyName: agentRegisterState.companyName.value,
      businessNature: agentRegisterState.businessNature.value,
      firstName: agentRegisterState.firstName.value,
      lastName: agentRegisterState.lastName.value,
      email: agentRegisterState.email.value
    });

    if (result.data ?? result.resultStatus === ResultStatus.SUCCESS) {
      dispatch(signUpThanksRequestStatusSet(RequestStatus.SUCCESS));
    }
    else {
      dispatch(signUpThanksRequestStatusSet(RequestStatus.FAILURE));
    }
  }
}