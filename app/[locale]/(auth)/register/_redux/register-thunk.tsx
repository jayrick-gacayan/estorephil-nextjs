import { ResultStatus } from "@/models/result"
import { registerFailed, registerLoaded, registerSuccess } from "./register-slice"
import { RegisterState } from "./register-state"
import { AppDispatch, store } from "@/redux/store"
import { AccountRepository } from "@/repositories/account-repository"

export function register(accountRepository: AccountRepository) {
    return async function register(dispatch: AppDispatch, getState: typeof store.getState) {

        const state = getState().register as RegisterState
        const data = {
            businessName: state.businessName.value,
            businessNature: state.businessNature.value,
            firstName: state.firstName.value,
            lastName: state.lastName.value,
            email: state.email.value,
            phoneNumber: state.phoneNumber.value,
        }
        dispatch(registerLoaded())
        var result = await accountRepository.register(data)
        switch (result.resultStatus) {
            case ResultStatus.SUCCESS:
                dispatch(registerSuccess())
                break;
            case ResultStatus.UNAUTHORIZED:
                dispatch(registerFailed())
            default:
                break;
        }
    }
}