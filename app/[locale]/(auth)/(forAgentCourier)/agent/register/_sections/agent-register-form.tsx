'use client';

import CustomInput from '@/app/[locale]/_components/custom-input';
import FormHeader from '../../../_components/form-header';
import { ChangeEvent, useEffect, useMemo } from 'react';
import GoogleLikeInputField from '@/app/[locale]/_components/google-like-input-field';
import { AppDispatch, RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AgentRegisterState } from '../_redux/agent-register-state';
import { agentRegisterFormClicked, businessNameChanged, emailChanged, firstNameChanged, lastNameChanged, natureOfBusinessChanged, signUpThanksRequestStatusSet } from '../_redux/agent-register-slice';
import { RequestStatus } from '@/types/enums/request-status';
import { accountContainer } from '@/inversify/inversify.config';
import { AccountRepository } from '@/repositories/account-repository';
import { TYPES } from '@/inversify/types';
import { registerAgent } from '../_redux/agent-register-thunk';
import LineDotLoader from '@/app/[locale]/_components/line-dot-loader';

export default function AgentRegisterForm() {
  const dispatch: AppDispatch = useAppDispatch();
  const agentRegisterState: AgentRegisterState = useAppSelector((state: RootState) => { return state.agentRegister });

  let {
    companyName,
    businessNature,
    lastName,
    firstName,
    email,
    signUpThanksRequestStatus
  } = useMemo(() => { return agentRegisterState }, [agentRegisterState]);

  useEffect(() => {
    switch (signUpThanksRequestStatus) {
      case RequestStatus.WAITING:
        setTimeout(() => {
          dispatch(agentRegisterFormClicked())
        }, 2000);
        break;
      case RequestStatus.IN_PROGRESS:
        let accountRepository: AccountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);

        dispatch(registerAgent(accountRepository));
    }
  }, [signUpThanksRequestStatus])

  return (
    <div className='rounded bg-white h-full shadow-lg p-8 overflow-hidden'>
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
          <button onClick={() => { dispatch(signUpThanksRequestStatusSet(RequestStatus.WAITING)); }}
            disabled={signUpThanksRequestStatus === RequestStatus.WAITING || signUpThanksRequestStatus === RequestStatus.IN_PROGRESS}
            className={'block w-full p-2 disabled:cursor-not-allowed text-center cursor-pointer bg-primary text-white rounded hover:bg-primary-light'}>
            {
              signUpThanksRequestStatus === RequestStatus.WAITING ||
                signUpThanksRequestStatus === RequestStatus.IN_PROGRESS ?
                (
                  <div className='w-fit m-auto block space-x-0.5'>
                    <span className='inline-block align-middle'>
                      <LineDotLoader height={24} width={48} color={'#fff'} />
                    </span>
                    <span className='inline-block'>Checking</span>
                  </div>
                ) : "Sign up"
            }
          </button>
        </div>
      </div>
    </div>
  )
}