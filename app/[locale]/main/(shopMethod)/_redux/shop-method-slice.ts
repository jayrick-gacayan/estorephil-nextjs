import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ShopMethodState } from './shop-method-state';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';

const initialState: ShopMethodState = {
  shopMethodItems: [],
  isSelectAll: false,
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
    isSelectAllSet: (state: ShopMethodState, action: PayloadAction<boolean>) => {
      return {
        ...state, isSelectAll: action.payload
      }
    },
    addToShopMethodItem: (state: ShopMethodState, action: PayloadAction<Cart | BalikbayanBox>) => {
      return {
        ...state,
        shopMethodItems: [...state.shopMethodItems, action.payload]
      }
    }
  }
})

export const {
  shopMethodItemsSet,
  isSelectAllSet,
  addToShopMethodItem,
} = shopMethodSlice.actions;

export default shopMethodSlice.reducer;