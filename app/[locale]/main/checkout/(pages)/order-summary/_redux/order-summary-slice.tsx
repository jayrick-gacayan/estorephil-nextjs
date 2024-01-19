import { RequestStatus } from "@/models/result";
import { OrderSummaryState } from "./order-summary-state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState: OrderSummaryState = {
    orderStores: [],
    getAgentOrderStatus: RequestStatus.WAITING
}
export const orderSummarySlice = createSlice({
    name: "orderSummary",
    initialState,
    reducers: {
        getAgentOrderLoaded: (state: OrderSummaryState) => {
            return {
                ...state,
                getAgentOrderStatus: RequestStatus.IN_PROGRESS
            }
        },
        getAgentOrderSuccess: (state: OrderSummaryState, action: PayloadAction<any>) => {
            return {
                ...state,
                getAgentOrderStatus: RequestStatus.SUCCESS,
                orderStores: action.payload
            }
        }
    }
})
export const {
    getAgentOrderLoaded, getAgentOrderSuccess

} = orderSummarySlice.actions;
export default orderSummarySlice.reducer