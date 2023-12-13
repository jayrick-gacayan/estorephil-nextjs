import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MainState } from "./main-state";
import { RequestStatus } from "@/models/result";

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
  cart: {},
  cartType: '',
  deliveryType: '',
  deliveryAddressCity: '',
  deliveryAddressCountry: '',
  setCartStatus: RequestStatus.WAITING
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setCartLoaded: (state: MainState) => {
      return {
        ...state,
        setCartStatus: RequestStatus.IN_PROGRESS
      }
    },
    cartTypeChanged: (state: MainState, action: PayloadAction<string>) => {
      return {
        ...state,
        cartType: action.payload,
      }
    },
    deliveryTypeChanged: (state: MainState, action: PayloadAction<string>) => {
      return {
        ...state,
        deliveryTypeChanged: action.payload
      }
    },
    setCartSuccess: (state: MainState, action: PayloadAction<any>) => {
      return {
        ...state,
        setCartStatus: RequestStatus.SUCCESS,
        cart: action.payload
      }
    },
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
  openCountryPicker, deliveryAddressCityChanged, deliveryAddressCountryChanged,
  cartTypeChanged, deliveryTypeChanged, setCartLoaded, setCartSuccess
} = mainSlice.actions;

export default mainSlice.reducer;