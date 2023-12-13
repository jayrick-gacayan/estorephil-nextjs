'use client'
import { useTranslations } from "next-intl"
import Label from "../_components/label"
import { AppDispatch } from "@/redux/store";
import { useAppDispatch } from "@/app/_hooks/redux_hooks";
import { modalUpdateFormOpened } from "../_redux/agent-agency-information-slice";

export default function BusinessInformation() {
    const translate = useTranslations();
    const dispatch: AppDispatch = useAppDispatch();
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
                    <div><Label label="Business Name" value="Kelly Agency" /> </div>
                    <div><Label label="Nature of Business" value="Buy and Sell" /></div>
                    <div><Label label="Business Address" value="3482 Port Washington Road Arrowwood Alberta T0L 0B0" /></div>
                </div>
            </div>
        </>
    )
}