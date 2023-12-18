import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HomeState } from './home-state';
import { RequestStatus } from '@/types/enums/request-status';
import { Categories } from '@/models/category';
import { Store } from '@/models/store';
import { Product } from '@/models/product';

const initialState: HomeState = {
    categories: [],
    ourProducts: [],
    stores: [],
    getMainCategoriesStatus: RequestStatus.NONE,
    getMainStoresStatus: RequestStatus.NONE,
    getOurProductsStatus: RequestStatus.NONE,
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        categoriesRequestStatusSet: (state: HomeState, action: PayloadAction<RequestStatus>) => {
            return { ...state, getMainCategoriesStatus: action.payload }
        },
        mainCategoriesSet: (state: HomeState, action: PayloadAction<Categories[]>) => {
            return { ...state, categories: action.payload }
        },
        storesRequestStatusSet: (state: HomeState, action: PayloadAction<RequestStatus>) => {
            return { ...state, getMainStoresStatus: action.payload }
        },
        mainStoresSet: (state: HomeState, action: PayloadAction<Store[]>) => {
            return { ...state, stores: action.payload }
        },
        ourProductsRequestStatusSet: (state: HomeState, action: PayloadAction<RequestStatus>) => {
            return { ...state, getOurProductsStatus: action.payload }
        },
        mainOurProductsSet: (state: HomeState, action: PayloadAction<Product[]>) => {
            return { ...state, ourProducts: action.payload }
        },
    }
})

export const {
    categoriesRequestStatusSet,
    mainCategoriesSet,
    storesRequestStatusSet,
    mainStoresSet,
    ourProductsRequestStatusSet,
    mainOurProductsSet,
} = homeSlice.actions;

export default homeSlice.reducer;