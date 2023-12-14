import { ApiResponse, getResultStatus, ResultStatus } from "@/models/result"
import { AppDispatch, store } from "@/redux/store"
import { OrderRepository } from "@/repositories/order-repository"
import { setCartSuccess } from "./main-slice"
import { MainState } from "./main_state"

export function setCart(orderRepository: OrderRepository, token: string, companyId: number) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        const state: MainState = getState().main;

        const result: ApiResponse = await orderRepository.setCart({
            token: token,
            cartType: state.cartType,
            city: state.deliveryAddressCity,
            companyId: companyId,
            country: state.deliveryAddressCountry
        })
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(setCartSuccess(result.data))
                console.log('set cart thunk', result.data)
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(setCartSuccess({}))
                break;
        }
    }
}