'use client';

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Store from "../_components/store";

export default function CartItemsContainer() {
  const state = useSelector((state: RootState) => state.cart)
  
  return (
    <>{
      state.cartCheckout.length > 0
        ? (
          <>
            {state.cartCheckout.map((store, index) => <><Store store={store} /></>)}
          </>
        )
        : (<>No items found</>)
    }
    </>
  )
}