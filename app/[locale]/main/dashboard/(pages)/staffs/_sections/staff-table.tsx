'use client'
import { useTranslations } from "next-intl"

import { RootState, store } from "@/redux/store"
import { useSelector } from "react-redux"
import PaginationControl from "../_components/pagination-control"
import Staff from "../_components/staff"
import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { getStaff } from "../_redux/staff-thunk"
import { StoreRepository } from "@/repositories/store-repository"
import { TYPES } from "@/inversify/types"
import { staffContainer, storeContainer } from "@/inversify/inversify.config"
import { StaffRepository } from "@/repositories/staff-repository"
import { RequestStatus } from "@/models/result"
import Loading from "@/app/[locale]/main/_components/loading"

export default function StaffTable() {
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.staff)
    const { data: sessionData } = useSession()
    const onSession = !!sessionData
    const staffRepository = staffContainer.get<StaffRepository>(TYPES.StaffRepository)
    useEffect(() => {
        if (onSession) {
            store.dispatch(getStaff(staffRepository, sessionData?.token || ``, state.pagination.currentPage, 10))
            console.log('state', state)
        }
    }, [sessionData])
    return (
        <> {
            state.getStaffStatus === RequestStatus.SUCCESS
                ? (<div className="w-full pb-4 pt-8">
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
                            {state.staff.map((staff, index) =>
                                <>
                                    <Staff
                                        key={index}
                                        staff={staff}
                                    />
                                </>)}
                        </tbody>
                    </table>
                    {state.pagination.totalPages > 1 &&
                        <div className="w-full flex items-center justify-center">
                            <PaginationControl page={state.pagination.currentPage} />
                        </div>
                    }
                </div>)
                : <div className="flex items-center justify-center"><Loading height={50} width={50} /> loading staff</div>
        }

        </>
    )
}
