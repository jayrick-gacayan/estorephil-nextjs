'use client'
import { RootState } from "@/redux/store";
import { BreadcrumbProps } from "@/types/props/breadcrumb-props";
import Link from "next/link";
import { BiCheckShield } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { RiRefund2Fill, RiShipLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Breadcrumbs } from "../../../_components/bread-crumbs";
import product from "../../../home/_components/product";
import ProductButtonsContainer from "./product-buttons-container";
import Image from "next/image";

export default function Details() {
    const state = useSelector((state: RootState) => state.product)
    const product = state.product
    let breadCrumbsItems: BreadcrumbProps[] = [
        { link: '/all-categories', text: product.category },
        { link: ``, text: product.name }
    ];

    return (
        <>
            <div className='basis-1/2 py-6 px-16 space-y-4'>
                <Breadcrumbs breadcrumbs={breadCrumbsItems} />
                <div className='block'>
                    <h3 className='font-semibold py-2 border-b border-b-tertiary'>
                        <div className='w-full text-ellipsis overflow-hidden h-full text-3xl'>
                            {product.name}
                        </div>
                    </h3>
                    <div className='py-2 border-b border-b-tertiary text-sm'>
                        {product.description}
                    </div>
                    <div className='py-2 border-b border-b-tertiary'>
                        <span className='block'>Seller</span>
                        <Link href={`/stores/${product?.store?.id}`}
                            className='group/store flex gap-2 items-center'>
                            <div className='flex-none w-auto'>
                                <div className='rounded-full border-2 border-primary relative h-[56px] w-[56px]'>
                                    <Image alt='seller-product-info' src={product?.store?.main_image_url} fill className='rounded-full object-fill' />
                                </div>
                            </div>
                            <div>
                                <h6 className='transition-all duration-100 font-semibold group-hover/store:text-primary'>{product?.seller?.name}</h6>
                            </div>
                        </Link>
                    </div>

                    <div className='flex py-2 border-b border-b-tertiary text-sm'>
                        <div className='w-full'>
                            <div className='flex items-center justify-center gap-8'>
                                <div className='w-full'>
                                    <div className='flex gap-1.5 flex-col'>
                                        <div className='w-full'>
                                            <div className='flex gap-2 items-center w-[200px]'>
                                                <div className='flex-1 space-x-2'>
                                                    <RiShipLine size={24} className='inline-block' />
                                                    <span className='align-middle'>Ships from {product.origin}</span>
                                                </div>
                                                <div className='flex-none w-auto'>
                                                    {/* <HiInformationCircle size={24} className='inline-block align-middle' /> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <div className='flex gap-2 items-center w-[200px]'>
                                                <div className='flex-1 space-x-2'>
                                                    <FaCalendarAlt size={24} className='inline-block' />
                                                    <span className='align-middle'>Available Stock: {product?.inventory?.quantity}</span>
                                                </div>
                                                <div className='flex-none w-auto'>
                                                    {/* <HiInformationCircle size={24} className='inline-block align-middle' /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='flex gap-x-1.5'>
                                        <div className='flex-none'>
                                            <Image alt='map-marker-image'
                                                src='/others/marker.svg'
                                                width={64}
                                                height={64}
                                                className='inline-block w-16 h-16' />
                                        </div>
                                        <div className='flex-1 space-y-1'>
                                            <h6 className='font-bold'>Deliverable Locations</h6>
                                            <div>{product.locations}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full space-y-2'>
                    <h1 className='font-bold text-primary text-3xl'>C&#36; {product?.price?.toFixed(2)}</h1>
                    <ProductButtonsContainer product={product} seller={product?.seller!} />
                </div>
            </div>
        </>
    )
}