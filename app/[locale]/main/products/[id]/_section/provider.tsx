'use client';

import { productContainer } from "@/inversify/inversify.config";
import { TYPES } from "@/inversify/types";
import { RootState, store } from "@/redux/store";
import { ProductRepository } from "@/repositories/product-repository";
import { ReactNode, useEffect } from "react";
import { getProductDetails, isProductFavorite } from "../_redux/product-thunk";
import { useSession } from "next-auth/react";
import { useAppSelector } from "@/app/_hooks/redux_hooks";

export default function Provider({ id, children }: { id: string, children: ReactNode }) {
  const { data: sessionData } = useSession();
  const productState = useAppSelector((state: RootState) => { return state.product; })

  useEffect(() => {
    const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)

    store.dispatch(getProductDetails(productRepository, id))

  }, [id]);

  useEffect(() => {
    const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository);

    if (sessionData?.token) {
      store.dispatch(isProductFavorite(productRepository, sessionData.token))
    }
  }, [sessionData]);

  console.log('isLvoed', productState.isLoved)

  return (<>{children}</>)
}