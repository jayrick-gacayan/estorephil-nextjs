import { ApiResponse, getResultStatus, ResultStatus } from "@/models/result"
import { AppDispatch, store } from "@/redux/store"
import { StoreRepository } from "@/repositories/store-repository"
import { StoreState } from "./store-state"
import { getStoreDetailsLoaded, getStoreDetailsSuccess } from "./store-slice"

export function getStoreDetail(storeRepository: StoreRepository, id: string, locale: string) {
    return async function getStoreDetail(dispatch: AppDispatch, getState: typeof store.getState) {
        const state = getState().store as StoreState
        dispatch(getStoreDetailsLoaded())
        console.log('thunk dispatch get store detail loaded:')
        const result: ApiResponse = await storeRepository.getStoreDetail(id, locale)
        switch (getResultStatus(result.status)) {
            case ResultStatus.SUCCESS:
                dispatch(getStoreDetailsSuccess(result.data))
                console.log('get store detail success', result.data)
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(getStoreDetailsSuccess([]))
                break;
        }
    }
}