import { AppDispatch, store } from "@/redux/store";
import { LoginState } from "./login-state";
import { loginRequestStatusSet } from "./login-slice";
import { RequestStatus } from "@/types/enums/request-status";
import { AuthRepository } from "@/repositories/auth-repository";

export function login(authRepository: AuthRepository) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        const loginState: LoginState = getState().login
        let result = await authRepository.nextAuthSignIn({
            email: loginState.email.value,
            password: loginState.password.value
        });
        console.log('Result', result.data);

        if (result.data?.error) {
            dispatch(loginRequestStatusSet(RequestStatus.SUCCESS))
        } else {
            dispatch(loginRequestStatusSet(RequestStatus.FAILURE))
        }
    }
}