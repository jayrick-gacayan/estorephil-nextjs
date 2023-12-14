import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CourierDeliveryRatesState } from "./courier-delivery-rates-state";

const initialState: CourierDeliveryRatesState = {
  deliveryRateType: 'Normal Cargo'
}

export const courierDeliveryRatesSlice = createSlice({
  name: 'courierDeliveryRates',
  initialState,
  reducers: {
    deliveryRatesTypeChanged: (state: CourierDeliveryRatesState, action: PayloadAction<string>) => {
      return { ...state, deliveryRateType: action.payload };
    }
  }
})

export const {
  deliveryRatesTypeChanged
} = courierDeliveryRatesSlice.actions;

export default courierDeliveryRatesSlice.reducer;