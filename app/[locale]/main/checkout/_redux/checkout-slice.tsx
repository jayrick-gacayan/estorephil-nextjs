import { createSlice } from "@reduxjs/toolkit";
import { CheckoutState } from "./checkout-state";


export const initialState: CheckoutState = {
    checkoutProgress: 0,
}
export const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {

    }
})


export default checkoutSlice.reducer