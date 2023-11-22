'use client'
import { useDispatch, useSelector } from "react-redux";
import DateFilter from "../_components/date-filter";
import SearchBar from "../_components/search-bar";
import { orderFilterDateChanged } from "../_redux/staff-details-slice";
import { RootState } from "@/redux/store";
import { useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

export default function Header() {
    const state = useSelector((state: RootState) => state.staffDetail)
    const dispatch = useDispatch()
    const router = useRouter()
    const translate = useTranslations()
    return (
        <>
            <div className="w-full flex flex-col gap-4 justify-between">
                <div className="flex items-center gap-4">
                    <IoMdArrowRoundBack color='blue' size={25} />
                    <button className="text-primary text-[18px]" onClick={() => {
                        router.push('/dashboard/staffs')
                    }}>
                        {translate("allStaffs")}
                    </button>
                </div>
                <div className="bg-white rounded-sm w-full px-[19px] py-[16px] shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="relative">
                            <div className="flex items-center gap-4 py-4">
                                <div><Image className="rounded-full h-[69px]" height={69} width={69} alt='' src={state.staff.photo} /></div>
                                <div>
                                    <h1>{state.staff.name}</h1>
                                    <p>{state.staff.role}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className={`border-[1.5px] p-[2px] rounded-md border-primary`}>
                                <CiEdit color={'blue'} size={25} />
                            </button>
                            <button className={`border-[1.5px] p-[2px] rounded-md border-red-500`}>
                                <FaRegTrashAlt color={'red'} size={25} />
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className={`text-[16px] text-slate-800`}><button className={`${state.activeTab === 'orders' ? `underline underline-offset-8 decoration-sky-500 decoration-4` : ``}`}>{translate("orders")}</button></div>
                        <div className={`text-[16px] text-slate-800`}><button className={`${state.activeTab === 'customers' ? `underline underline-offset-8 decoration-sky-500 decoration-4` : ``}`}>{translate("customers")}</button></div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[40%]">
                        <SearchBar value="" placeholder="Search order no. or customer name" />
                    </div>
                    <div className="flex items-center border-[1.5px] bg-white border-gray-200">
                        <DateFilter
                            value={state.orderFilterDateRange.value}
                            onChange={(selectedDates, dateStrings) => {
                                dispatch(orderFilterDateChanged(selectedDates));
                                console.log('date stringss: ', selectedDates)
                            }}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}