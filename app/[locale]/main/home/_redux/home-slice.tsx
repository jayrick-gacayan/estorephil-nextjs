import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HomeState } from "./home-state";
import { RequestStatus } from "@/models/result";

const initialState: HomeState = {
    categories: [{}],
    getMainCategoriesStatus: RequestStatus.WAITING
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
            console.log('action payload: ', action.payload)
            return {
                ...state,
                categories: action.payload,
                getMainCategoriesStatus: RequestStatus.SUCCESS
            }
        }
    }
})

export const {
    getMainCategoriesLoaded,
    getMainCategoriesSuccess
} = homeSlice.actions;

export default homeSlice.reducer;