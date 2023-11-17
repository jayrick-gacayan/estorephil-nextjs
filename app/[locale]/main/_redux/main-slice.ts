import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MainState } from "./main_state";

const initialState: MainState = {
  shoppingMethod: '',
  modalProductDeliveryAddressInfo: {
    open: false,
    type: ''
  }
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    onShoppingMethodChanged: (state: MainState, action: PayloadAction<string>) => {
      return {
        ...state, shoppingMethod: action.payload
      };
    },
    onModalProductDeliveryAddressOpened: (state: MainState, action: PayloadAction<string>) => {
      return {
        ...state, modalProductDeliveryAddressInfo: {
          open: !state.modalProductDeliveryAddressInfo.open,
          type: action.payload
        }
      }
    }
  }
})

export const {
  onModalProductDeliveryAddressOpened,
  onShoppingMethodChanged
} = mainSlice.actions;

export default mainSlice.reducer;