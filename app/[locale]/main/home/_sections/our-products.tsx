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

export default function OurProducts() {
    const dispatch: AppDispatch = useAppDispatch();
    const mainState: MainState = useAppSelector((state: RootState) => { return state.main; });
    const homeState: HomeState = useAppSelector((state: RootState) => { return state.home; })

    let ourProducts: Product[] = useMemo(() => { return homeState.ourProducts }, [homeState.ourProducts])
    let countryPicker: TextInputField<string> = useMemo(() => {
        return mainState.countryPicker;
    }, [mainState.countryPicker]);
    let ourProductsStatus = useMemo(() => {
        return homeState.getOurProductsStatus
    }, [homeState.getOurProductsStatus]);

    useEffect(() => {
        switch (ourProductsStatus) {
            case RequestStatus.NONE:
                dispatch(ourProductsRequestStatusSet(RequestStatus.WAITING));
                break;
            case RequestStatus.WAITING:
                dispatch(ourProductsRequestStatusSet(RequestStatus.IN_PROGRESS));
                break;
            case RequestStatus.IN_PROGRESS:
                const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository);
                dispatch(getOurProducts(productRepository, countryPicker.value))
                break;
        }
    }, [ourProductsStatus, dispatch, countryPicker.value]);

    return (
        <div className='max-w-screen-2xl m-auto py-4'>
            <div className='flex mb-2'>
                <ProductHeaderText text='Our Products' />
            </div>
            <div className='flex mb-2 gap-4'>
                {
                    ourProductsStatus === RequestStatus.SUCCESS ?
                        ourProducts.map((product: Product, index: number) => {
                            return <></>
                        }) :
                        ourProductsStatus === RequestStatus.FAILURE ?
                            (<div>No Products.</div>) : (<Loading />)
                }
            </div>
        </div>
    )
}