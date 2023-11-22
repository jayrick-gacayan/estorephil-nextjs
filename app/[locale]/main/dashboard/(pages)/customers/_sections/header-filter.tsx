'use client'
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../_components/search-bar";

export default function HeaderFilter() {
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.order)
    return (
        <>
            <div className="w-full flex justify-between">
                <div className="w-[40%]">
                    <SearchBar value="" placeholder="Search customer name .." />
                </div>
                {/* <div className="flex items-center border-[1.5px] bg-white border-gray-200">
                    <DateFilter
                        value={state.orderFilterDateRange.value}
                        onChange={(selectedDates, dateStrings) => {
                            dispatch(orderFilterDateChanged(selectedDates));
                            console.log('date stringss: ', selectedDates)
                        }}
                    />
                </div> */}
            </div>
        </>
    )
}