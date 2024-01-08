import { ResultStatus, getResultStatus } from "@/models/result"
import { AppDispatch, store } from "@/redux/store"
import { AccountRepository } from "@/repositories/account-repository"
import { registerLoaded, registerSuccess, registerFailed } from "../../../register/_redux/register-slice"
import { RegisterState } from "../../../register/_redux/register-state"
import { getCompanyDataByInvitationLoaded, getCompanyDataByInvitationSuccess, registerAgentLoaded, registerAgentSuccess } from "./agent-register-slice"
import { AgentRegisterState } from "./agent-register-state"

export function getCompanyDataByInvitation(accountRepository: AccountRepository, invitationToken: string) {
    return async function register(dispatch: AppDispatch, getState: typeof store.getState) {

        dispatch(getCompanyDataByInvitationLoaded())
        var result = await accountRepository.getCompanyDataFromInvitation(invitationToken)
        switch (result.statusCode) {
            case 200:
                dispatch(getCompanyDataByInvitationSuccess(result.data))
                break;
            default:
                break;
        }
    }
}
export function registerAgent(accountRepository: AccountRepository) {
    return async function registerAgent(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().agentRegister as AgentRegisterState
        const data = {
            role: "agent_admin",
            firstName: state.firstName.value,
            lastName: state.lastName.value,
            email: state.email.value,
            password: state.password.value,
            passwordConfirm: state.confirmPassword.value,
            companyName: state.businessName.value,
        }
        dispatch(registerAgentLoaded())
        var result: any = await accountRepository.registerAgent(data)
        switch (result.resultStatus) {
            case ResultStatus.SUCCESS:
                dispatch(registerAgentSuccess())
                break;
        }
    }
}