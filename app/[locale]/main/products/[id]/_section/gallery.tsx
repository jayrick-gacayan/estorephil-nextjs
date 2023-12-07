'use client'
import Image from "next/image";
import { ProductPreviewImage } from "./product-image-preview";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/redux/store";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProductDetails } from "../_redux/product-thunk";
import { productContainer } from "@/inversify/inversify.config";
import { ProductRepository } from "@/repositories/product-repository";
import { TYPES } from "@/inversify/types";
import { previewImageChanged } from "../_redux/product-slice";

export default function Gallery() {
    const state = useSelector((state: RootState) => state.product)
    const images = state.product.gallery
    const productId = useParams().id.toString()
    const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!!productId) {
            store.dispatch(getProductDetails(productRepository, productId))
        }
    }, [productId])
    console.log('first image', state.currentPreviewImage)
    console.log('images', images)
    return (
        <>
            <div className='basis-1/2 py-6 px-8 '>
                <div className='flex flex-col gap-y-4 h-full'>
                    <div className='flex-1 relative overflow-hidden justify-center items-center'>
                        <Image
                            alt={`current-product-${state.currentPreviewImage.id}-${state.currentPreviewImage?.id}`}
                            src={state.currentPreviewImage?.image_url}
                            height={516}
                            width={574}
                            className='transition-all duration-100 hover:scale-150 m-auto' />
                    </div>
                    <div className='flex-none h-36'>
                        <div className='flex gap-4 flex-nowrap overflow-hidden w-full'>
                            {
                                images?.map((i: any, index: number) => {
                                    return (
                                        <div key={`preview-product-image-${i.id}-${index}`}
                                            className={`w-32 shadow-lg cursor-pointer overflow-hidden ${i.id === state.currentPreviewImage?.id ? `border border-primary rounded` : ``}`}
                                            onClick={() => { dispatch(previewImageChanged(i)) }}>
                                            <div className='w-32 h-32 relative overflow-hidden'>
                                                <Image
                                                    alt={i.id}
                                                    src={i.image_url}
                                                    fill
                                                    className='transition duration-100 object-fill hover:scale-150' />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}