import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RequestStatus } from "@/models/result";
import { MainState } from "./main-state";

const initialState: MainState = {
  isToChange: false,
  mainModalInfo: {
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
  addToCartQuantity: 0,
  addToCartStatus: RequestStatus.WAITING,
  removeFromCartStatus: RequestStatus.WAITING,
  setCartStatus: RequestStatus.WAITING
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    isToChangeSet: (state: MainState, action: PayloadAction<boolean>) => {
      return { ...state, isToChange: action.payload }
    },
    setCartLoaded: (state: MainState) => {
      return {
        ...state,
        setCartStatus: RequestStatus.IN_PROGRESS
      }
    },
    addToCartLoaded: (state: MainState) => {
      return {
        ...state,
        addToCartStatus: RequestStatus.IN_PROGRESS,
      }
    },
    removeFromCartLoaded: (state: MainState) => {
      return {
        ...state,
        removeFromCartStatus: RequestStatus.IN_PROGRESS
      }
    },
    addToCartQuantityChanged: (state: MainState, action: PayloadAction<any>) => {
      return {
        ...state,
        addToCartQuantity: action.payload
      }
    },
    addToCartSuccess: (state: MainState, action: PayloadAction<any>) => {
      return {
        ...state,
        addToCartStatus: RequestStatus.SUCCESS,
        cart: action.payload
      }
    },
    removeFromCartSuccess: (state: MainState, action: PayloadAction<any>) => {
      return {
        ...state,
        removeFromCartStatus: RequestStatus.SUCCESS,
        cart: action.payload
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

    mainModalOpened: (state: MainState, action: PayloadAction<{ type: string; open: boolean }>) => {
      const { open, type } = action.payload;
      return {
        ...state,
        mainModalInfo: { open, type }
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
  mainModalOpened,
  isToChangeSet, addToCartLoaded,
  closeCountryPicker, addToCartSuccess,
  countryPickerValueChanged, removeFromCartLoaded,
  openCountryPicker, removeFromCartSuccess, addToCartQuantityChanged,
  deliveryAddressCityChanged,
  deliveryAddressCountryChanged,
  cartTypeChanged,
  deliveryTypeChanged,
  setCartLoaded,
  setCartSuccess
} = mainSlice.actions;

export default mainSlice.reducer;