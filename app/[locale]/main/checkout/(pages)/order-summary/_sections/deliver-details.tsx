'use client'
import { useTranslations } from "next-intl"
import { FaPlane } from "react-icons/fa";

export default function DeliveryDetails() {
    const translate = useTranslations()
    return (
        <>
            <div className="border-[2px] flex  justify-between border-gray-400 h-[190px] rounded-md p-4 w-full">
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="text-[18px] text-[#041D60] font-[600]">Delivery Details</div>
                        <div className="text-sm text-green-400">26 Items | 45 kg</div>
                    </div>
                    <div>
                        <div className="text-[18px] text-[#041D60] font-[600]">Delivery Method</div>
                        <div>
                            <button className="py-2 px-4 bg-blue-500 text-white rounded-md flex gap-2 itemscenter text-sm">
                                <FaPlane color="white" size={20} />
                                {"Air Cargo"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="text-[18px] text-[#041D60] font-[600]">Delivery Details</div>
                        <div className="text-sm text-green-400">26 Items | 45 kg</div>
                    </div>
                    <div>
                        <div className="text-[18px] text-[#041D60] font-[600]">ETA</div>
                        <div className="text-sm text-green-400">2023/12/25</div>
                    </div>
                </div>
            </div>
        </>
    )
}