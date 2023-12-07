'use client'

import { homeContainer } from "@/inversify/inversify.config"
import { TYPES } from "@/inversify/types"
import { RootState, store } from "@/redux/store"
import { HomeRepository } from "@/repositories/home-repository"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getMainProducts, getMainStores } from "../_redux/home-thunk"
import Product from "../_components/product"
import Loading from "../../_components/loading"
import { RequestStatus } from "@/models/result"


export default function Products() {
    const state = useSelector((state: RootState) => state.home)
    const products = state.products
    const mainState = useSelector((state: RootState) => state.main)
    const homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository)

    useEffect(() => {
        store.dispatch(getMainProducts(homeRepository, mainState.countryPicker.value))
        console.log('state stores', products)
    }, [])
    return (
        <div className='max-w-screen-2xl m-auto py-4 text-secondary'>
            <h1 className="font-[500] text-2xl">Our Products</h1>
            <div className="flex mb-2 gap-4">
                {state.getMainStoresStatus === RequestStatus.SUCCESS
                    ? (products.map((product, index) =>
                        <Product key={`products-${product.id}-${index}`} product={product} />
                    ))
                    : <Loading />

                }
            </div>

        </div>
    )
}