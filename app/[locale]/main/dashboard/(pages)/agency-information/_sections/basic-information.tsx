'use client'

import { useTranslations } from 'next-intl'
import Label from '../_components/label'
import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import { modalUpdateFormOpened } from '../_redux/agent-agency-information-slice';
import { useSession } from 'next-auth/react';

export default function BasicInformation() {
    const dispatch = useAppDispatch();
    const translate = useTranslations();
    const { data: sessionData } = useSession();

    return (
        <div className='space-y-4 pb-4'>
            <div className='flex items-center justify-between w-full'>
                <h3 className="font-semibold text-[24px]">{translate('basicInformation')}</h3>
                <button className='underline hover:no-underline text-primary'
                    onClick={() => {
                        dispatch(modalUpdateFormOpened('basicInfo'));
                    }}>{translate('update')}
                </button>
            </div>
            <div className='space-y-1'>
                <Label label="Last Name" value={sessionData?.user.last_name ?? ''} />
                <Label label="Address" value={sessionData?.user.address ?? 'NA'} />
                <Label label="Email Address" value={sessionData?.user.email ?? 'NA'} />
                <Label label="Contact" value={sessionData?.user.phone_number ?? ``} />
            </div>
        </div>
    )
}