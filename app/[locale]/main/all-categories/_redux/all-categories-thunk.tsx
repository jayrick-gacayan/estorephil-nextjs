import { ApiResponse, getResultStatus, ResultStatus } from "@/models/result"
import { AppDispatch, store } from "@/redux/store"
import { HomeRepository } from "@/repositories/home-repository"
import { getMainCategoriesLoaded, getMainCategoriesSuccess, getMainStoresSuccess } from "../../home/_redux/home-slice"
import { HomeState } from "../../home/_redux/home-state"
import { getCategoriesLoaded, getCategoriesSuccess, getStoresLoaded, getStoresSuccess } from "./all-categories-slice"
import { AllCategoriesState } from "./all-categories-state"

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