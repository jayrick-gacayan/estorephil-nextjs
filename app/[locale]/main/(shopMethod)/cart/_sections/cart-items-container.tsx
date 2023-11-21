'use client';

import { Checkbox } from '@/app/[locale]/_components/checkbox';
import { CiCircleMinus } from 'react-icons/ci';
import Products from '@/app/_data/product.json';
import { Product } from '@/models/product';
import { Cart } from '@/models/cart';
import Image from 'next/image';
import { Seller } from '@/models/seller';
import { QuantityShopMethod } from '../../_components/quantity-shop-method';


export default function CartItemsContainer() {
  let appleProducts: Cart[] = [
    ...Products.products.map((value: Product) => {
      let { seller, ...rest } = value;
      return { product: rest, seller: seller!, quantity: 0, total: 0 }
    }).filter((cartValue: Cart) => {
      return cartValue.seller.id === 4;
    })
  ];

  let getSeller: Seller = appleProducts.reduce((prevCart: Cart, curCart: Cart) => { return curCart; }).seller;

  return (
    <div className='space-y-8'>
      <div className='border border-secondary-light'>
        <div className='flex items-center p-4 bg-tertiary-dark border-b-2 border-secondary-light'>
          <div className='flex-1 space-x-3'>
            <div className='inline-block align-middle'>
              <Checkbox<boolean> current={false} value={false} onCheckboxChanged={(value: boolean) => { }} />
            </div>
            <Image alt={`cart-image-seller-${getSeller.id}`}
              src={getSeller.sellerImage}
              width={48}
              height={48}
              className='w-12 h-12 inline-block align-middle' />
            <span className='font-semibold leading-0 text-[20px] align-middle'>{getSeller.name}</span>
          </div>
          <div>
            <CiCircleMinus className='w-5 h-5 text-[#857114] stroke-1' />
          </div>
        </div>
        <div className='p-2'>
          <div className='flex gap-2 p-2 text-secondary-light'>
            <div className='flex-none w-auto'>
              <div className='flex w-fit gap-2 items-center justify-start cursor-pointer'>
                <div className='w-5 h-5 border border-transparent '></div>
              </div>
            </div>
            <div className='flex-none w-24 text-center'>IMAGE</div>
            <div className='flex-1'>PRODUCT NAME</div>
            <div className='flex-none w-48'>PRICE</div>
            <div className='flex-none w-48'>QUANTITY</div>
            <div className='flex-none w-28'>TOTAL</div>
          </div>
          {
            appleProducts.map((valueCart: Cart) => {
              return (
                <div className='flex gap-2 p-2 text-secondary items-center'>

                  <div className='flex-none w-auto'>
                    <Checkbox<string> current={''} value={''} onCheckboxChanged={(value: string) => {

                    }} />
                  </div>
                  <div className='flex-none w-24 text-center overflow-hidden'>
                    <Image alt={`alt-cart-image-${valueCart.product.id}-${valueCart.seller.id}`}
                      src={valueCart.product.productImage}
                      width={96}
                      height={96}
                      className='w-24 h-24 rounded object-cover' />
                  </div>
                  <div className='flex-1'>{valueCart.product.name}</div>
                  <div className='flex-none w-48'>{valueCart.product.price.toFixed(2)}</div>
                  <div className='flex-none w-48'>
                    <QuantityShopMethod />
                  </div>
                  <div className='flex-none w-28'>TOTAL</div>
                </div>
              )
            })
          }

        </div>
      </div>
      <div className='border border-secondary-light'>
        <div className='flex items-center p-4 bg-tertiary-dark border-b-2 border-secondary-light'>
          <div className='flex-1 space-x-3'>
            <div className='inline-block align-middle'>
              <Checkbox<boolean> current={false} value={false} onCheckboxChanged={(value: boolean) => { }} />
            </div>
            <Image alt={`cart-image-seller-${getSeller.id}`}
              src={getSeller.sellerImage}
              width={48}
              height={48}
              className='w-12 h-12 inline-block align-middle' />
            <span className='font-semibold leading-0 text-[20px] align-middle'>{getSeller.name}</span>
          </div>
          <div>
            <CiCircleMinus className='w-5 h-5 text-[#857114] stroke-1' />
          </div>
        </div>
        <div className='p-2'>
          <div className='flex gap-2 p-2 text-secondary-light'>
            <div className='flex-none w-auto'>
              <div className='flex w-fit gap-2 items-center justify-start cursor-pointer'>
                <div className='w-5 h-5 border border-transparent '></div>
              </div>
            </div>
            <div className='flex-none w-24 text-center'>IMAGE</div>
            <div className='flex-1'>PRODUCT NAME</div>
            <div className='flex-none w-48'>PRICE</div>
            <div className='flex-none w-48'>QUANTITY</div>
            <div className='flex-none w-28'>TOTAL</div>
          </div>
          {
            appleProducts.map((valueCart: Cart) => {
              return (
                <div className='flex gap-2 p-2 text-secondary items-center'>

                  <div className='flex-none w-auto'>
                    <Checkbox<string> current={''} value={''} onCheckboxChanged={(value: string) => {

                    }} />
                  </div>
                  <div className='flex-none w-24 text-center overflow-hidden'>
                    <Image alt={`alt-cart-image-${valueCart.product.id}-${valueCart.seller.id}`}
                      src={valueCart.product.productImage}
                      width={96}
                      height={96}
                      className='w-24 h-24 rounded object-cover' />
                  </div>
                  <div className='flex-1'>{valueCart.product.name}</div>
                  <div className='flex-none w-48'>{valueCart.product.price.toFixed(2)}</div>
                  <div className='flex-none w-48'>
                    <QuantityShopMethod />
                  </div>
                  <div className='flex-none w-28'>TOTAL</div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}