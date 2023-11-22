'use client'
import { RootState } from "@/redux/store"
import { useTranslations } from "next-intl"
import { FaCircle } from "react-icons/fa"
import { useSelector } from "react-redux"
import { OrderTracking } from "../_redux/order-detail-state"

export default function Tracking() {
    const translate = useTranslations()
    const state = useSelector((state: RootState) => state.orderDetail)
    const data: OrderTracking[] = state.orderTracking;
    const arrayForSort = [...data]
    const sortedTracking = arrayForSort.sort((a, b) => {
        const dateA = new Date(a.dateModified)
        const dateB = new Date(b.dateModified)
        return dateB.getTime() - dateA.getTime();
    })
    const formatMonthAndDay = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', { month: 'short', day: 'numeric' });
    };
    const formatTime = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    return (
        <>
            <div className="p-[48px] bg-[#EAF1F9] shadow-md">
                <div className="text-[20px] font-bold text-[#041D60]">{translate("orderTracking^")}</div>
                <div className="px-[62px] py-[48px]">
                    <div className="flex flex-col">
                        {sortedTracking.map((tracking, index) =>
                            <div className="flex items-start gap-4 my-4">
                                <div>
                                    <div className={`text-[18px] font-bold ${index !== 0 ? `text-gray-400` : `text-[#041D60]`}`}>{formatMonthAndDay(tracking.dateModified)}</div>
                                    <div className={`text-[16px] font-bold ${index !== 0 ? `text-gray-400` : `text-[#041D60]`}`}>{formatTime(tracking.dateModified)}</div>
                                </div>
                                <div className="relative">
                                    <div className="my-[4px]">
                                        <FaCircle color={`${index != 0 ? `gray` : `#0F4A99`}`} />
                                    </div>
                                    {index !== state.orderTracking.length - 1 &&
                                        <div className={`absolute top-[55px] left-[50%] h-[200%] w-[1px] ${index != 0 ? `bg-gray-400` : `bg-[#0F4A99]`}`} style={{ transform: 'translate(-50%, -50%)' }}></div>
                                    }
                                </div>
                                <div>
                                    <div className={`text-[18px] font-bold ${index !== 0 ? `text-gray-400` : `text-[#041D60]`}`}>Order {tracking.status}</div>
                                    <div className={`text-[16px] font-semibold ${index !== 0 ? `text-gray-400` : `text-[#041D60]`}`}>{tracking.description}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center py-[86px]">
                <div className="grow"></div>
                <button className="grow basis-1/3 rounded-sm bg-primary text-white text-center py-2">{translate("print")}</button>                <div></div>
                <div className="grow">
                </div>
            </div>
        </>
    )
}