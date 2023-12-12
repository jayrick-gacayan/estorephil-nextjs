import { RequestStatus } from "@/models/result";
import { AllCategoriesState } from "./all-categories-state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AllCategoriesState = {
    categories: [{}],
    stores: [{}],
    getStoreStatus: RequestStatus.WAITING,
    getCategoriesStatus: RequestStatus.WAITING
}

export const allCategoriesSlice = createSlice({
    name: 'allCategories',
    initialState,
    reducers: {
        getCategoriesLoaded: (state: AllCategoriesState) => {
            return {
                ...state,
                getCategoriesStatus: RequestStatus.IN_PROGRESS
            }
        },
        getCategoriesSuccess: (state: AllCategoriesState, action: PayloadAction<any>) => {
            return {
                ...state,
                getCategoriesStatus: RequestStatus.SUCCESS,
                categories: action.payload,
            }
        },
        getStoresLoaded: (state: AllCategoriesState) => {
            return {
                ...state,
                getStoreStatus: RequestStatus.IN_PROGRESS
            }
        },
        getStoresSuccess: (state: AllCategoriesState, action: PayloadAction<any>) => {
            return {
                ...state,
                getStoreStatus: RequestStatus.SUCCESS,
                stores: action.payload
            }
        }
    }
})
export const {
    getCategoriesLoaded,
    getCategoriesSuccess, getStoresLoaded
    , getStoresSuccess
} = allCategoriesSlice.actions;

export default allCategoriesSlice.reducer;