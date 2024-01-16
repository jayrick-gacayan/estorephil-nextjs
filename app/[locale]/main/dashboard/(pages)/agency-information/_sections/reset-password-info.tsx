'use client';

import InputGoogleLikeCustom from "@/app/[locale]/_components/input-google-like-custom";
import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { AppDispatch, RootState } from "@/redux/store";
import { ChangeEvent, useEffect, useMemo } from "react";
import { AgentAgencyInformationState } from "../_redux/agent-agency-information-state";
import { currentPasswordChanged, currentPasswordShown, passwordChanged, passwordConfirmationChanged, passwordConfirmationShown, passwordShown } from "../_redux/agent-agency-information-slice";
import { ValidationType } from "@/types/enums/validation-type";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";

export default function ResetPasswordInfo() {
  const dispatch: AppDispatch = useAppDispatch();
  const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => {
    return state.agentAgencyInfo;
  })

  const { currentPassword, password, passwordConfirmation } = useMemo(() => {
    return {
      currentPassword: agentAgencyInfoState.currentPassword,
      password: agentAgencyInfoState.password,
      passwordConfirmation: agentAgencyInfoState.passwordConfirmation
    }
  }, [
    agentAgencyInfoState.password,
    agentAgencyInfoState.passwordConfirmation,
    agentAgencyInfoState.currentPassword
  ]);

  function googleLikeInputClassName(status: ValidationType) {
    return `border-[.5px] rounded w-full p-2 disabled:bg-tertiary-dark
    ${status !== ValidationType.NONE && status !== ValidationType.VALID ? 'text-danger focus:border-danger border-danger' :
        status === ValidationType.VALID ? 'focus:border-success border-success text-success' :
          'focus:border-primary border-tertiary-dark'}`
  }

  function googleLikeInputLabelClassName(status: ValidationType) {
    return `transition-all absolute peer-focus:text-sm cursor-text peer-placeholder-shown:top-2 peer-focus:-top-3 peer-placeholder-shown:text-base left-0 -top-3 text-sm bg-inherit mx-2 px-1 
          ${status !== ValidationType.NONE && status !== ValidationType.VALID ? `text-danger peer-focus:text-danger` :
        status === ValidationType.VALID ? 'peer-focus:text-success text-success' :
          'peer-focus:text-primary peer-placeholder-shown:text-tertiary-dark text-tertiary-dark'}`
  }

  return (
    <>
      <div className='border-b border-secondary-light py-2'>
        <h3 className='text-[32px] leading-0 text-center'>Reset Password</h3>
      </div>
      <div className='space-y-4 py-6 text-left'>
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1">
            <InputGoogleLikeCustom labelText='Current Password'
              inputProps={{
                id: 'agent-reset-current-password',
                type: currentPassword.show ? 'text' : 'password',
                value: currentPassword.value,
                onChange: (event: ChangeEvent<HTMLInputElement>) => {
                  dispatch(currentPasswordChanged(event.target.value));
                },
                className: googleLikeInputClassName(currentPassword.status)
              }}
              errorText={currentPassword.errorText}
              status={currentPassword.status}
              labelClassName={googleLikeInputLabelClassName} />
          </div>
          <div className="flex-none">
            <div className='cursor-pointer' onClick={() => {
              dispatch(currentPasswordShown())
            }}>
              <FaRegEye size={24} className={`${currentPassword.show ? 'hidden' : 'block'}`} />
              <FaEyeSlash size={24} className={`${currentPassword.show ? 'block' : 'hidden'}`} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1">
            <InputGoogleLikeCustom labelText='Password'
              inputProps={{
                id: 'agent-reset-password',
                type: password.show ? 'text' : 'password',
                value: password.value,
                onChange: (event: ChangeEvent<HTMLInputElement>) => {
                  dispatch(passwordChanged(event.target.value));
                },
                className: googleLikeInputClassName(password.status)
              }}
              errorText={password.errorText}
              status={password.status}
              labelClassName={googleLikeInputLabelClassName} />
          </div>
          <div className="flex-none">
            <div className='cursor-pointer' onClick={() => {
              dispatch(passwordShown())
            }}>
              <FaRegEye size={24} className={`${password.show ? 'hidden' : 'block'}`} />
              <FaEyeSlash size={24} className={`${password.show ? 'block' : 'hidden'}`} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1">
            <InputGoogleLikeCustom labelText='Confirm Password'
              inputProps={{
                id: 'agent-reset-password-confirmation',
                type: passwordConfirmation.show ? 'text' : 'password',
                value: passwordConfirmation.value,
                onChange: (event: ChangeEvent<HTMLInputElement>) => {
                  dispatch(passwordConfirmationChanged(event.target.value));
                },
                className: googleLikeInputClassName(passwordConfirmation.status)
              }}
              errorText={passwordConfirmation.errorText}
              status={passwordConfirmation.status}
              labelClassName={googleLikeInputLabelClassName} />
          </div>
          <div className="flex-none">
            <div className='cursor-pointer' onClick={() => {
              dispatch(passwordConfirmationShown())
            }}>
              <FaRegEye size={24} className={`${passwordConfirmation.show ? 'hidden' : 'block'}`} />
              <FaEyeSlash size={24} className={`${passwordConfirmation.show ? 'block' : 'hidden'}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}