'use client'
import { RootState, store } from "@/redux/store";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getStoreDetail } from "../_redux/store-thunk";
import { storeContainer } from "@/inversify/inversify.config";
import { StoreRepository } from "@/repositories/store-repository";
import { TYPES } from "@/inversify/types";

export default function Banner() {
    const state = useSelector((state: RootState) => state.store)
    const locale = useSelector((state: RootState) => state.main).countryPicker.value
    const storeId = useParams().id.toString()
    const storeRepository = storeContainer.get<StoreRepository>(TYPES.StoreRepository)
    useEffect(() => {
        if (!!storeId) {
            store.dispatch(getStoreDetail(storeRepository, storeId, locale))
            console.log('use effect dispatch')
        }
    }, [storeId])
    return (
        <>
            <div className='relative h-[230px] flex'>
                <div className='absolute top-0 left-0 w-full h-full'>
                    <Image alt='alt-banner-store-image'
                        src={state.store?.gallery?.banner_image_url}
                        className=''
                        fill
                    />
                </div>
                <div className='relative z-10 h-full w-full py-4'>
                    <div className='bg-white w-[120%] flex items-center h-full' style={{ clipPath: 'polygon(0 0, 35% 0, 30% 100%, 0% 100%)' }}>
                        <div className='max-w-screen-2xl flex items-center justify-center h-full w-[45%]'>
                            <div className='py-2 h-full flex items-center'>
                                <div className='flex items-center gap-4 h-full'>
                                    <div className='flex items-center w-32 h-full relative'>
                                        <Image alt={`store-image-alt-${state.store?.id}`}
                                            src={state.store?.gallery?.main_image_url}
                                            height={150}
                                            width={150}
                                        />
                                    </div>
                                    <div className='flex-none flex w-fit h-full flex-col justify-center'>
                                        <div className='flex flex-col '>
                                            <h3 className='p-0.5 font-semibold text-[24px] leading-0'>{state.store?.business_name}</h3>
                                            <div className='text-tertiary text-sm'>{state.store?.sales_count === 0 ? 'No Product/s yet.' : `${state.store?.product_count} Products`}</div>
                                            <div className='text-tertiary text-sm'>{state.store?.sales_count.toLocaleString()} Sales</div>
                                        </div>
                                        <div className='w-auto'>
                                            <button className='w-auto py-2 px-6 border border-danger text-danger'>
                                                FOLLOW
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}