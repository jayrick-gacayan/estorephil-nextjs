import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CheckoutState } from "./checkout-state";
import { RequestStatus } from "@/models/result";

export const initialState: CheckoutState = {
    checkoutProgress: 0,
    order: {},
    createOrderStatus: RequestStatus.WAITING,
    checkoutStatus: RequestStatus.WAITING,
    getAgentOrder: RequestStatus.WAITING,
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
                order: action.payload,
                createOrderStatus: RequestStatus.SUCCESS
            }
        },
        createOrderFailed: (state: CheckoutState) => {
            return {
                ...state,
                createOrderStatus: RequestStatus.FAILURE,
            }
        },
        checkoutLoaded: (state: CheckoutState) => {
            return {
                ...state,
                checkoutStatus: RequestStatus.IN_PROGRESS
            }
        },
        checkoutSuccess: (state: CheckoutState) => {
            return {
                ...state,
                checkoutStatus: RequestStatus.SUCCESS
            }
        },

    }
})
export const {
    createOrderLoaded, createOrderSuccess,
    createOrderFailed, checkoutLoaded,
    checkoutSuccess

} = checkoutSlice.actions;

export default checkoutSlice.reducer