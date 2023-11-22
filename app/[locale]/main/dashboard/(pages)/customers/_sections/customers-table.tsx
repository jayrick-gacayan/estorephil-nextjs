'use client'
import { RootState } from "@/redux/store"
import { useTranslations } from "next-intl"
import { useSelector } from "react-redux"
import Customer from "../_components/customer"
import PaginationControl from "../_components/pagination-control"

export default function CustomersTable() {
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.customer)
    return (
        <>
            <div className="w-full pb-4 pt-8">
                <table className="table-auto w-full border-separate border-0 border-spacing-y-4">
                    <thead className="">
                        <tr className="">
                            <th className="text-left text-gray-400 font-normal">{translate("photo")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("name")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("email")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("contactNumber")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("pending")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("completed")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("actions")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.customers.map((customer, index) =>
                            <>
                                <Customer
                                    completed={customer.completed}
                                    contactNum={customer.contactNum}
                                    customerImageUrl={customer.photo}
                                    email={customer.email}
                                    name={customer.name}
                                    pending={customer.pending}
                                    index={index}
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