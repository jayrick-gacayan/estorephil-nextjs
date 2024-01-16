import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CheckoutState } from "./checkout-state";
import { RequestStatus } from "@/models/result";


export const initialState: CheckoutState = {
    checkoutProgress: 0,
    orderId: null,
    createOrderStatus: RequestStatus.WAITING,
    updateOrderSenderStatus: RequestStatus.WAITING,
    updateOrderReceiverStatus: RequestStatus.WAITING,
}
export const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        createOrderLoaded: (state: CheckoutState) => {
            return {
                ...state,
                createOrderStatus: RequestStatus.IN_PROGRESS
            }
        },
        createOrderSuccess: (state: CheckoutState, action: PayloadAction<any>) => {
            return {
                ...state,
                orderId: action.payload,
                createOrderStatus: RequestStatus.SUCCESS
            }
        },
        createOrderFailed: (state: CheckoutState) => {
            return {
                ...state,
                createOrderStatus: RequestStatus.FAILURE,
            }
        }
    }
})
export const {
    createOrderLoaded, createOrderSuccess,
    createOrderFailed

} = checkoutSlice.actions;

export default checkoutSlice.reducer