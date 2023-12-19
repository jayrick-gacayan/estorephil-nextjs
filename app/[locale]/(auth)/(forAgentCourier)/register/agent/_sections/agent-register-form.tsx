'use client';

import CustomInput from '@/app/[locale]/_components/custom-input';
import FormHeader from '../../_components/form-header';
import { ChangeEvent, useMemo } from 'react';
import GoogleLikeInputField from '@/app/[locale]/_components/google-like-input-field';
import { AppDispatch, RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AgentRegisterState } from '../_redux/agent-register-state';
import { agentRegisterFormClicked, businessNameChanged, emailChanged, firstNameChanged, lastNameChanged, natureOfBusinessChanged } from '../_redux/agent-register-slice';

export default function AgentRegisterForm() {
  const dispatch: AppDispatch = useAppDispatch();
  const agentRegisterState: AgentRegisterState = useAppSelector((state: RootState) => { return state.agentRegister });

  let {
    companyName,
    businessNature,
    lastName,
    firstName,
    email
  } = useMemo(() => { return agentRegisterState }, [agentRegisterState])

  return (
    <div className='rounded bg-white h-full shadow-lg p-8'>
      <div className='flex flex-col h-full justify-between gap-4'>
        <div className='flex-none w-auto'>
          <FormHeader text='Agent' />
          <div className='text-tertiary-dark'>You get &#37; commission for every successful customer purchase</div>
        </div>
        <div className='space-y-2 flex-1'>
          <CustomInput labelText={<div className='font-semibold'>Business Name</div>}
            inputProps={{
              type: 'text',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                dispatch(businessNameChanged(event.target.value));
              },
              value: companyName.value,
              placeholder: 'Enter Business Name: '
            }}
            errorText={companyName.errorText} />
          <CustomInput labelText={<div className='font-semibold'>Nature of Business</div>}
            inputProps={{
              type: 'text',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                dispatch(natureOfBusinessChanged(event.target.value));
              },
              value: businessNature.value,
              placeholder: 'Enter nature of business'
            }}
            errorText={businessNature.errorText} />
          <div className='space-y-3'>
            <div className='font-bold'>Company Owner</div>
            <div className='flex gap-4'>
              <GoogleLikeInputField labelText='Firstname'
                inputProps={{
                  id: 'agent-firstname',
                  type: 'text',
                  value: firstName.value,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    dispatch(firstNameChanged(event.target.value));
                  },
                }}
                errorText={firstName.errorText} />
              <GoogleLikeInputField labelText='Lastname'
                inputProps={{
                  id: 'agent-lastname',
                  type: 'text',
                  value: lastName.value,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    dispatch(lastNameChanged(event.target.value));
                  },
                }}
                errorText={lastName.errorText} />
            </div>
          </div>
          <CustomInput labelText={<div className='font-semibold'>Email Address</div>}
            inputProps={{
              type: 'text',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                dispatch(emailChanged(event.target.value))
              },
              value: email.value,
              placeholder: 'Enter email address'
            }}
            errorText={email.errorText} />
        </div>
        <div className='block'>
          <button className='block w-full p-2 cursor-pointer bg-primary text-white rounded hover:bg-primary-light'
            onClick={() => {
              dispatch(agentRegisterFormClicked())
            }}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}