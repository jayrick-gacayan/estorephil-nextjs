'use client';

import Image from 'next/image';
import Link from 'next-intl/link';

import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { useEffect, useMemo } from 'react';
import { usePathname, useRouter } from 'next-intl/client';
import { AgentRegisterState } from '../agent/register/_redux/agent-register-state';


export default function SignUpThanksOne() {
  const agentRegisterState: AgentRegisterState = useAppSelector((state: RootState) => { return state.agentRegister });

  const withToken = useMemo(() => {
    return agentRegisterState.withToken
  }, [agentRegisterState.withToken]);

  return (
    <div className='w-full'>
      <div className='flex items-center justify-center h-full'>
        <div className='space-y-4 text-center'>
          <Image alt='thank-you-sign-up-one'
            src='/thank_you.svg'
            height={357}
            width={373}
            className='w-[373px] h-[357px] block m-auto' />
          <div className="block font-semibold">
            <h1 className="text-[56px] leading-0">Thank you for signing up</h1>
            <p className="text-[20px] leading-0">
              {
                withToken ? (<>You can now login to your account.</>) :
                  (<>An email will be sent to you once we&#39;re done checking the details you have provided.</>)
              }
            </p>
          </div>
          <Link href={`${withToken ? '/login' : '/'}`}
            className="rounded block m-auto text-white bg-primary py-2 w-[60%] hover:bg-primary-light">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}