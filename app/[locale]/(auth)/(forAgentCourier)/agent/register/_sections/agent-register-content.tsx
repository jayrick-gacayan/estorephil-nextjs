'use client';

import SignUpThanksOne from '@/app/[locale]/(auth)/_sections/sign-up-thanks-one';
import { useAppSelector } from '@/app/_hooks/redux_hooks';
import { RootState } from '@/redux/store';
import { RequestStatus } from '@/types/enums/request-status';
import { useMemo } from 'react';
import Image from 'next/image';
import AgentRegisterForm from './agent-register-form';

export default function AgentRegisterContent() {
  const agentRegisterState = useAppSelector((state: RootState) => { return state.agentRegister });

  let signUpThanksRequestStatus = useMemo(() => {
    return agentRegisterState.signUpThanksRequestStatus;
  }, [agentRegisterState.signUpThanksRequestStatus])

  let isSuccess = signUpThanksRequestStatus === RequestStatus.SUCCESS;

  return isSuccess ? (<SignUpThanksOne />) :
    (
      <>
        <div className="w-full space-y-8">
          <div className="block">
            <h1 className="text-[60px] text-primary-dark font-bold">Become an Agent</h1>
            <p className="text-[24px] text-primary-dark leading-0">
              You get &#37; commission for every successful customer purchase
            </p>
          </div>
          <div className="block">
            <Image
              src='/register-agent.svg'
              height={457}
              width={561}
              alt=''
            />
          </div>
        </div>
        <div className="w-full">
          <AgentRegisterForm />
        </div>
      </>
    )
}