'use client';

import { productContainer } from "@/inversify/inversify.config";
import { TYPES } from "@/inversify/types";
import { AppDispatch, RootState } from "@/redux/store";
import { ProductRepository } from "@/repositories/product-repository";
import { ReactNode, useEffect } from "react";
import { getProductDetails, isProductFavorite } from "../_redux/product-thunk";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { RequestStatus } from "@/types/enums/request-status";
import { getIsLovedLoadStatusSet } from "../_redux/product-slice";

export default function Provider({ id, children }: { id: string, children: ReactNode }) {
  const { data: sessionData } = useSession();
  const dispatch: AppDispatch = useAppDispatch();
  const productState = useAppSelector((state: RootState) => { return state.product; })

  useEffect(() => {
    const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)

    dispatch(getProductDetails(productRepository, id))

  }, [id]);

  useEffect(() => {
    const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository);
    dispatch(getIsLovedLoadStatusSet(RequestStatus.WAITING));
    dispatch(getIsLovedLoadStatusSet(RequestStatus.IN_PROGRESS));
    if (sessionData?.token) {
      dispatch(isProductFavorite(productRepository, sessionData.token))
    }
  }, [sessionData]);

  console.log('isLvoed', productState.isLoved)

  return (<>{children}</>)
}