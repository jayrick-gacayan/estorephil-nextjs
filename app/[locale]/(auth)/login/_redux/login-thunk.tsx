import { AppDispatch, store } from "@/redux/store";
import { AccountRepository } from "@/repositories/account-repository";
import { LoginState } from "./login-state";
import { loginLoaded } from "./login-slice";

export function login(accountRepository: AccountRepository) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().login as LoginState
        dispatch(loginLoaded())

        var response = await accountRepository.login({
            email: state.email.value,
            password: state.password.value
        })
        console.log('response', response)
    }
}