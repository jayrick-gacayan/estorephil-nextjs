import { AppDispatch, store } from "@/redux/store";
import { LoginState } from "./login-state";
import { loginMessagePrinted, loginRequestStatusSet } from "./login-slice";
import { RequestStatus } from "@/types/enums/request-status";
import { AccountRepository } from "@/repositories/account-repository";

export function login(accountRepository: AccountRepository) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        const loginState: LoginState = getState().login
        let result = await accountRepository.login({
            email: loginState.email.value,
            password: loginState.password.value
        });

        if (!result?.error) {
            dispatch(loginRequestStatusSet(RequestStatus.SUCCESS))
        } else {
            dispatch(loginMessagePrinted(result.error))
            dispatch(loginRequestStatusSet(RequestStatus.FAILURE))
        }
    }
}