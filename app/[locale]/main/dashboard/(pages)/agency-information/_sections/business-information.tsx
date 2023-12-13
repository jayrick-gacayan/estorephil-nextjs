'use client'
import { useTranslations } from "next-intl"
import Label from "../_components/label"
import { AppDispatch } from "@/redux/store";
import { useAppDispatch } from "@/app/_hooks/redux_hooks";
import { modalUpdateFormOpened } from "../_redux/agent-agency-information-slice";
import { useSession } from "next-auth/react";

export default function BusinessInformation() {
    const translate = useTranslations();
    const dispatch: AppDispatch = useAppDispatch();
    const {data:sessionData} = useSession()
    return (
        <>
            <div className=" border-b-[2px] my-4 border-gray-400">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-[20px] font-bold">{translate("businessInformation")}</h1>
                    <button className="underline text-[#1186FF]"
                        onClick={() => {
                            dispatch(modalUpdateFormOpened('businessInfo'));
                        }}>{translate("update")}</button>
                </div>
                <div className="px-[102px] py-[56px]">
                    <div><Label label="Business Name" value={sessionData?.company?.company_name ?? ``} /> </div>
                    <div><Label label="Nature of Business" value={sessionData?.company?.business_nature ?? ``} /></div>
                    <div><Label label="Business Address" value={sessionData?.company?.address ?? `NA`} /></div>
                </div>
            </div>
        </>
    )
}