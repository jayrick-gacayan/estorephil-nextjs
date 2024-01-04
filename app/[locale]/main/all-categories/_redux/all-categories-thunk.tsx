import { AppDispatch, store } from '@/redux/store'
import {  getCategoriesLoaded, getCategoriesSuccess, getProductStatusSet, getProductsSuccess, getStoresLoaded, getStoresSuccess, storesRequestStatusSet } from './all-categories-slice'
import { AllCategoriesState } from './all-categories-state'
import { ProductRepository } from '@/repositories/product-repository'
import { ApiResponse, getResultStatus, ResultStatus } from '@/models/result'
import { HomeRepository } from '@/repositories/home-repository'

function getMainCategories(homeRepository: HomeRepository, locale: string) {
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

function getMainStores(homeRepository: HomeRepository, locale: string) {
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

function searchProducts(productRepository: ProductRepository, locale: string) {
    return async function searchProducts(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().allCategories as AllCategoriesState
        const result: ApiResponse = await productRepository.searchProducts({
            locale: locale,
            categories: state.categoriesSelected,
            query: state.searchQuery,
            sort: state.sort
        })
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
export {
    getMainCategories,
    getMainStores,
    searchProducts,
}