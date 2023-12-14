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
    const { data: sessionData } = useSession()

    return (
        <div className='space-y-4 py-4'>
            <div className='flex items-center justify-between w-full'>
                <h3 className="font-semibold text-[20px]">{translate('businessInformation')}</h3>
                <button className='underline hover:no-underline text-primary'
                    onClick={() => {
                        dispatch(modalUpdateFormOpened('businessInfo'));
                    }}>{translate('update')}
                </button>
            </div>
            <div className='space-y-1'>
                <Label label="Business Name" value={sessionData?.company?.company_name ?? ``} />
                <Label label="Nature of Business" value={sessionData?.company?.business_nature ?? ``} />
                <Label label="Business Address" value={sessionData?.company?.address ?? `NA`} />
            </div>
        </div>
    )
}