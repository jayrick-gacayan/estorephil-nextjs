import { RequestStatus } from "@/models/result";
import { AllCategoriesState } from "./all-categories-state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AllCategoriesState = {
    categories: [{}],
    products: [{}],
    stores: [{}],
    categoriesSelected: [],
    sort: undefined,
    searchQuery: undefined,
    getStoreStatus: RequestStatus.WAITING,
    getCategoriesStatus: RequestStatus.WAITING,
    getProductsStatus: RequestStatus.WAITING
}

export const allCategoriesSlice = createSlice({
    name: 'allCategories',
    initialState,
    reducers: {
        categoriesSelectedChanged: (state: AllCategoriesState, action: PayloadAction<string>) => {

            return {
                ...state,
                categoriesSelected: state.categoriesSelected.includes(action.payload) ?
                    state.categoriesSelected.filter((category) => {
                        return category !== action.payload;
                    }) : [...state.categoriesSelected, action.payload]
            }
        },
        getCategoriesLoaded: (state: AllCategoriesState) => {
            return {
                ...state,
                getCategoriesStatus: RequestStatus.IN_PROGRESS
            }
        },
        getProductsLoaded: (state: AllCategoriesState, action: PayloadAction<any>) => {
            return {
                ...state,
                getProductsStatus: RequestStatus.IN_PROGRESS
            }
        },
        getProductsSuccess: (state: AllCategoriesState, action: PayloadAction<any>) => {
            return {
                ...state,
                getProductsStatus: RequestStatus.SUCCESS,
                products: action.payload
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
        },
        searchQueryChanged: (state: AllCategoriesState, action: PayloadAction<string>) => {
            return {
                ...state,
                searchQuery: action.payload
            }
        },
        sortChanged: (state: AllCategoriesState, action: PayloadAction<string>) => {
            return {
                ...state,
                sort: action.payload
            }
        }
    }
})
export const {
    getCategoriesLoaded,
    getCategoriesSuccess, getStoresLoaded
    , getStoresSuccess, categoriesSelectedChanged
    , getProductsLoaded, getProductsSuccess, sortChanged,
    searchQueryChanged
} = allCategoriesSlice.actions;

export default allCategoriesSlice.reducer;