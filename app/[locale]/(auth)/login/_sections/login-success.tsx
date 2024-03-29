import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { LoginState } from '../_redux/login-state';
import { loginRequestStatusSet } from '../_redux/login-slice';
import { RequestStatus } from '@/types/enums/request-status';
import { useSession } from 'next-auth/react';

export default function LoginSuccess() {
    const { data: sessionData } = useSession();
    const router = useRouter();
    const dispatch: AppDispatch = useAppDispatch();
    const loginState: LoginState = useAppSelector((state: RootState) => { return state.login });

    const loginStatus = useMemo(() => { return loginState.requestStatus }, [loginState.requestStatus])

    useEffect(() => {
        if (loginStatus == RequestStatus.SUCCESS) {
            if (sessionData?.user) {
                let role = sessionData.user.role!;
                setTimeout(() => {
                    router.push(
                        role.includes('agent') ? '/' : role.includes('courier') ? '/courier' : '/admin'
                    );
                }, 2000);


            }
        }
    }, [loginStatus, dispatch, router, sessionData?.user]);

    return (
        <motion.div initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center justify-center fixed h-screen w-screen'>
            <div className='flex items-center justify-center w-[100px] h-[100px] rounded-[50%]'>
                <CiCircleCheck color='10D62E' size={100} />{/* ✅ */}
            </div>
            <h1 className='mt-8 text-lg font-semibold text-default-dark'>Login Successful!</h1>
        </motion.div>
    )
}