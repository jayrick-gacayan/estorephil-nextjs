import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartState } from './cart-state';
import { RequestStatus } from '@/models/result';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import { Products } from '@/models/products';
import { Seller } from '@/models/seller';


const initialState: CartState = {
  cartCheckout: [],
  itemsSelected: [],
  purchaseMethodItems: [],
  purchaseMethodItemToInteract: undefined,
  getMainCartStatus: RequestStatus.WAITING
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    purchaseMethodItemsSet: (state: CartState, action: PayloadAction<Cart[] | BalikbayanBox[]>) => {
      return { ...state, purchaseMethodItems: action.payload };
    },
    isSelectAllSet: (state: CartState, action: PayloadAction<boolean>) => {
      return { ...state, isSelectAll: action.payload };
    },
    addToShopMethodItem: (state: CartState, action: PayloadAction<Cart | BalikbayanBox>) => {
      return {
        ...state,
        purchaseMethodItems: [...state.purchaseMethodItems, action.payload],
        purchaseMethodItemToInteract: action.payload
      };
    },
    removeFromToPurchaseMethodItem: (state: CartState, action: PayloadAction<Cart | BalikbayanBox>) => {

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
    productItemQuantitySet: (state: CartState, action: PayloadAction<{ product: Products; quantity: number; }>) => {
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
    productItemisGoingToCheckoutChanged: (state: CartState, action: PayloadAction<Cart | BalikbayanBox>) => {
      if (state.purchaseMethodItems.length > 0) {
        let existingData = state.purchaseMethodItems.find((purchaseMethod: Cart | BalikbayanBox) => {
          return purchaseMethod.product.id === action.payload.product.id
        });

        if (existingData) {
          existingData.isGoingToCheckout = !existingData.isGoingToCheckout;
        }
      }
    },
    isAllProductsGoingToCheckoutBySeller: (state: CartState, action: PayloadAction<{ seller: Seller; isAllGoingToCheckOut: boolean; }>) => {
      if (state.purchaseMethodItems.length > 0) {
        let { seller, isAllGoingToCheckOut } = action.payload;

        state.purchaseMethodItems = state.purchaseMethodItems.map((purchaseMethod: Cart | BalikbayanBox) => {
          return purchaseMethod.seller.id !== seller.id ? purchaseMethod :
            { ...purchaseMethod, isGoingToCheckout: !isAllGoingToCheckOut }
        });
      }
    },
    isSelectAllProductsGoingToCheckout: (state: CartState, action: PayloadAction<boolean>) => {
      if (state.purchaseMethodItems.length > 0) {
        state.purchaseMethodItems = state.purchaseMethodItems.map((purchaseMethod: Cart | BalikbayanBox) => {
          return { ...purchaseMethod, isGoingToCheckout: !action.payload }
        })
      }
    },
    getMainCartLoaded: (state: CartState) => {
      return {
        ...state,
        getMainCartStatus: RequestStatus.IN_PROGRESS
      }
    },
    getMainCartSuccess: (state: CartState, action: PayloadAction<any>) => {
      console.log('get cart main success slice', action.payload)
      return {
        ...state,
        getMainCartStatus: RequestStatus.SUCCESS,
        cartCheckout: action.payload,
      }
    }
  }

})

export const {
  getMainCartLoaded, isSelectAllProductsGoingToCheckout, isSelectAllSet, productItemQuantitySet,
  getMainCartSuccess, addToShopMethodItem, isAllProductsGoingToCheckoutBySeller, productItemisGoingToCheckoutChanged
  , purchaseMethodItemsSet, removeFromToPurchaseMethodItem
} = cartSlice.actions;

export default cartSlice.reducer;