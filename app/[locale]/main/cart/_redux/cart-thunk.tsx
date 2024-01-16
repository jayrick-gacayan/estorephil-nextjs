import { CartRepository } from "@/repositories/cart-repository";
import { createOrderFailed, createOrderLoaded, createOrderSuccess, getMainCartLoaded, getMainCartSuccess } from "./cart-slice";
import { getResultStatus, ResultStatus } from "@/models/result";
import { AppDispatch, store } from "@/redux/store";
import { setCartSuccess } from "../../_redux/main-slice";
import { OrderRepository } from "@/repositories/order-repository";

export function getMainCart(cartRepository: CartRepository, token: string) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        const result = await cartRepository.getMainCart(token)
        getMainCartLoaded();
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(getMainCartSuccess(result.data))
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(getMainCartSuccess(result.data))
                break;
        }
    }
}
export function createOrder(orderRepository: OrderRepository, token: string) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        dispatch(createOrderLoaded());
        const state = getState().cart
        const items = state.itemsSelected
        console.log(items)
        const stores: { [storeId: string]: any[] } = items.reduce((result, item) => {
            const storeId = item.store_id;
            if (!result[storeId]) {
                result[storeId] = [];
            }
            result[storeId].push(item);
            return result;
        }, {});
        const allStores: any[] = Object.entries(stores).map(([storeId, products]) => ({
            storeId,
            products,
        }));
        
        console.log(allStores);
        const result = await orderRepository.createOrder({ token: token, stores: allStores })
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(createOrderSuccess())
                break;
            default:
                dispatch(createOrderFailed())
                break;
        }
    }
}