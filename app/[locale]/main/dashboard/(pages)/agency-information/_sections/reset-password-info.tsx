'use client';

import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { AppDispatch, RootState } from "@/redux/store";
import { useMemo, useState } from "react";
import { AgentAgencyInformationState } from "../_redux/agent-agency-information-state";
import {
  currentPasswordChanged,
  passwordChanged,
  passwordConfirmationChanged,
} from "../_redux/agent-agency-information-slice";
import { ValidationType } from "@/types/enums/validation-type";
import InputGoogleLikePasswordCustom from "@/app/[locale]/_components/input-google-like-password-custom";

export default function ResetPasswordInfo() {
  const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState<boolean>(false);

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

  function googleLikeInputPasswordClassName(status: ValidationType) {
    return `border-[.5px] rounded w-full p-2 disabled:bg-tertiary-dark
    ${status !== ValidationType.NONE && status !== ValidationType.VALID ? 'text-danger has-[input:focus]:border-danger border-danger' :
        status === ValidationType.VALID ? 'has-[input:focus]:border-success border-success text-success' :
          'has-[input:focus]:border-primary border-tertiary-dark'}`
  }

  function googleLikeInputLabelClassName(status: ValidationType) {
    return `transition-all absolute peer-focus:text-sm cursor-text peer-placeholder-shown:top-[.5px] peer-focus:-top-[18px] peer-placeholder-shown:text-base left-0 -top-[18px] text-sm bg-inherit px-1
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

        <InputGoogleLikePasswordCustom labelText='Current Password'
          passwordField={currentPassword}
          labelClassName={googleLikeInputLabelClassName}
          inputId='agent-reset-current-password'
          show={showCurrentPassword}
          onPasswordChanged={(passwordValue: string) => { dispatch(currentPasswordChanged(passwordValue)); }}
          onPasswordShown={(show: boolean) => { setShowCurrentPassword(!show); }}
          inputContainerClassName={googleLikeInputPasswordClassName} />
        <InputGoogleLikePasswordCustom labelText='Password'
          passwordField={password}
          labelClassName={googleLikeInputLabelClassName}
          inputId='agent-reset-password'
          show={showPassword}
          onPasswordChanged={(passwordValue: string) => { dispatch(passwordChanged(passwordValue)); }}
          onPasswordShown={(show: boolean) => { setShowPassword(!show); }}
          inputContainerClassName={googleLikeInputPasswordClassName} />
        <InputGoogleLikePasswordCustom labelText='Confirm Password'
          passwordField={passwordConfirmation}
          labelClassName={googleLikeInputLabelClassName}
          inputId='agent-reset-password-confirmation'
          show={showPasswordConfirmation}
          onPasswordChanged={(passwordValue: string) => { dispatch(passwordConfirmationChanged(passwordValue)); }}
          onPasswordShown={(show: boolean) => { setShowPasswordConfirmation(!show); }}
          inputContainerClassName={googleLikeInputPasswordClassName} />
      </div>
    </>
  )
}