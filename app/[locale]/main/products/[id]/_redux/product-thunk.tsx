import { ApiResponse, ResultStatus, getResultStatus } from "@/models/result"
import { AppDispatch, store } from "@/redux/store"
import { ProductRepository } from "@/repositories/product-repository"
import { ProductState } from "./product-state"
import { getProductDetailsLoaded, getProductDetailsSuccess } from "./product-slice"

export function getProductDetails(productRepository: ProductRepository, id: string) {
    return async function getProductDetails(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().product as ProductState
        dispatch(getProductDetailsLoaded())
        console.log('thunk dispatch get store detail loaded:')
        const result: ApiResponse = await productRepository.getProductDetails(id)
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(getProductDetailsSuccess(result.data))
                console.log('get product detail success', result.data)
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(getProductDetailsSuccess([]))
                break;
        }
    }
}