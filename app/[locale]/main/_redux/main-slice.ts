import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MainState } from "./main_state";

const initialState: MainState = {
  modalProductDeliveryAddressInfo: {
    open: false,
    type: ''
  }
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    onModalProductDeliveryAddressOpened: (state: MainState, action: PayloadAction<string>) => {
      state.modalProductDeliveryAddressInfo = {
        open: !state.modalProductDeliveryAddressInfo.open,
        type: action.payload
      }
    }
  }
})

export const { onModalProductDeliveryAddressOpened } = mainSlice.actions;

export default mainSlice.reducer;