import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HomeState } from "./home-state";
import { RequestStatus } from "@/models/result";

const initialState: HomeState = {
    categories: [{}],
    products: [{}],
    stores: [{}],
    getMainCategoriesStatus: RequestStatus.WAITING,
    getMainStoresStatus: RequestStatus.WAITING,
    getMainProductsStatus: RequestStatus.WAITING,
}
export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        getMainCategoriesLoaded: (state: HomeState) => {
            return {
                ...state,
                getMainCategoriesStatus: RequestStatus.IN_PROGRESS
            }
        },
        getMainCategoriesSuccess: (state: HomeState, action: PayloadAction<any>) => {
            return {
                ...state,
                categories: action.payload,
                getMainCategoriesStatus: RequestStatus.SUCCESS
            }
        },
        getMainStoresLoaded: (state: HomeState) => {
            return {
                ...state,
                getMainStoresStatus: RequestStatus.IN_PROGRESS
            }
        },
        getMainStoresSuccess: (state: HomeState, action: PayloadAction<any>) => {
            return {
                ...state,
                stores: action.payload,
                getMainStoresStatus: RequestStatus.SUCCESS
            }
        },
        getMainProductsLoaded: (state: HomeState) => {
            return {
                ...state,
                getMainProductsStatus: RequestStatus.IN_PROGRESS
            }
        },
        getMainProductsSuccess: (state: HomeState, action: PayloadAction<any>) => {
            return {
                ...state,
                products: action.payload,
                getMainProductsStatus: RequestStatus.SUCCESS
            }
        }
    }
})

export const {
    getMainCategoriesLoaded,
    getMainCategoriesSuccess, getMainProductsLoaded,
    getMainProductsSuccess, getMainStoresLoaded, getMainStoresSuccess
} = homeSlice.actions;

export default homeSlice.reducer;