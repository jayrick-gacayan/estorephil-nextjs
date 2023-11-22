'use client';

import { Product } from "@/models/product";
import { useMemo, useState } from "react";
import { ShopMethodState } from "../../../(shopMethod)/_redux/shop-method-state";
import { useAppSelector } from "@/app/_hooks/redux_hooks";
import { RootState } from "@/redux/store";
import { BalikbayanBox } from "@/models/balikbayan-box";
import { Cart } from "@/models/cart";

export function QuantityContainer({
  product,
}: {
  product: Product;
}) {
  const shopMethod: ShopMethodState = useAppSelector((state: RootState) => { return state.shopMethod; });

  const productMemo: Cart | BalikbayanBox | undefined = useMemo(() => {
    let productShopMethod = shopMethod.shopMethodItems.find((value: Cart | BalikbayanBox) => {
      return product.id === value.product.id;
    });

    return productShopMethod;
  }, [product, shopMethod.shopMethodItems]);

  const [quantity, setQuantity] = useState<number>(!productMemo ? 1 : productMemo.quantity);

  return (
    <div className='w-full flex gap-8 items-center'>
      <div className='flex-none w-auto'>Quantity</div>
      <div className='flex-1'>
        <div className='flex items-center justify-between gap-4 text-center'>
          <div className={`transition duration-100 rounded px-4 py-2 bg-tertiary text-secondary text-2xl 
            ${quantity > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            onClick={() => { setQuantity(quantity === 1 ? 1 : quantity - 1); }}>
            &#8722;
          </div>
          <div>{quantity}</div>
          <div className='transition duration-100 cursor-pointer hover:bg-primary-light rounded px-4 py-2 bg-primary text-white text-2xl'
            onClick={() => { setQuantity(quantity + 1); }}>
            &#43;
          </div>
        </div>
      </div>
    </div>
  )
}