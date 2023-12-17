'use client'
import { useTranslations } from "next-intl"
import Order from "../_components/order"
import { RootState, store } from "@/redux/store"
import { useSelector } from "react-redux"
import PaginationControl from "../_components/pagination-control"
import { OrderRepository } from "@/repositories/order-repository"
import { TYPES } from "@/inversify/types"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { orderContainer } from "@/inversify/inversify.config"
import { getAgentOrders } from "../_redux/orders-thunk"

export default function OrderTable() {
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.order)
    const { data: sessionData } = useSession()
    const onSession = !!sessionData
    const orderRepository = orderContainer.get<OrderRepository>(TYPES.OrderRepository)
    useEffect(() => {
        if (onSession) {
            store.dispatch(getAgentOrders(orderRepository, sessionData?.token || ``, state.pagination.currentPage, 10))
            console.log('state', state)
        }
    }, [sessionData])
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
                                    key={index}
                                    order={order}
                                />
                            </>)}
                    </tbody>
                </table>
                {
                    state.pagination.totalPages > 1 &&
                    <div className="w-full flex items-center justify-center">
                        <PaginationControl page={state.pagination.currentPage} />
                    </div>
                }

            </div>
        </>
    )
}
