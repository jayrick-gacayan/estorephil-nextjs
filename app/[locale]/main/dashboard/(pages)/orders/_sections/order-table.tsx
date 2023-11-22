'use client'
import { useTranslations } from "next-intl"
import Order from "../_components/order"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import PaginationControl from "../_components/pagination-control"

export default function OrderTable() {
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.order)
    return (
        <>
            <div className="w-full pb-4 pt-8">
                <table className="table-auto w-full border-separate border-0 border-spacing-y-4">
                    <thead className="">
                        <tr className="">
                            <th className="text-left text-gray-400 font-normal">{translate("orderNo")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("dateOrdered")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("dateDelivered")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("agent")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("#ofItems")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("referralFee")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("totalPaid")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("status")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("actions")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.orders.map((order, index) =>
                            <>
                                <Order
                                    agent={order.agent}
                                    dateDelivered={order.dateDelivered}
                                    dateOrdered={order.dateOrderd}
                                    numberOfItems={order.numberOfItems}
                                    orderNumber={order.orderNumber}
                                    referralFee={order.referralFee}
                                    status={order.status}
                                    totalPaid={order.totalPaid}
                                    key={index}
                                />
                            </>)}
                    </tbody>
                </table>
                <div className="w-full flex items-center justify-center">
                    <PaginationControl page={state.pagination.currentPage} />
                </div>
            </div>
        </>
    )
}
