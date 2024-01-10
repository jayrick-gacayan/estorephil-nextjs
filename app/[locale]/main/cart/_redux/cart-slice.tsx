import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartState } from './cart-state';


const initialState: CartState = {
  cartCheckout: [],
  itemsSelected: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  }

})

export const {

} = cartSlice.actions;

export default cartSlice.reducer;