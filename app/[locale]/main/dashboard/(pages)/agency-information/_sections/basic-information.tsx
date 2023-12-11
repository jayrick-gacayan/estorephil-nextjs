'use client'
import { useTranslations } from "next-intl"
import Label from "../_components/label"
import { useSession } from "next-auth/react"

export default function BasicInformation() {
    const translate = useTranslations()
    const { data: sessionData } = useSession()
    const fullAddress = `${sessionData?.user.address}`
    return (
        <>
            <div className=" border-b-[2px] border-gray-400">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-[20px] font-bold">{translate("basicInformation")}</h1>
                    <button className="underline text-[#1186FF]">{translate("update")}</button>
                </div>
                <div className="px-[102px] py-[56px]">
                    <div><Label label="First Name" value={sessionData?.user.first_name ?? ''} /> </div>
                    <div><Label label="Last Name" value={sessionData?.user.last_name ?? ''} /></div>
                    <div><Label label="Address" value={sessionData?.user.address ?? 'NA'} /></div>
                    <div><Label label="Email Address" value={sessionData?.user.email ?? 'NA'} /></div>
                    <div><Label label="Contact" value={sessionData?.user.phone_number ?? ``} /></div>
                </div>
            </div>
        </>
    )
}