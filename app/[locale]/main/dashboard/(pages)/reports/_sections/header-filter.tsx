'use client'

import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import DateFilter from "../_components/date-filter"
import SearchBar from "../_components/search-bar"
import { reportFilterDateChanged } from "../_redux/report-slice"
import ExportButton from "../_components/export-button"


export default function HeaderFilter() {
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.report)
    return (
        <>
            <div className="w-full flex justify-between">
                <div className="w-[40%]">
                    <SearchBar value="" placeholder="Search order no. or customer name" />
                </div>
                <div className="flex items-center">
                    <div className="flex items-center border-[1.5px] bg-white border-gray-200">
                        <DateFilter
                            value={state.reportFilterDateRange.value}
                            onChange={(selectedDates, dateStrings) => {
                                dispatch(reportFilterDateChanged(selectedDates));
                                console.log('date stringss: ', selectedDates)
                            }}
                        />

                    </div>
                    <div className="mx-4">
                        <ExportButton />
                    </div>
                </div>

            </div>
        </>
    )
}