import { AppDispatch, store } from "@/redux/store";
import { LoginState } from "./login-state";
import { loginRequestStatusSet } from "./login-slice";
import { RequestStatus } from "@/types/enums/request-status";
import { AccountRepository } from "@/repositories/account-repository";

export function login(accountRepository: AccountRepository) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        const loginState: LoginState = getState().login

        console.log('email on login', loginState.email.value)
        let result = await accountRepository.nextAuthSignIn({
            email: loginState.email.value,
            password: loginState.password.value
        });

        console.log('Result', result.data);

        if (result.data?.ok) {
            dispatch(loginRequestStatusSet(RequestStatus.SUCCESS))
        } else {
            dispatch(loginRequestStatusSet(RequestStatus.FAILURE))
        }
    }
}