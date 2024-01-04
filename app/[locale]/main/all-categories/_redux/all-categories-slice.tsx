import { RequestStatus } from "@/types/enums/request-status";
import { AllCategoriesState } from "./all-categories-state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Categories } from "@/models/category";
import { Store } from '@/models/store'
import { Product } from "@/models/product";

const initialState: AllCategoriesState = {
    categories: [],
    getCategoriesStatus: RequestStatus.NONE,
    getStoreStatus: RequestStatus.WAITING,
    stores: [],
    products: [],
    getProductsStatus: RequestStatus.NONE,
    categoriesSelected: [],
    sort: '',
    searchQuery:'',
}

export const allCategoriesSlice = createSlice({
    name: 'allCategories',
    initialState,
    reducers: {
        categoriesRequestStatusSet: (state: AllCategoriesState, action: PayloadAction<RequestStatus>) => {
            return { ...state, getCategoriesStatus: action.payload }
        },
        allCategoriesSet: (state: AllCategoriesState, action: PayloadAction<Categories[]>) => {
            return { ...state, categories: action.payload }
        },
        storesRequestStatusSet: (state: AllCategoriesState, action: PayloadAction<RequestStatus>) => {
            return { ...state, getStoreStatus: action.payload }
        },
        allCategoriesStoresSet: (state: AllCategoriesState, action: PayloadAction<Store[]>) => {
            return { ...state, stores: action.payload }
        },
        getProductStatusSet: (state: AllCategoriesState, action: PayloadAction<RequestStatus>) => {
            return { ...state, getProductsStatus: action.payload }
        },
        allCategoriesProductsSet: (state: AllCategoriesState, action: PayloadAction<Product[]>) => {
            return { ...state, products: action.payload }
        },
        sortChanged: (state: AllCategoriesState, action: PayloadAction<string>) => {
            return { ...state, sort: action.payload }
        },

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
        setSelectedCategory: (state: AllCategoriesState, action: PayloadAction<string>) => {
            return {
                ...state,
                categoriesSelected: [...state.categoriesSelected,action.payload]
            }
        }

    }
})
export const {
    categoriesRequestStatusSet,
    allCategoriesSet,getStoresLoaded,
    storesRequestStatusSet,getStoresSuccess,
    allCategoriesStoresSet,sortChanged,getProductStatusSet,
    allCategoriesProductsSet,getCategoriesLoaded,getCategoriesSuccess,
    categoriesSelectedChanged,getProductsSuccess,searchQueryChanged,setSelectedCategory
} = allCategoriesSlice.actions;

export default allCategoriesSlice.reducer;