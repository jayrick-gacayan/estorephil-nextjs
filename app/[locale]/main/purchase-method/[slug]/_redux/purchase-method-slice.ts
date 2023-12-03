import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PurchaseMethodState } from './purchase-method-state';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import { Product } from '@/models/product';
import { Seller } from '@/models/seller';

const initialState: PurchaseMethodState = {
  purchaseMethodItems: [],
  purchaseMethodItemToInteract: undefined,
}

export const shopMethodSlice = createSlice({
  name: 'purchaseMethod',
  initialState,
  reducers: {
    purchaseMethodItemsSet: (state: PurchaseMethodState, action: PayloadAction<Cart[] | BalikbayanBox[]>) => {
      return { ...state, purchaseMethodItems: action.payload };
    },
    isSelectAllSet: (state: PurchaseMethodState, action: PayloadAction<boolean>) => {
      return { ...state, isSelectAll: action.payload };
    },
    addToShopMethodItem: (state: PurchaseMethodState, action: PayloadAction<Cart | BalikbayanBox>) => {
      return {
        ...state,
        purchaseMethodItems: [...state.purchaseMethodItems, action.payload],
        purchaseMethodItemToInteract: action.payload
      };
    },
    removeFromToPurchaseMethodItem: (state: PurchaseMethodState, action: PayloadAction<Cart | BalikbayanBox>) => {

      if (state.purchaseMethodItems.length > 0) {
        let { product } = action.payload;
        let existingData = state.purchaseMethodItems.find((purchaseMethodItem: Cart | BalikbayanBox) => {
          return purchaseMethodItem.product.id === product.id;
        });

        if (existingData) {
          state.purchaseMethodItemToInteract = existingData;
          state.purchaseMethodItems = state.purchaseMethodItems.filter((purchaseMethodItem: Cart | BalikbayanBox) => {
            return existingData?.product.id !== purchaseMethodItem.product.id;
          });
        }
      }
    },
    productItemQuantitySet: (state: PurchaseMethodState, action: PayloadAction<{ product: Product; quantity: number; }>) => {
      if (state.purchaseMethodItems.length > 0) {
        const { product, quantity } = action.payload;
        let existingData = state.purchaseMethodItems.find((purchaseMethod: Cart | BalikbayanBox) => {
          return purchaseMethod.product.id === product.id
        })

        if (existingData) {
          existingData.quantity = quantity;
          existingData.total = quantity * product.price;
        }
      }
    },
    productItemisGoingToCheckoutChanged: (state: PurchaseMethodState, action: PayloadAction<Cart | BalikbayanBox>) => {
      if (state.purchaseMethodItems.length > 0) {
        let existingData = state.purchaseMethodItems.find((purchaseMethod: Cart | BalikbayanBox) => {
          return purchaseMethod.product.id === action.payload.product.id
        });

        if (existingData) {
          existingData.isGoingToCheckout = !existingData.isGoingToCheckout;
        }
      }
    },
    isAllProductsGoingToCheckoutBySeller: (state: PurchaseMethodState, action: PayloadAction<{ seller: Seller; isAllGoingToCheckOut: boolean; }>) => {
      if (state.purchaseMethodItems.length > 0) {
        let { seller, isAllGoingToCheckOut } = action.payload;

        state.purchaseMethodItems = state.purchaseMethodItems.map((purchaseMethod: Cart | BalikbayanBox) => {
          return purchaseMethod.seller.id !== seller.id ? purchaseMethod :
            { ...purchaseMethod, isGoingToCheckout: !isAllGoingToCheckOut }
        });
      }
    },
    isSelectAllProductsGoingToCheckout: (state: PurchaseMethodState, action: PayloadAction<boolean>) => {
      if (state.purchaseMethodItems.length > 0) {
        state.purchaseMethodItems = state.purchaseMethodItems.map((purchaseMethod: Cart | BalikbayanBox) => {
          return { ...purchaseMethod, isGoingToCheckout: !action.payload }
        })
      }
    }
  },

})

export const {
  purchaseMethodItemsSet,
  isSelectAllSet,
  addToShopMethodItem,
  removeFromToPurchaseMethodItem,
  productItemQuantitySet,
  productItemisGoingToCheckoutChanged,
  isAllProductsGoingToCheckoutBySeller,
  isSelectAllProductsGoingToCheckout
} = shopMethodSlice.actions;

export default shopMethodSlice.reducer;