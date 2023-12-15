import { AppDispatch, store } from "@/redux/store";
import { AccountRepository } from "@/repositories/account-repository";
import { LoginState } from "./login-state";
import { loginFailed, loginLoaded, loginSuccess } from "./login-slice";

export function login(accountRepository: AccountRepository) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().login as LoginState
        dispatch(loginLoaded())
        var response = await accountRepository.login({
            email: state.email.value,
            password: state.password.value
        })

        if (!response?.error) {
            dispatch(loginSuccess())
        } else {
            dispatch(loginFailed())
        }
    }
}