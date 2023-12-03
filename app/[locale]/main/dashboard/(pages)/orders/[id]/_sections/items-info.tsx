'use client'

import { useTranslations } from "next-intl"
import Item from "../_components/item"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function Items() {
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.orderDetail)
    return (
        <>
            <div className="w-full">
                <div><h1 className="text-[16px] text-[#041D60] font-semibold">{translate('items^')} {`(4)`}</h1></div>
                <div>
                    <table className="table-auto w-full border-separate border-0 border-spacing-y-4">
                        <tbody>
                            {state.orderItems.map((item, index) =>
                                <>
                                    <Item
                                        photo={item.photo}
                                        description={item.description}
                                        quantity={item.quantity}
                                        totalPaid={item.totalPaid}
                                        key={index}
                                    />
                                </>)}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}