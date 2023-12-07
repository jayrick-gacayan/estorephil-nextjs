import { RequestStatus } from "@/models/result";
import { StoreState } from "./store-state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState: StoreState = {
    getStoreDetailsStatus: RequestStatus.WAITING,
    store: {},
    products: [{}],
}

export const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        getStoreDetailsLoaded: (state: StoreState) => {
            return {
                ...state,
                getStoreDetailsStatus: RequestStatus.IN_PROGRESS
            }
        },
        getStoreDetailsSuccess: (state: StoreState, action: PayloadAction<any>) => {
            return {
                ...state,
                store: action.payload.store,
                products: action.payload.products
            }
        }
    }
})
export const {
    getStoreDetailsLoaded,
    getStoreDetailsSuccess
} = storeSlice.actions
export default storeSlice.reducer