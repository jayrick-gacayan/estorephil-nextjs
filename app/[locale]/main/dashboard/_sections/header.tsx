
'use client'
import { useTranslations } from "next-intl"

export default function Header() {
    const translate = useTranslations()
    return (
        <>
            <div className="w-full px-[153px] py-8 border-b-[2px] border-[#D4D4D4]">
                <div className="text-gray-700 text-[30px]"> {translate('agencyInformation')}</div>
            </div>
        </>
    )
}