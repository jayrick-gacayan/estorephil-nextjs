'use client';

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function CartItemsContainer() {
  const state = useSelector((state: RootState) => state.cart)
  return (
    <>{
      state.cartCheckout.length > 0
        ? (<></>)
        : (<></>)
    }
    </>
  )
}