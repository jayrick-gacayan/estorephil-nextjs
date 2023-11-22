'use client'
import { useTranslations } from "next-intl"

export default function Contacts() {
    const translate = useTranslations()
    return (
        <>
            <div className=" border-b-[2px]  border-gray-400">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-[20px] font-bold">{translate("contacts")}</h1>
                </div>
                <div className="py-[25px]">
                    <button className="py-2 px-4 border-2 rounded-md border-blue-500 bg-[#DFEFFF] text-[#1E419B]">
                        {translate("viewAdmins")}
                    </button>
                </div>
            </div>
        </>
    )
}