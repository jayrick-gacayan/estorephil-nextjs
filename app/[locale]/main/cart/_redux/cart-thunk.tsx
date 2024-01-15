import { CartRepository } from "@/repositories/cart-repository";
import { createOrderLoaded, getMainCartLoaded, getMainCartSuccess } from "./cart-slice";
import { getResultStatus, ResultStatus } from "@/models/result";
import { AppDispatch, store } from "@/redux/store";
import { setCartSuccess } from "../../_redux/main-slice";
import { OrderRepository } from "@/repositories/order-repository";

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
export function createOrder(orderRepository: OrderRepository, token: string) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        createOrderLoaded();
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

        // Convert the stores object to an array if needed
        const allStores = Object.entries(stores).map(([storeId, products]) => ({
            storeId,
            products,
        }));

        // Now 'storesArray' contains the grouped stores with their respective products
        console.log(allStores);
        // const result = await orderRepository.createOrder({})
    }
}