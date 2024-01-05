'use client';

import FormHeader from '../../../_components/form-header';
import { ChangeEvent, useEffect, useMemo } from 'react';
import { AppDispatch, RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AgentRegisterState } from '../_redux/agent-register-state';
import {
  agentRegisterFormClicked,
  businessNameChanged,
  confirmPasswordChanged,
  emailChanged,
  firstNameChanged,
  lastNameChanged,
  natureOfBusinessChanged,
  passwordChanged,
  phoneNumberChanged,
  signUpThanksRequestStatusSet
} from '../_redux/agent-register-slice';
import { RequestStatus } from '@/types/enums/request-status';
import { accountContainer } from '@/inversify/inversify.config';
import { AccountRepository } from '@/repositories/account-repository';
import { TYPES } from '@/inversify/types';
import { registerAgent, registerUserAgent } from '../_redux/agent-register-thunk';
import LineDotLoader from '@/app/[locale]/_components/line-dot-loader';
import InputCustom from '@/app/[locale]/_components/input-custom';
import { ValidationType } from '@/types/enums/validation-type';
import InputGoogleLikeCustom from '@/app/[locale]/_components/input-google-like-custom';
import { useRouter } from 'next-intl/client';
import PhoneNumberInput from '@/app/[locale]/_components/phone-number-input';

export default function AgentRegisterForm({
  token
}: {
  token: string | string[] | undefined
}) {
  const router = useRouter();
  const dispatch: AppDispatch = useAppDispatch();
  const agentRegisterState: AgentRegisterState = useAppSelector((state: RootState) => { return state.agentRegister });

  let {
    companyName,
    businessNature,
    lastName,
    firstName,
    phoneNumber,
    email,
    password,
    passwordConfirmation,
    signUpThanksRequestStatus,
    withToken,
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

        if (withToken) {
          if (token !== undefined && typeof token === 'string') {
            dispatch(registerUserAgent(accountRepository, token))
          }
        }
        else {
          dispatch(registerAgent(accountRepository))
        }
        break;
      case RequestStatus.SUCCESS:
        if (withToken) {
          alert('You can now login to your account');
          router.push('/login');
        }
        break;
    }
  }, [signUpThanksRequestStatus, dispatch, token, withToken]);

  function divClassName(status: ValidationType) {
    return `border divide-x rounded w-full flex items-center gap-2
        ${status !== ValidationType.NONE && status !== ValidationType.VALID ? 'text-danger divide-danger has-[input:focus]:border-danger border-danger' :
        status === ValidationType.VALID ? 'text-success border-success divide-success has-[input:focus]:border-success' :
          'border-tertiary-dark divide-tertiary-dark has-[input:focus]:border-primary has-[input:focus]:divide-primary'
      }`
  }

  function labelClassName(status: ValidationType) {
    return `font-semibold ${status !== ValidationType.NONE && status !== ValidationType.VALID ? 'text-danger' :
      status === ValidationType.VALID ? 'text-success' : ''}`
  }

  function googleLikeInputLabelClassName(status: ValidationType) {
    return `transition-all absolute peer-focus:text-sm cursor-text peer-placeholder-shown:top-2 peer-focus:-top-3 peer-placeholder-shown:text-base left-0 -top-3 text-sm bg-inherit mx-2 px-1 
          ${status !== ValidationType.NONE && status !== ValidationType.VALID ? `text-danger peer-focus:text-danger` :
        status === ValidationType.VALID ? 'peer-focus:text-success text-success' :
          'peer-focus:text-primary peer-placeholder-shown:text-tertiary-dark text-tertiary-dark'}`
  }

  function googleLikeInputClassName(status: ValidationType) {
    return `border-[.5px] rounded w-full p-2 disabled:bg-tertiary-dark
    ${status !== ValidationType.NONE && status !== ValidationType.VALID ? 'text-danger focus:border-danger border-danger' :
        status === ValidationType.VALID ? 'focus:border-success border-success text-success' :
          'focus:border-primary border-tertiary-dark'}`
  }

  return (
    <div className='rounded bg-white h-full shadow-lg p-8 overflow-hidden'>
      <div className='flex flex-col h-full justify-between gap-4'>
        <div className='flex-none w-auto'>
          <FormHeader text='Agent' />
          <div className='text-tertiary-dark'>You get &#37; commission for every successful customer purchase</div>
        </div>
        <div className='space-y-2 flex-1'>
          <InputCustom labelText={<div className={labelClassName(companyName.status)}>Business Name</div>}
            divClassName={divClassName(companyName.status)}
            inputProps={{
              id: 'company-name-register-agent',
              type: 'text',
              disabled: token !== undefined && typeof token === 'string',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                dispatch(businessNameChanged(event.target.value));
              },
              className: 'p-2 disabled:bg-tertiary-dark',
              value: companyName.value,
              placeholder: 'Enter Business Name: '
            }}
            errorText={companyName.errorText} />
          <InputCustom labelText={<div className={labelClassName(businessNature.status)}>Nature of Business</div>}
            divClassName={divClassName(businessNature.status)}
            inputProps={{
              id: 'business-nature-register-agent',
              type: 'text',
              disabled: token !== undefined && typeof token === 'string',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                dispatch(natureOfBusinessChanged(event.target.value));
              },
              value: businessNature.value,
              placeholder: 'Enter nature of business',
              className: 'p-2 disabled:bg-tertiary-dark',
            }}
            errorText={businessNature.errorText} />
          <div className='space-y-3'>
            <div className='font-bold'>Company Owner</div>
            <div className='flex gap-4'>
              <InputGoogleLikeCustom labelText='Firstname'
                inputProps={{
                  id: 'agent-register-firstname',
                  type: 'text',
                  value: firstName.value,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    dispatch(firstNameChanged(event.target.value));
                  },
                  disabled: token !== undefined && typeof token === 'string',
                  className: googleLikeInputClassName(firstName.status)
                }}
                errorText={firstName.errorText}
                status={firstName.status}
                labelClassName={googleLikeInputLabelClassName} />
              <InputGoogleLikeCustom labelText='Lastname'
                inputProps={{
                  id: 'agent-register-lastname',
                  type: 'text',
                  value: lastName.value,
                  disabled: token !== undefined && typeof token === 'string',
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    dispatch(lastNameChanged(event.target.value));
                  },
                  className: googleLikeInputClassName(lastName.status)
                }}
                errorText={lastName.errorText}
                status={lastName.status}
                labelClassName={googleLikeInputLabelClassName} />
            </div>
          </div>
          <InputCustom errorText={email.errorText}
            divClassName={divClassName(email.status)}
            labelText={<div className={labelClassName(email.status)}>Email Address</div>}
            inputProps={{
              id: 'email-register-agent-id',
              value: email.value,
              className: 'p-2 disabled:bg-tertiary-dark',
              disabled: token !== undefined && typeof token === 'string',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                dispatch(emailChanged(event.target.value))
              },
              placeholder: 'Enter email address',
            }} />

          <PhoneNumberInput defaultCountry='PH'
            labelText={<div className={labelClassName(phoneNumber.status)}>Phone Number</div>}
            divClassName={divClassName(phoneNumber.status)}
            inputProps={{
              id: 'register-phone-input',
              type: 'text',
              value: phoneNumber.value,
              placeholder: 'Enter phone number:',
              className: 'p-2 disabled:bg-tertiary-dark',
            }}
            errorText={phoneNumber.errorText}
            onPhoneChanged={(phone: string) => {
              dispatch(phoneNumberChanged(phone))
            }} />
          {
            token && typeof token === 'string' &&
            (
              <>
                <InputCustom errorText={password.errorText}
                  divClassName={divClassName(password.status)}
                  labelText={<div className={labelClassName(password.status)}>Password</div>}
                  inputProps={{
                    id: 'password-register-agent-id',
                    type: 'password',
                    value: password.value,
                    className: 'p-2',
                    onChange: (event: ChangeEvent<HTMLInputElement>) => {
                      dispatch(passwordChanged(event.target.value))
                    },
                    placeholder: 'Enter password',
                  }} />
                <InputCustom errorText={passwordConfirmation.errorText}
                  divClassName={divClassName(passwordConfirmation.status)}
                  labelText={<div className={labelClassName(passwordConfirmation.status)}>Confirm Password</div>}
                  inputProps={{
                    id: 'confirm-password-register-agent-id',
                    type: 'password',
                    value: passwordConfirmation.value,
                    className: 'p-2',
                    onChange: (event: ChangeEvent<HTMLInputElement>) => {
                      dispatch(confirmPasswordChanged(event.target.value))
                    },
                    placeholder: 'Enter confirm password',
                  }} />
              </>
            )
          }
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