'use client';

import { ChangeEvent, useEffect, useMemo } from 'react';
import { AgentAgencyInformationState } from '../_redux/agent-agency-information-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { address1Changed, address2Changed, cityChanged, firstNameChanged, lastNameChanged, phoneNumberChanged, provinceChanged } from '../_redux/agent-agency-information-slice';
import { useTranslations } from 'next-intl';
import TextFieldInput from '../../../_components/text-field-input';
import { useSession } from 'next-auth/react';

export default function EditBasicInfo() {
  const dispatch: AppDispatch = useAppDispatch();
  const state: AgentAgencyInformationState = useAppSelector((state: RootState) => { return state.agentAgencyInfo });
  const { data: sessionData } = useSession()
  const translate = useTranslations()
  useEffect(() => {
    if (sessionData) {
      dispatch(firstNameChanged(sessionData.user.first_name ?? ''));
      dispatch(lastNameChanged(sessionData.user.last_name ?? ''));
      dispatch(phoneNumberChanged(sessionData.user.phone_number ?? ''));
      dispatch(address1Changed(sessionData.user.address_1 ?? ''));
      dispatch(address2Changed(sessionData.user.address_2 ?? ''));
      dispatch(cityChanged(sessionData.user.city ?? ''));
      dispatch(provinceChanged(sessionData.user.province ?? ''));
    }
  }, [dispatch, sessionData])
  return (
    <>
      <div className='m-4'>
        <div className="border-b border-secondary-light py-2">
          <h3 className='text-[32px] leading-0 text-center'>Edit Basic Information</h3>
        </div>
        <div className="space-y-2 text-left my-4">
          <TextFieldInput label={translate('firstName')} type="text" placeholder={translate('staffFirstName')} value={state.firstName.value ?? ''} onChange={(e) => { dispatch(firstNameChanged(e.target.value)) }} errorText={state.firstName.error} className="w-full" />
          <TextFieldInput label={translate('lastName')} type="text" placeholder={translate('staffLastName')} value={state.lastName.value ?? ''} onChange={(e) => { dispatch(lastNameChanged(e.target.value)) }} errorText={state.lastName.error} className="w-full" />
          <TextFieldInput
            label={translate('phoneNumber')}
            type="text"
            placeholder={translate('staffPhoneNumber')}
            value={state.phoneNumber.value ?? ''}
            onChange={(e) => {
              const inputValue = e.target.value
              if (/^[0-9+]*$/.test(inputValue)) {
                dispatch(phoneNumberChanged(inputValue));
              }
            }} errorText={state.phoneNumber.error}
            className="w-full"
          />
          <TextFieldInput label={translate('address1')} value={state.address1.value ?? ''} onChange={(e) => { dispatch(address1Changed(e.target.value)) }} type="text" placeholder={translate('staffMainAddress')} errorText={state.address1.error} className="w-full" />
          <TextFieldInput label={translate('address2')} value={state.address2.value ?? ''} onChange={(e) => { dispatch(address2Changed(e.target.value)) }} type="text" placeholder={translate('staffSecondaryAddress')} className="w-full" />
          <TextFieldInput label={translate('city')} value={state.city.value ?? ''} onChange={(e) => { dispatch(cityChanged(e.target.value)) }} type="text" placeholder={translate('city')} errorText={state.city.error} className="w-full" />
          <TextFieldInput label={translate('province')} value={state.province.value ?? ''} onChange={(e) => { dispatch(provinceChanged(e.target.value)) }} type="text" placeholder={translate('province')} className="w-full" />
        </div>
      </div>

    </>
  )
}