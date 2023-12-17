import { RequestStatus } from "@/models/result";
import { ProductState } from "./product-state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState: ProductState = {
    getProductDetailsStatus: RequestStatus.WAITING,
    product: {},
    currentPreviewImage: {},
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

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
    getProductDetailsSuccess, previewImageChanged
} = productSlice.actions
export default productSlice.reducer