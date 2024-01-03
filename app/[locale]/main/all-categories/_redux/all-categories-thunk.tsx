import { AppDispatch, store } from '@/redux/store'
import { allCategoriesProductsSet, allCategoriesSet, allCategoriesStoresSet, categoriesRequestStatusSet, getProductStatusSet, getProductsSuccess, storesRequestStatusSet } from './all-categories-slice'
import { AllCategoriesState } from './all-categories-state'
import { ProductRepository } from '@/repositories/product-repository'
import { Result } from '@/types/helpers/result-helpers'
import { Categories } from '@/models/category'
import { RequestStatus } from '@/types/enums/request-status'
import { CategoryRepository } from '@/repositories/category-repository'
import { StoreRepository } from '@/repositories/store-repository'
import { Store } from '@/models/store'
import { Product } from '@/models/product'
import { ApiResponse, getResultStatus, ResultStatus } from '@/models/result'

function getMainCategories(
    categoryRepository: CategoryRepository,
    locale: string
): (dispatch: AppDispatch) => Promise<void> {
    return async function (dispatch: AppDispatch) {
        let result: Result<Categories[]> = await categoryRepository.getMainCategories(locale);
        switch (result.resultStatus) {
            case ResultStatus.SUCCESS:
                dispatch(categoriesRequestStatusSet(RequestStatus.SUCCESS))
                dispatch(allCategoriesSet(result.data ?? []))
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(categoriesRequestStatusSet(RequestStatus.FAILURE))
                break;
        }
    }
}

function getMainStores(storeRepository: StoreRepository, locale: string) {
    return async function (dispatch: AppDispatch) {
        let result: Result<Store[]> = await storeRepository.getMainStores(locale);
        switch (result.resultStatus) {
            case ResultStatus.SUCCESS:
                dispatch(storesRequestStatusSet(RequestStatus.SUCCESS))
                dispatch(allCategoriesStoresSet(result.data ?? []))
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(storesRequestStatusSet(RequestStatus.FAILURE))
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