import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MainState } from "./main_state";

const initialState: MainState = {
  purchaseMethod: '',
  modalProductDeliveryAddressInfo: {
    open: false,
    type: ''
  }
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    purchaseMethodChanged: (state: MainState, action: PayloadAction<string>) => {
      return {
        ...state, purchaseMethod: action.payload
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
  purchaseMethodChanged,
} = mainSlice.actions;

export default mainSlice.reducer;