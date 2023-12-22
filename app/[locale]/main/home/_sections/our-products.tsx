'use client'

import { AppDispatch, RootState } from '@/redux/store'
import ProductHeaderText from '../../_components/product-header-text'
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks'
import { MainState } from '../../_redux/main-state'
import { HomeState } from '../_redux/home-state'
import { useEffect, useMemo } from 'react'
import { Product } from '@/models/product'
import { TextInputField } from '@/types/props/text-input-field'
import { RequestStatus } from '@/types/enums/request-status'
import { ourProductsRequestStatusSet } from '../_redux/home-slice'
import { productContainer } from '@/inversify/inversify.config'
import { ProductRepository } from '@/repositories/product-repository'
import { TYPES } from '@/inversify/types'
import { getOurProducts } from '../_redux/home-thunk'
import Loading from '../../_components/loading'

export default function OurProducts({
    products
}: {
    products: Product[]
}) {

    return (
        <div className='max-w-screen-2xl m-auto py-4'>
            <div className='flex mb-2'>
                <ProductHeaderText text='Our Products' />
            </div>
            <div className='flex mb-2 gap-4'>
                {
                    products.length === 0 ? (<div>NO product</div>) :
                        (
                            <>
                                {
                                    products.map((product: Product, index: number) => {
                                        return <></>
                                    })
                                }
                            </>
                        )
                }
            </div>
        </div>
    )
}