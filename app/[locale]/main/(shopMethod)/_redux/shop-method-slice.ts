import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ShopMethodState } from './shop-method-state';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import { Product } from '@/models/product';

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
    },
    removeFromToShopMethodItem: (state: ShopMethodState, action: PayloadAction<Cart | BalikbayanBox>) => {
      console.log('I am here remove Item');
      if (state.shopMethodItems.length > 0) {
        let { product } = action.payload;
        let existingData = state.shopMethodItems.find((shopMethodItem: Cart | BalikbayanBox) => {
          return shopMethodItem.product.id === product.id;
        });

        if (existingData) {
          state.shopMethodItems = state.shopMethodItems.filter((shopMethodItem: Cart | BalikbayanBox) => {
            return existingData?.product.id !== shopMethodItem.product.id;
          });
        }
      }
    },
    productItemQuantitySet: (state: ShopMethodState, action: PayloadAction<{ product: Product; quantity: number; }>) => {
      if (state.shopMethodItems.length > 0) {
        const { product, quantity } = action.payload;
        let existingData = state.shopMethodItems.find((shopMethod: Cart | BalikbayanBox) => {
          return shopMethod.product.id === product.id
        })

        if (existingData) {
          existingData.quantity = quantity;
          existingData.total = quantity * product.price;
        }
      }
    }
  }
})

export const {
  shopMethodItemsSet,
  isSelectAllSet,
  addToShopMethodItem,
  removeFromToShopMethodItem,
  productItemQuantitySet
} = shopMethodSlice.actions;

export default shopMethodSlice.reducer;