'use client'

import { useTranslations } from 'next-intl'
import Label from '../_components/label'
import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import { agentBasicInfoSet, modalUpdateFormOpened } from '../_redux/agent-agency-information-slice';
import { useSession } from 'next-auth/react';

export default function BasicInformation() {
    const dispatch = useAppDispatch();
    const translate = useTranslations();
    const { data: sessionData } = useSession();
    const fullAddress = `${sessionData?.user.address_1} ${sessionData?.user?.city} ${sessionData?.user?.province}`
    console.log('data', sessionData)

    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-between w-full'>
                <h3 className="font-semibold text-[24px]">{translate('basicInformation')}</h3>
                <button className='underline hover:no-underline text-primary'
                    onClick={() => {
                        dispatch(agentBasicInfoSet({
                            firstName: sessionData?.user.first_name ?? '',
                            lastName: sessionData?.user.last_name
                        }))
                        dispatch(modalUpdateFormOpened({ type: 'basicInfo', open: true }));
                    }}>{translate('update')}
                </button>
            </div>

            <div className='space-y-1'>
                <Label label="First Name" value={sessionData?.user.first_name ?? ''} />
                <Label label="Last Name" value={sessionData?.user.last_name ?? ''} />
                <Label label="Address" value={fullAddress ?? 'NA'} />
                <Label label="Email Address" value={sessionData?.user.email ?? 'NA'} />
                <Label label="Contact" value={sessionData?.user.phone_number ?? ``} />
            </div>
            <div className="flex items-center w-full gap-8">
                <div className="text-right basis-[18%]">
                    &nbsp;
                </div>
                <div className='block'>
                    <button className='transition-all delay-100 bg-success-dark p-2 w-auto text-white rounded hover:bg-success'>Reset Password</button>
                </div>
            </div>
        </div>
    )
}