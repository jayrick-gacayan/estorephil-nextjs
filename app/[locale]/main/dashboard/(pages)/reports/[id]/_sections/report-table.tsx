'use client'
import { RootState } from "@/redux/store"
import { useTranslations } from "next-intl"
import { useDispatch, useSelector } from "react-redux"
import Report from "../_components/report"
import PaginationControl from "../_components/pagination-control"


export default function ReportTable() {
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.reportDetail)
    const dispatch = useDispatch()
    return (
        <>
            <div className="w-full pb-4 pt-8">
                <table className="table-auto w-full border-separate border-0 border-spacing-y-8">
                    <thead className="">
                        <tr className="">
                            <th className="border-b-[1.5px] text-left text-gray-400 font-normal">{translate("orderNo^")}</th>
                            <th className="border-b-[1.5px] text-left text-gray-400 font-normal">{translate("dateOrdered^")}</th>
                            <th className="border-b-[1.5px] text-left text-gray-400 font-normal">{translate("dateDelivered^")}</th>
                            <th className="border-b-[1.5px] text-left text-gray-400 font-normal">{translate("staff^")}</th>
                            <th className="border-b-[1.5px] text-left text-gray-400 font-normal">{translate("#OfItems^")}</th>
                            <th className="border-b-[1.5px] text-left text-gray-400 font-normal">{translate("total^")}</th>
                            <th className="border-b-[1.5px] text-left text-gray-400 font-normal">{translate("commission^")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.reports.map((report, index) =>
                            <>
                                <Report
                                    key={index}
                                    orderNumber={report.orderNumber}
                                    dateOrdered={report.dateOrdered}
                                    dateDelivered={report.dateDelivered}
                                    staff={report.staff}
                                    numberOfItems={report.numberOfItems}
                                    total={report.total}
                                    commission={report.commission} />
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
