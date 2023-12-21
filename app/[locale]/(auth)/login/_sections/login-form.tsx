'use client'

import { authContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { AppDispatch, RootState } from '@/redux/store';;
import { useTranslations } from 'next-intl'
import { login } from '../_redux/login-thunk';
import { emailChanged, loginFormSubmitted, loginRequestStatusSet, passwordChanged } from '../_redux/login-slice';

import { ChangeEvent, FormEvent, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import LoginSuccess from './login-success';
import { useSession } from 'next-auth/react';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { LoginState } from '../_redux/login-state';
import CustomInput from '@/app/[locale]/_components/custom-input';
import { FaEnvelope, FaLock } from 'react-icons/fa6';
import { Checkbox } from '@/app/[locale]/_components/checkbox';
import Link from 'next-intl/link';
import LineDotLoader from '@/app/[locale]/_components/line-dot-loader';
import { RequestStatus } from '@/types/enums/request-status';
import { AuthRepository } from '@/repositories/auth-repository';

export default function LoginForm() {
    const dispatch: AppDispatch = useAppDispatch();
    const loginState: LoginState = useAppSelector((state: RootState) => {
        return state.login;
    })
    const translate = useTranslations()
    const { requestStatus, email, password } = useMemo(() => { return loginState }, [loginState]);
    const router = useRouter();
    const { data: sessionData } = useSession();

    useEffect(() => {
        switch (requestStatus) {
            case RequestStatus.WAITING:
                setTimeout(() => {
                    dispatch(loginFormSubmitted());
                }, 2000);
                break;
            case RequestStatus.IN_PROGRESS:
                setTimeout(() => {
                    const authRepository = authContainer.get<AuthRepository>(TYPES.AuthRepository);
                    dispatch(login(authRepository))
                }, 2000);
                break;
        }
    }, [requestStatus])

    useEffect(() => {
        if (!!sessionData) { router.push('/'); }
    }, [sessionData, router]);

    function loginFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch(loginRequestStatusSet(RequestStatus.WAITING));
    }

    return (

        <>
            {
                requestStatus === RequestStatus.SUCCESS ? (<LoginSuccess />) :
                    (<div className='block'>
                        <div className='bg-white rounded-md w-[352px] shadow-lg overflow-hidden space-y-4'>
                            <h3 className='bg-default-dark p-4 text-white text-[24px] text-center'>{translate('agent')}</h3>
                            <div className='block text-center'>{translate('signIn')}</div>
                            <div className='px-8 py-4 space-y-8'>
                                <form onSubmit={loginFormSubmit} className='space-y-4'>
                                    <div className='block'>
                                        <div className='border focus-within:border-primary rounded overflow-hidden tw-full border-tertiary-dark flex items-center'>
                                            <div className='flex-1 p-2'>
                                                <CustomInput
                                                    inputProps={{
                                                        id: 'login-id',
                                                        value: email.value,
                                                        onChange: (event: ChangeEvent<HTMLInputElement>) => {
                                                            dispatch(emailChanged(event.target.value))
                                                        },
                                                        placeholder: 'Enter email Address'
                                                    }} />
                                            </div>
                                            <div className='flex-none w-9 p-2 border-l border-l-tertiary-dark'>
                                                <div><FaEnvelope /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className='border focus-within:border-primary rounded overflow-hidden tw-full border-tertiary-dark flex items-center divide-x divide-tertiary-dark'>
                                            <div className='flex-1 p-2'>
                                                <CustomInput
                                                    inputProps={{
                                                        id: 'login-id',
                                                        type: 'password',
                                                        value: password.value,
                                                        onChange: (event: ChangeEvent<HTMLInputElement>) => {
                                                            dispatch(passwordChanged(event.target.value))
                                                        },
                                                        placeholder: 'Enter password'
                                                    }} />
                                            </div>
                                            <div className='flex-none w-9 p-2'>
                                                <FaLock />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                        <div className='flex items-center gap-2'>
                                            {/* <Checkbox<boolean> current={false}
                                                value={true}
                                                onCheckboxChanged={(value: boolean) => {
                                                    return
                                                }}
                                                checkBoxClassName={(value: boolean, current: boolean) => {
                                                    return `border -leading-1 ${current === value ? 'border-primary text-primary' : 'border-tertiary-dark'} rounded w-6 h-6`;
                                                }}
                                                checkClassName={(value: boolean, current: boolean) => {
                                                    return `${current === value ? 'block' : 'hidden'} translate-x-[2px] translate-y-[1px]`;
                                                }} /> */}
                                            <input
                                                type='checkbox'
                                                className="form-checkbox rounded-md cursor-pointer h-5 w-5 border border-gray-300 text-blue-400 focus:ring-0 focus:ring-offset-0"
                                            />
                                            <div className='text-tertiary-dark text-xs'>
                                                {translate('rememberMe')}
                                            </div>
                                        </div>
                                        <div className='text-tertiary-dark font-semibold text-xs'>
                                            {translate('forgotPassword?')}
                                        </div>

                                    </div>
                                    <button type='submit'
                                        className='w-full bg-primary rounded disabled:cursor-not-allowed text-white py-2 mt-4 flex items-center justify-center'
                                        disabled={requestStatus == RequestStatus.IN_PROGRESS || requestStatus === RequestStatus.WAITING}>

                                        {requestStatus == RequestStatus.IN_PROGRESS || requestStatus === RequestStatus.WAITING
                                            ? (<div className='w-fit m-auto block space-x-0.5'>
                                                <span className='inline-block align-middle'>
                                                    <LineDotLoader height={24} width={48} color={'#fff'} />
                                                </span>
                                                <span className='inline-block'>Checking</span>
                                            </div>) : translate('login')}
                                    </button>
                                </form>
                                <div className='space-y-4'>
                                    <Link href='#'
                                        className='transition-all delay-100 text-tertiary-dark w-full block text-center hover:text-primary hover:underline'>{translate('needToSignUp?')}</Link>
                                    <button className='transition-all delay-100 bg-white w-full border-tertiary-dark rounded border py-2 hover:bg-warning-light hover:text-white'
                                        onClick={(e) => {
                                            // store.dispatch(login(accountRepository))
                                        }}
                                    >
                                        {translate('registerNow')}
                                    </button>
                                </div>

                            </div>
                        </div>

                        {/* </div>
                        {requestStatus == RequestStatus.FAILURE && <div className='flex items-center justify-center text-red-500'>invalid credentials</div>}
        </div > */}
                    </div>
                    )
            }
        </>
    )
}