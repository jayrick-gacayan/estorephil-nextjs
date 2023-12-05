import { AppDispatch, store } from "@/redux/store";
import { HomeRepository } from "@/repositories/home-repository";
import { HomeState } from "./home-state";
import { getMainCategoriesLoaded, getMainCategoriesSuccess } from "./home-slice";
import { ApiResponse, ResultStatus, getResultStatus } from "@/models/result";

export function getMainCategories(homeRepository: HomeRepository, locale: string) {
    return async function getMainCategories(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().home as HomeState
        dispatch(getMainCategoriesLoaded())
        const result: ApiResponse = await homeRepository.getMainCategories(locale)
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(getMainCategoriesSuccess(result.data))
                console.log('home thunk', result.data)
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(getMainCategoriesSuccess([]))
                break;
        }
    }
}