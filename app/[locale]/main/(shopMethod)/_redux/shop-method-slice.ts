import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ShopMethodState } from './shop-method-state';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';

const initialState: ShopMethodState = {
  shopMethodItems: []
}

export const shopMethodSlice = createSlice({
  name: 'shopMethod',
  initialState,
  reducers: {
    shopMethodItemsSet: (state: ShopMethodState, action: PayloadAction<Cart[] | BalikbayanBox[]>) => {
      return {
        ...state, shopMethodItems: action.payload
      };
    },
  }
})

export const {
  shopMethodItemsSet
} = shopMethodSlice.actions;

export default shopMethodSlice.reducer;