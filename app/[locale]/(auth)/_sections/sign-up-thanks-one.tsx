'use client';

import Image from 'next/image';
import Link from 'next-intl/link';
import { AgentRegisterState } from '../(forAgentCourier)/agent/register/_redux/agent-register-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { useEffect, useMemo } from 'react';
import { usePathname, useRouter } from 'next-intl/client';
import { agentRegisterFormReset } from '../(forAgentCourier)/agent/register/_redux/agent-register-slice';

export default function SignUpThanksOne() {
  const dispatch: AppDispatch = useAppDispatch();
  const pathname: string = usePathname();
  const router = useRouter();
  const agentRegisterState: AgentRegisterState = useAppSelector((state: RootState) => { return state.agentRegister });

  let pathName = useMemo(() => { return pathname }, [pathname])

  useEffect(() => {
    dispatch(agentRegisterFormReset());
    router.push('/')
  }, [pathName]);

  useEffect(() => {

  }, [])

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
            <p className="text-[20px] leading-0">An email will be sent to you once we&#39;re done checking the details you have provided.</p>
          </div>
          <Link href='/'
            className="rounded block m-auto text-white bg-primary py-2 w-[60%] hover:bg-primary-light">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}