'use client';

import GoogleLikeInputField from '@/app/[locale]/_components/google-like-input-field';
import Image from 'next/image';
import { ChangeEvent, useMemo } from 'react';
import { AgentAgencyInformationState } from '../_redux/agent-agency-information-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { firstNameChanged, lastNameChanged } from '../_redux/agent-agency-information-slice';

export default function AgentEditBasicInfoForm() {
  const dispatch: AppDispatch = useAppDispatch();
  const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => { return state.agentAgencyInfo });

  let { firstName, lastName } = useMemo(() => { return agentAgencyInfoState }, [agentAgencyInfoState])
  return (
    <>
      <div className="border-b border-secondary-light py-2">
        <h3 className='text-[32px] leading-0 text-center'>Edit Basic Information</h3>
      </div>
      <div className="flex items-stretch gap-4 py-4">
        <div className="flex-none w-64">
          <Image alt='edit-profile-image-info'
            src='/static_images/profile_image_default.jpg'
            width={256}
            height={224}
            className='w-64 h-56 rounded' />
        </div>
        <div className="flex-1 space-y-4">
          <GoogleLikeInputField labelText='First Name'
            inputProps={{
              id: 'firstName',
              type: 'text',
              value: firstName.value,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                dispatch(firstNameChanged(event.target.value))
              }
            }} />
          <GoogleLikeInputField labelText='Last Name'
            inputProps={{
              id: 'lastName',
              type: 'text',
              value: lastName.value,
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                dispatch(lastNameChanged(event.target.value))
              }
            }} />
          <GoogleLikeInputField labelText='Phone Number'
            inputProps={{
              id: 'phoneNumber',
              type: 'text',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                return;
              }
            }} />
          {/* <GoogleLikeInputField labelText='Address'
            inputProps={{
              id: 'address',
              type: 'text',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                return;
              }
            }} /> */}
        </div>
      </div>
    </>
  )
}