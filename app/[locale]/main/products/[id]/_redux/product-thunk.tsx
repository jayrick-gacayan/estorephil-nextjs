import { ApiResponse, ResultStatus, getResultStatus } from "@/models/result"
import { AppDispatch, store } from "@/redux/store"
import { ProductRepository } from "@/repositories/product-repository"
import { ProductState } from "./product-state"
import { getProductDetailsLoaded, getProductDetailsSuccess, productFavoriteSet } from "./product-slice"
import { Result } from "@/types/helpers/result-helpers"
import { Product } from "@/models/product"
import { ResultStatus as MyResultStatus } from '@/types/enums/result-status';

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

export function isProductFavorite(productRepository: ProductRepository, token: string) {
    return async function (dispatch: AppDispatch, getState: typeof store.getState) {
        let productState: ProductState = getState().product;

        let result: Result<Product[]> = await productRepository.getAllProductFavorites(token);

        if (result.resultStatus === MyResultStatus.SUCCESS && !!result.data) {


            let product = result.data.find((value: Product) => {
                return value.id === productState.product.id
            })

            dispatch(productFavoriteSet(product ? true : undefined))
        }
    }
}

export function addProductToFavorites(productRepository: ProductRepository, token: string, id: string) {
    return async function (dispatch: AppDispatch) {
        let result = await productRepository.addProductToFavorites(token, id);

        if (!!result.data && result.resultStatus === MyResultStatus.SUCCESS) {
            dispatch(isProductFavorite(productRepository, token))
        }
    }
}

export function deleteProductFromFavorites(productRepository: ProductRepository, token: string, id: string) {
    return async function (dispatch: AppDispatch) {
        let result = await productRepository.deleteProductFromFavorites(token, id);

        if (result.message !== '' && result.resultStatus === MyResultStatus.SUCCESS) {
            dispatch(isProductFavorite(productRepository, token))
        }
    }
}
