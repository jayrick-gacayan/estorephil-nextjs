'use client'
import { useTranslations } from "next-intl"

import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import PaginationControl from "../_components/pagination-control"
import Staff from "../_components/staff"

export default function StaffTable() {
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.staff)
    return (
        <>
            <div className="w-full pb-4 pt-8">
                <table className="table-auto w-full border-separate border-0 border-spacing-y-4">
                    <thead className="">
                        <tr className="">
                            <th className="text-left text-gray-400 font-normal">{translate("photo")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("name")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("email")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("role")}</th>
                            <th className="text-left text-gray-400 font-normal">{translate("actions")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.staffs.map((staff, index) =>
                            <>
                                <Staff
                                    key={index}
                                    email={staff.email}
                                    name={staff.name}
                                    photo={staff.photo}
                                    role={staff.role}
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
