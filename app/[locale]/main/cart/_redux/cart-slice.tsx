import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartState } from './cart-state';
import { RequestStatus } from '@/models/result';


const initialState: CartState = {
  cartCheckout: [],
  itemsSelected: [],
  getMainCartStatus: RequestStatus.WAITING
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getMainCartLoaded: (state: CartState) => {
      return {
        ...state,
        getMainCartStatus: RequestStatus.IN_PROGRESS
      }
    },
    getMainCartSuccess: (state: CartState, action: PayloadAction<any>) => {
      return {
        ...state,
        getMainCartStatus: RequestStatus.SUCCESS,
        cartCheckout: action.payload,
      }
    }
  }

})

export const {
  getMainCartLoaded
  , getMainCartSuccess
} = cartSlice.actions;

export default cartSlice.reducer;