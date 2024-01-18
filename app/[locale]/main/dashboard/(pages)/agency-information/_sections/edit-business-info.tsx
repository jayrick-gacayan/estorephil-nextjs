'use client';

import GoogleLikeInputField from '@/app/[locale]/_components/google-like-input-field';
import { ChangeEvent, useMemo } from 'react';
import TextFieldInput from '../../../_components/text-field-input';
import { AgentAgencyInformationState } from '../_redux/agent-agency-information-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import {
  businessNatureChanged,
  companyAddressLine1Changed,
  companyAddressLine2Changed,
  companyCityChanged,
  companyNameChanged,
  companyProvinceChanged,
  ownerFirstNameChanged,
  ownerLastNameChanged
} from '../_redux/agent-agency-information-slice';

export default function EditBusinessInfo() {
  const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => {
    return state.agentAgencyInfo
  });
  const dispatch: AppDispatch = useAppDispatch();

  const {
    companyName,
    businessNature,
    ownerFirstName,
    ownerLastName,
    addressLine1,
    addressLine2,
    companyCity,
    companyProvince
  } = useMemo(() => {
    return {
      companyName: agentAgencyInfoState.companyName,
      businessNature: agentAgencyInfoState.businessNature,
      ownerFirstName: agentAgencyInfoState.ownerFirstName,
      ownerLastName: agentAgencyInfoState.ownerLastName,
      addressLine1: agentAgencyInfoState.addressLine1,
      addressLine2: agentAgencyInfoState.addressLine2,
      companyCity: agentAgencyInfoState.companyCity,
      companyProvince: agentAgencyInfoState.companyProvince
    }
  }, [
    agentAgencyInfoState.companyName,
    agentAgencyInfoState.businessNature,
    agentAgencyInfoState.ownerFirstName,
    agentAgencyInfoState.ownerLastName,
    agentAgencyInfoState.addressLine1,
    agentAgencyInfoState.addressLine2,
    agentAgencyInfoState.companyCity,
    agentAgencyInfoState.companyProvince
  ]);

  return (
    <>
      <div className='border-b border-secondary-light py-2'>
        <h3 className='text-[32px] leading-0 text-center'>Edit Business Information</h3>
      </div>
      <div className='space-y-1.5 py-4 text-left'>
        <div className='block space-y-0.5'>
          <div className='font-semibold'>Company Information</div>
          <TextFieldInput label='Company Name'
            type="text"
            placeholder='Company Name'
            value={companyName.value ?? ''}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              dispatch(companyNameChanged(event.target.value))
            }}
            errorText={companyName.error}
            className="w-full" />
          <TextFieldInput label='Business Nature'
            type="text"
            placeholder='Business Nature'
            value={businessNature.value ?? ''}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              dispatch(businessNatureChanged(event.target.value))
            }}
            errorText={businessNature.error}
            className="w-full" />

        </div>

        <div className='space-y-0.5'>
          <div className='font-semibold'>Owner</div>
          <div className='flex items-center gap-4'>
            <TextFieldInput label='First Name'
              type="text"
              placeholder='First Name'
              value={ownerFirstName.value ?? ''}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                dispatch(ownerFirstNameChanged(event.target.value))
              }}
              errorText={ownerFirstName.error}
              className="w-full" />
            <TextFieldInput label='Last Name'
              type="text"
              placeholder='Last Name'
              value={ownerLastName.value ?? ''}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                dispatch(ownerLastNameChanged(event.target.value))
              }}
              errorText={ownerLastName.error}
              className="w-full" />
          </div>
        </div>
        {/* <div className='space-y-4'>
          <div className='font-semibold'>Contact Information</div>
          <GoogleLikeInputField labelText='Contact Number'
            inputProps={{
              id: 'ownerContactNumber',
              type: 'text',
              value: '',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                return;
              }
            }} />
        </div> */}
        <div className='space-y-0.5'>
          <div className='font-semibold'>Company Address</div>
          <div className='space-y-2'>
            <TextFieldInput label='Address Line 1'
              type="text"
              placeholder='Address Line 1'
              value={addressLine1.value ?? ''}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                dispatch(companyAddressLine1Changed(event.target.value))
              }}
              errorText={addressLine1.error}
              className="w-full" />
            <TextFieldInput label='Address Line 2'
              type="text"
              placeholder='Address Line 2'
              value={addressLine2}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                dispatch(companyAddressLine2Changed(event.target.value))
              }}
              errorText=''
              className="w-full" />
            <div className='flex items-center justify-evenly gap-4'>
              <TextFieldInput label='City'
                type="text"
                placeholder='City'
                value={companyCity.value ?? ''}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  dispatch(companyCityChanged(event.target.value))
                }}
                errorText={companyCity.error}
                className="w-full" />
              <TextFieldInput label='Province'
                type="text"
                placeholder='Province'
                value={companyProvince.value ?? ''}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  dispatch(companyProvinceChanged(event.target.value))
                }}
                errorText={companyProvince.error}
                className="w-full" />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}