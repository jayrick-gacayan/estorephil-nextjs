import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MainState } from "./main-state";

const initialState: MainState = {
  purchaseMethod: '',
  modalProductDeliveryAddressInfo: {
    open: false,
    type: ''
  },
  countryPicker: {
    value: 'ph',
    show: false
  },
  deliveryAddressCity: '',
  deliveryAddressCountry: ''
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
    },
    openCountryPicker: (state: MainState) => {
      return {
        ...state,
        countryPicker: {
          ...state.countryPicker,
          value: state.countryPicker.value,
          show: true,
        }
      }
    },
    closeCountryPicker: (state: MainState) => {
      return {
        ...state,
        countryPicker: {
          ...state.countryPicker,
          value: state.countryPicker.value,
          show: false,
        }
      }
    },
    countryPickerValueChanged: (state: MainState, action: PayloadAction<string>) => {
      console.log('country picked', action.payload)
      return {
        ...state,
        countryPicker: {
          ...state.countryPicker,
          value: action.payload
        }
      }
    },
    deliveryAddressCountryChanged: (state: MainState, action: PayloadAction<string>) => {
      return {
        ...state,
        deliveryAddressCountry: action.payload,
      }
    },
    deliveryAddressCityChanged: (state: MainState, action: PayloadAction<string>) => {
      return {
        ...state,
        deliveryAddressCity: action.payload
      }
    }
  }
})

export const {
  modalProductDeliveryAddressOpened,
  purchaseMethodChanged, closeCountryPicker, countryPickerValueChanged,
  openCountryPicker, deliveryAddressCityChanged, deliveryAddressCountryChanged
} = mainSlice.actions;

export default mainSlice.reducer;