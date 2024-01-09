import { RequestStatus } from "@/models/result";
import { ProductState } from "./product-state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RequestStatus as MyRequestStatus } from '@/types/enums/request-status';

export const initialState: ProductState = {
    getProductDetailsStatus: RequestStatus.WAITING,
    isLoved: undefined,
    product: {},
    currentPreviewImage: {},
    getIsLovedLoadStatus: MyRequestStatus.NONE
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productFavoriteSet: (state: ProductState, action: PayloadAction<boolean | undefined>) => {
            return {
                ...state,
                isLoved: action.payload
            }
        },
        getProductDetailsLoaded: (state: ProductState) => {
            return {
                ...state,
                getProductDetailsStatus: RequestStatus.IN_PROGRESS,
            }
        },
        getProductDetailsSuccess: (state: ProductState, action: PayloadAction<any>) => {
            return {
                ...state,
                getProductDetailsStatus: RequestStatus.IN_PROGRESS,
                product: action.payload,
                currentPreviewImage: action.payload.gallery[0]
            }
        },
        getIsLovedLoadStatusSet: (state: ProductState, action: PayloadAction<MyRequestStatus>) => {
            return {
                ...state,
                getIsLovedLoadStatus: action.payload
            }
        },
        previewImageChanged: (state: ProductState, action: PayloadAction<any>) => {
            return {
                ...state,
                currentPreviewImage: action.payload
            }
        }
    }
})

export const {
    getProductDetailsLoaded,
    getProductDetailsSuccess,
    previewImageChanged,
    productFavoriteSet,
    getIsLovedLoadStatusSet
} = productSlice.actions
export default productSlice.reducer