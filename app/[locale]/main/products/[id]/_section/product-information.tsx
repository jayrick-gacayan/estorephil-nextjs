'use client'
import { BreadcrumbProps } from '@/types/props/breadcrumb-props';
import { ProductInfoItem } from '../_components/product-info-item';
import { productContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { RootState, store } from '@/redux/store';
import { ProductRepository } from '@/repositories/product-repository';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../_redux/product-thunk';

export function ProductInformation() {
  const product = useSelector((state: RootState) => state.product).product
  const productId = useParams().id.toString()
  const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!!productId) {
      store.dispatch(getProductDetails(productRepository, productId))
    }
  }, [productId])
  return (
    <div className='block p-4 w-full space-y-2'>
      <h4 className='font-bold text-danger'>Product Information</h4>
      <div className='flex w-full'>
        <ProductInfoItem labelText='Package Dimensions' info={`${product.length} ${product.unit_measure} x ${product.width} ${product.unit_measure} x ${product.height} ${product.unit_measure}`} />
        <ProductInfoItem labelText='Item Weight' info={`${product.weight} ${product.weight_type}`} />
        <ProductInfoItem labelText='Manufacturer' info={product.manufacturer} />
        <ProductInfoItem labelText='EstorePhil Item Num' info={product.unique_identifier} />
        <ProductInfoItem labelText='Country Origin' info={product.origin} />
        <ProductInfoItem labelText='Item Model Number' info={product.company_item_no} />
      </div>
    </div>
  )
}