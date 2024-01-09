'use client';

import { useAppDispatch } from "@/app/_hooks/redux_hooks";
import { productContainer } from "@/inversify/inversify.config";
import { TYPES } from "@/inversify/types";
import { AppDispatch } from "@/redux/store";
import { ProductRepository } from "@/repositories/product-repository";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { getAllFavorites } from "../_redux/agent-favorite-thunk";

export default function Providers({ children }: { children: ReactNode }) {
  const dispatch: AppDispatch = useAppDispatch();
  const { data: sessionData } = useSession();

  useEffect(() => {
    if (sessionData?.token) {
      let productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository);
      dispatch(getAllFavorites(productRepository, sessionData.token));
    }
  }, [sessionData?.token, dispatch])

  return (<>{children}</>)
}