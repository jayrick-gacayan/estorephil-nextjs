import { CartRepository } from "@/repositories/cart-repository";
import { getMainCartLoaded, getMainCartSuccess } from "./cart-slice";
import { getResultStatus, ResultStatus } from "@/models/result";
import { AppDispatch, store } from "@/redux/store";
import { setCartSuccess } from "../../_redux/main-slice";

export function getMainCart(cartRepository: CartRepository, token: string) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        const result = await cartRepository.getMainCart(token)
        getMainCartLoaded();
        console.log('get main cart result thunk: ', result)
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                console.log('get main cart success')
                dispatch(getMainCartSuccess(result.data))
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(getMainCartSuccess(result.data))
                break;
        }
    }
}