import { ApiResponse, getResultStatus, ResultStatus } from "@/models/result"
import { AppDispatch, store } from "@/redux/store"
import { HomeRepository } from "@/repositories/home-repository"
import { getMainCategoriesLoaded, getMainCategoriesSuccess, getMainStoresSuccess } from "../../home/_redux/home-slice"
import { HomeState } from "../../home/_redux/home-state"
import { getCategoriesLoaded, getCategoriesSuccess, getProductsSuccess, getStoresLoaded, getStoresSuccess } from "./all-categories-slice"
import { AllCategoriesState } from "./all-categories-state"
import { ProductRepository } from "@/repositories/product-repository"

export function getMainCategories(homeRepository: HomeRepository, locale: string) {
    return async function getMainCategories(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().allCategories as AllCategoriesState
        dispatch(getCategoriesLoaded())
        const result: ApiResponse = await homeRepository.getMainCategories(locale)
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(getCategoriesSuccess(result.data))
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(getCategoriesSuccess([]))
                break;
        }
    }
}
export function getMainStores(homeRepository: HomeRepository, locale: string) {
    return async function getMainStores(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().allCategories as AllCategoriesState
        const result: ApiResponse = await homeRepository.getMainStores(locale)
        dispatch(getStoresLoaded())
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(getStoresSuccess(result.data))
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(getStoresSuccess([]))
                break;
        }
    }
}
export function searchProducts(productRepository: ProductRepository, locale: string) {
    return async function searchProducts(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().allCategories as AllCategoriesState
        const result: ApiResponse = await productRepository.searchProducts({
            locale: locale,
            categories: state.categoriesSelected,
            query: state.searchQuery,
            sort: state.sort
        })
        dispatch(getCategoriesLoaded())
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(getProductsSuccess(result.data))
                console.log('search products result: ', result.data)
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(getProductsSuccess([]))
                break;
        }
    }
}