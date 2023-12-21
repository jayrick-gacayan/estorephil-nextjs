import { ApiResponse, getResultStatus, ResultStatus } from "@/models/result"
import { AppDispatch, store } from "@/redux/store"
import { OrderRepository } from "@/repositories/order-repository"
import { addToCartLoaded, addToCartSuccess, removeFromCartLoaded, removeFromCartSuccess, setCartSuccess } from "./main-slice"
import { MainState } from "./main-state"
import { ProductRepository } from "@/repositories/product-repository"
import { getProductDetailsLoaded } from "../products/[id]/_redux/product-slice"
import { ProductState } from "../products/[id]/_redux/product-state"

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
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(setCartSuccess({}))
                break;
        }
    }
}
export function addToCart(productRepository: ProductRepository, token: string) {
    return async function getProductDetails(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().product as ProductState
        const mainState = getState().main as MainState
        dispatch(addToCartLoaded())
        const result: ApiResponse = await productRepository.addToCart(token, state.product.id, mainState.addToCartQuantity)
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(addToCartSuccess(result.data.cart))
                break;
        }
    }
}
export function removeFromCart(productRepository: ProductRepository, token: string, productId?: number) {
    return async function getProductDetails(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().product as ProductState
        dispatch(removeFromCartLoaded())
        const result: ApiResponse = await productRepository.removeFromCart(token, state.product.id ?? productId)
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(removeFromCartSuccess(result.data.cart))
                break;
        }
    }
}