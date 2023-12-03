'use client'
import { useTranslations } from "next-intl"
import Label from "../_components/label"

export default function BasicInformation() {
    const translate = useTranslations()
    return (
        <>
            <div className=" border-b-[2px] border-gray-400">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-[20px] font-bold">{translate("basicInformation")}</h1>
                    <button className="underline text-[#1186FF]">{translate("update")}</button>
                </div>
                <div className="px-[102px] py-[56px]">
                    <div><Label label="First Name" value="Kelly" /> </div>
                    <div><Label label="Last Name" value="Schenider" /></div>
                    <div><Label label="Address" value="3482 Port Washington Road Arrowwood Alberta T0L 0B0" /></div>
                    <div><Label label="Email Address" value="kelly.schneider@gmail.com" /></div>
                    <div><Label label="Contact" value="403-534-2342" /></div>
                </div>
            </div>
        </>
    )
}