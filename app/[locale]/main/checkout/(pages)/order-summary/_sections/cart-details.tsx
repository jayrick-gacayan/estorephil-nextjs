'use client';

import { PurchaseMethodState } from '@/app/[locale]/main/purchase-method/[slug]/_redux/purchase-method-state';
import { useAppSelector, useAppDispatch } from '@/app/_hooks/redux_hooks';
import { BalikbayanBox } from '@/models/balikbayan-box';
import { Cart } from '@/models/cart';
import { Seller } from '@/models/seller';
import { RootState, AppDispatch } from '@/redux/store';
import { useMemo } from 'react';
import Collapsible from '@/app/[locale]/main/_components/collapsible';
import CollapsibleItem from '@/app/[locale]/main/_components/collapsible-item';
import PurchaseMethodRowItems from '@/app/[locale]/main/_components/purchase-method-row-items';
import PurchaseMethodQuantityContainer from '@/app/[locale]/main/_components/purchase-method-quantity-container';

export default function CartDetails() {
    const purchaseMethodState: PurchaseMethodState = useAppSelector((state: RootState) => { return state.purchaseMethod; })
    const dispatch: AppDispatch = useAppDispatch();
    const purchaseMethodItems = useMemo(() => { return purchaseMethodState.purchaseMethodItems }, [purchaseMethodState.purchaseMethodItems]);

    const sellers = useMemo(() => {
        return purchaseMethodState.purchaseMethodItems.length === 0 ? [] :
            purchaseMethodState.purchaseMethodItems.filter(
                (purchaseMethodItem: Cart | BalikbayanBox) => {
                    return purchaseMethodItem.isGoingToCheckout
                }
            ).map(
                (purchaseMethodItem: Cart | BalikbayanBox) => {
                    return purchaseMethodItem.seller;
                }
            ).filter((valueSeller: Seller, index: number, arrayCurrent: Seller[]) => {
                let arrayCurrentTemp = arrayCurrent.map((current: Seller) => { return current.id });
                return arrayCurrentTemp.indexOf(valueSeller.id) === index;
            })

    }, [purchaseMethodState.purchaseMethodItems]);

    const productOrders = [
        {
            imageUrl: 'https://example.com/product1.jpg',
            name: 'Product 1',
            price: 20.99,
            quantity: 3,
            total: 62.97
        },
        {
            imageUrl: 'https://example.com/product2.jpg',
            name: 'Product 2',
            price: 15.49,
            quantity: 2,
            total: 30.98
        },
        {
            imageUrl: 'https://example.com/product3.jpg',
            name: 'Product 3',
            price: 30.00,
            quantity: 1,
            total: 30.00
        },
        {
            imageUrl: 'https://example.com/product4.jpg',
            name: 'Product 4',
            price: 25.99,
            quantity: 4,
            total: 103.96
        },
        {
            imageUrl: 'https://example.com/product5.jpg',
            name: 'Product 5',
            price: 10.00,
            quantity: 5,
            total: 50.00
        }
    ];

    return (
        <div className='space-y-8'>
            {
                sellers.map((seller: Seller) => {
                    return (
                        <Collapsible data={seller}
                            key={`checkout-method-${seller.name}`}
                            isNotCollapsible={true}>
                            <CollapsibleItem>
                                <>
                                    {
                                        purchaseMethodItems.filter((purchaseMethodItem: Cart | BalikbayanBox) => {
                                            return purchaseMethodItem.seller.id === seller.id && purchaseMethodItem.isGoingToCheckout;
                                        }).map((valuePurchaseMethod: Cart) => {
                                            return (
                                                <PurchaseMethodRowItems key={`purchase-method-${valuePurchaseMethod.product.id}`}
                                                    purchaseMethodItem={valuePurchaseMethod}
                                                    withQuantityComponent={
                                                        <PurchaseMethodQuantityContainer quantity={valuePurchaseMethod.quantity} />
                                                    } />
                                            )
                                        })
                                    }
                                </>
                            </CollapsibleItem>
                        </Collapsible>
                    )
                })
            }
        </div>

    )
}