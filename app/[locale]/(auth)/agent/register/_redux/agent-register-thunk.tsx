
import { AppDispatch, store } from "@/redux/store"
import { AccountRepository } from "@/repositories/account-repository"
import { getCompanyDataByInvitationLoaded, getCompanyDataByInvitationSuccess, registerAgentLoaded, registerAgentSuccess } from "./agent-register-slice"
import { AgentRegisterState } from "./agent-register-state"
import { toastAdded } from "@/app/[locale]/_redux/start-slice"
import { ResultStatus } from "@/types/enums/result-status"

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
export function registerAgent(accountRepository: AccountRepository, onRedirect: () => void) {
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

                dispatch(toastAdded({
                    id: Date.now(),
                    duration: 2,
                    message: "You can now login to your account.",
                    position: '',
                    type: 'success'
                }));

                setTimeout(() => { onRedirect(); }, 3000)
                break;
        }
    }
}