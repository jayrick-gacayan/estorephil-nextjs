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
    shoppingMethodChanged: (state: MainState, action: PayloadAction<string>) => {
      return {
        ...state, shoppingMethod: action.payload
      };
    },
    modalProductDeliveryAddressOpened: (state: MainState, action: PayloadAction<{ type: string; open: boolean }>) => {
      const { open, type } = action.payload;
      return {
        ...state, modalProductDeliveryAddressInfo: {
          open,
          type
        }
      }
    }
  }
})

export const {
  modalProductDeliveryAddressOpened,
  shoppingMethodChanged
} = mainSlice.actions;

export default mainSlice.reducer;