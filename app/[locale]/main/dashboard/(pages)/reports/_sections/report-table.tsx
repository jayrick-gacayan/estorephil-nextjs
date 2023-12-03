'use client'
import { RootState } from "@/redux/store"
import { useTranslations } from "next-intl"
import { useDispatch, useSelector } from "react-redux"

import Report from "../_components/report"
import PaginationControl from "../_components/pagination-control"


export default function ReportTable() {
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.report)
    const dispatch = useDispatch()
    return (
        <>
            <div className="w-full pb-4 pt-8">
                <table className="table-auto w-full border-separate border-0 border-spacing-y-4">
                    <thead className="">
                        <tr className="">
                            <th className="text-left text-gray-400 font-normal">
                                <div className="flex items-center gap-2">
                                    <div><input type="checkbox" className="outline-primary accent-primary" onChange={() => { }} /></div>
                                    <div>{translate("dateRange")}</div>
                                </div>
                            </th>
                            <th className="text-left text-gray-400 font-normal">{translate("ordersMade")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("successfulOrders")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("total")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("commission")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("status")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("actions")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.reports.map((report, index) =>
                            <>
                                <Report
                                    commission={report.commission}
                                    dateRange={report.dateRange}
                                    ordersMade={report.ordersMade}
                                    status={report.status}
                                    successfulOrders={report.successfulOrders}
                                    total={report.total}
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
