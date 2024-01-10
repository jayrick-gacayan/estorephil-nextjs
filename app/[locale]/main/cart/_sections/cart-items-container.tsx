'use client';

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Store from "../_components/store";

export default function CartItemsContainer() {
  const state = useSelector((state: RootState) => state.cart)
  console.log('state cart cart items container: ', state.cartCheckout, state.cartCheckout.length > 0)
  return (
    <>{
      state.cartCheckout.length > 0
        ? (
          <> 23212313
            {state.cartCheckout.map((store, index) => <><Store store={store} /></>)}
          </>
        )
        : (<>123131</>)
    }
    </>
  )
}