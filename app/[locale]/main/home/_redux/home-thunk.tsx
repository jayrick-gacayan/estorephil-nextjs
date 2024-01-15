import { AppDispatch } from '@/redux/store';
import {
    categoriesRequestStatusSet,
    mainCategoriesSet,
    storesRequestStatusSet,
    mainStoresSet,
    ourProductsRequestStatusSet,
    mainOurProductsSet,
} from './home-slice';
import { Result } from '@/types/helpers/result-helpers';
import { Categories } from '@/models/category';
import { RequestStatus } from '@/types/enums/request-status';
import { ResultStatus } from '@/types/enums/result-status';
import { Store } from '@/models/store';
import { CategoryRepository } from '@/repositories/category-repository';
import { StoreRepository } from '@/repositories/store-repository';
import { ProductRepository } from '@/repositories/product-repository';
import { Product } from '@/models/product';
import { getResultStatus } from '@/models/result';

function getMainCategories(
    categoryRepository: CategoryRepository,
    locale: string
): (dispatch: AppDispatch) => Promise<void> {
    return async function (dispatch: AppDispatch) {
        let result: Result<Categories[]> = await categoryRepository.getMainCategories(locale);
        switch (result.resultStatus) {
            case ResultStatus.SUCCESS:
                dispatch(categoriesRequestStatusSet(RequestStatus.SUCCESS))
                dispatch(mainCategoriesSet(result.data ?? []))
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(categoriesRequestStatusSet(RequestStatus.FAILURE))
                break;
        }
    }
}

function getMainStores(
    storeRepository: StoreRepository,
    locale: string
): (dispatch: AppDispatch) => Promise<void> {
    return async function (dispatch: AppDispatch) {
        let result: Result<Store[]> = await storeRepository.getMainStores(locale);
        switch (result.resultStatus) {
            case ResultStatus.SUCCESS:
                dispatch(storesRequestStatusSet(RequestStatus.SUCCESS))
                dispatch(mainStoresSet(result.data ?? []))
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(storesRequestStatusSet(RequestStatus.FAILURE))
                break;
        }
    }
}

function getOurProducts(
    productRepository: ProductRepository,
    locale: string
): (dispatch: AppDispatch) => Promise<void> {
    return async function getMainProducts(dispatch: AppDispatch) {
        let result: Result<Product[]> = await productRepository.getMainProducts(locale);
        switch (result.resultStatus) {
            case ResultStatus.SUCCESS:
                dispatch(ourProductsRequestStatusSet(RequestStatus.SUCCESS))
                dispatch(mainOurProductsSet(result.data ?? []))
                break;
            case ResultStatus.NO_CONTENT:
                dispatch(ourProductsRequestStatusSet(RequestStatus.FAILURE))
                break;
        }
    }
}

export {
    getMainCategories,
    getMainStores,
    getOurProducts
}

