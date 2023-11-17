'use client'
import { useTranslations } from "next-intl"

export default function ReceiverInfo() {
    const translate = useTranslations()
    return (
        <>
            <div className="border-[2px] border-gray-400 rounded-md h-[190px] p-4 w-full">
                <div><h1 className="text-[18px] text-[#041D60] font-[600]">{translate("receiverInfo")}</h1></div>
                <div>
                    <div className="text-blue-500 font-[600] pt-2">Rebecca Chavez</div>
                    <div>09272648856</div>
                    <div>Martha.chavez@gmail.com</div>
                    <div>253 M.L. Quezon Street Santo Niño Tukuran 7019 Zamboanga del Sur Philippines</div>
                </div>
            </div>
        </>
    )
}