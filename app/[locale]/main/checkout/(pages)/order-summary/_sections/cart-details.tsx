'use client';
;
import { RootState } from '@/redux/store';
import Image from 'next/image';
import { OrderSummaryState } from '../_redux/order-summary-state';
import { useAppSelector } from '@/app/_hooks/redux_hooks';
import { useMemo } from 'react';

export default function CartDetails() {
    const orderSummaryState: OrderSummaryState = useAppSelector((state: RootState) => {
        return state.orderSummary
    })

    const stores = useMemo(() => {
        return orderSummaryState.orderStores;
    }, [orderSummaryState.orderStores]);

    return (
        <div className='space-y-8'>
            {
                stores.map(({ details, products }: any, index) => {
                    return (
                        <div className="border shadow-md mb-8" key={index}>
                            <div className="bg-[#f8f5e5] flex items-center justify-between px-2 py-4 gap-4">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="flex items-center gap-4">
                                        <Image src={`${details.image_url ?? `/sellers/asianhome.png`}`}
                                            alt={`image-${details.id}`} width={48} height={48} quality={100} priority
                                            className='w-12 h-12' />
                                        <h1 className="text-slate-800">{details.name}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white'>
                                <table className="border-collapse w-full">
                                    <thead>
                                        <tr className="text-gray-400 text-sm font-light text-left">
                                            <th className="w-[150px] p-4">Image</th>
                                            <th className="w-auto p-4">Product Name</th>
                                            <th className="w-[200px] p-4">Price</th>
                                            <th className="w-[200px] p-4">Quantity</th>
                                            <th className="w-[140px] p-4">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product: any, index: number) =>
                                            <tr className="text-left" key={index}>
                                                <th className="w-[150px] p-4">
                                                    <Image alt={`${product.name}`}
                                                        src={`${product.image_url ?? `https://www.odnetwork.org/global_graphics/default-store-350x350.jpg`}`}
                                                        width={50} height={50} />
                                                </th>
                                                <th className="w-auto p-4">{product.name}</th>
                                                <th className="w-[200px] p-4">{product.price}</th>
                                                <th className="w-[200px] p-4">{product.quantity}
                                                </th>
                                                <th className="w-[140px] p-4">{product.quantity * product.price}</th>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}