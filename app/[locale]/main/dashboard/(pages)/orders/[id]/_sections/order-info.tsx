'use client'
import { useTranslations } from "next-intl"
import { FaCcVisa } from "react-icons/fa6"

export default function OrderInfo() {
    const translate = useTranslations()
    return (
        <>
            <div className="flex items-center justify-center w-full gap-2 my-4">
                <div className="border-2 border-gray-200 h-[240px] grow rounded-md p-[16px]">
                    <div>
                        <h1 className="text-[18px] text-[#041D60] font-[600]">
                            {translate("orderInfo^")}
                        </h1>
                    </div>
                    <div className="flex items-center my-[16px]">
                        <div className="grow basis-1/4">
                            <div className="font-medium text-[16px] text-slate-700">{translate("storeName")}</div>
                            <div className="font-medium text-[16px] text-slate-700">{translate("dateOrdered")}</div>
                            <div className="font-medium text-[16px] text-slate-700">{translate("orderNo")}</div>
                            <div className="font-medium text-[16px] text-slate-700">{translate("items")}</div>
                        </div>
                        <div className="grow basis-1/2">
                            <div className="text-slate-800 text-[16px] font-semibold grow">
                                O-NLINE STOREPH
                            </div>
                            <div className="text-slate-800 text-[16px] font-semibold grow">
                                5/25/2022
                            </div>
                            <div className="text-[#E74C3C] text-[16px] font-semibold grow">
                                192838488282828
                            </div>
                            <div className="text-slate-800 text-[16px] font-semibold grow">
                                4
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-gray-200 h-[240px] grow rounded-md p-[16px]">
                    <div><h1 className="text-[18px] text-[#041D60] font-[600]">{translate("customerInfo^")}</h1></div>
                    <div className="py-2">
                        <div className="text-[16px] font-bold text-primary">Martha Chavez</div>
                        <div className="text-[16px] font-semibold text-slate-800">403-534-2342</div>
                        <div className="text-[16px] font-semibold text-slate-800">Martha.chavez@gmail.com</div>
                        <div className="text-[16px] font-semibold text-slate-800">3482 Port Washington Road Arrowwood Alberta T0L 0B0</div>
                    </div>
                    <div><h1 className="text-[18px] text-[#041D60] font-[600]">{translate("paymentMethod^")}</h1></div>
                    <div className="flex items-center gap-4 py-2">
                        <div>
                            <FaCcVisa size={25} color={"#041D60"} />
                        </div>
                        <div className="text-[16px] font-semibold text-slate-800">
                            ***4232
                        </div>
                    </div>
                </div>
                <div className="border-2 border-gray-200 h-[240px] grow rounded-md p-[16px]">
                    <div><h1 className="text-[18px] text-[#041D60] font-[600]">{translate("receiverInfo^")}</h1></div>
                    <div className="py-2">
                        <div className="text-[16px] font-bold text-primary">Rebecca Chavez</div>
                        <div className="text-[16px] font-semibold text-slate-800">0932 123 4567</div>
                        <div className="text-[16px] font-semibold text-slate-800">Martha.chavez@gmail.com</div>
                        <div className="text-[16px] font-semibold text-slate-800">3482 Port Washington Road Arrowwood Alberta T0L 0B0</div>
                    </div>
                    <div><h1 className="text-[18px] text-[#041D60] font-[600]">{translate("deliveryMethod^")}</h1></div>
                    <div className="flex items-center gap-4 py-2">

                        <div className="text-[16px] font-semibold text-green-600">
                            Air Cargo
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}