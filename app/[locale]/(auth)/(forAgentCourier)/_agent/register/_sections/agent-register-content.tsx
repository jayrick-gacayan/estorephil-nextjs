// 'use client';

// import SignUpThanksOne from '@/app/[locale]/(auth)/_sections/sign-up-thanks-one';
// import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
// import { AppDispatch, RootState } from '@/redux/store';
// import { RequestStatus } from '@/types/enums/request-status';
// import { useEffect, useMemo } from 'react';
// import Image from 'next/image';
// import AgentRegisterForm from './agent-register-form';
// import { getCompanyDataFromInvitation } from '../_redux/agent-register-thunk';
// import { accountContainer } from '@/inversify/inversify.config';
// import { AccountRepository } from '@/repositories/account-repository';
// import { TYPES } from '@/inversify/types';

// export default function AgentRegisterContent({
//   token
// }: {
//   token: string | string[] | undefined
// }) {
//   const dispatch: AppDispatch = useAppDispatch();
//   const agentRegisterState = useAppSelector((state: RootState) => { return state.agentRegister });

//   useEffect(() => {
//     if (token !== undefined && typeof token === 'string') {
//       let accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
//       dispatch(getCompanyDataFromInvitation(accountRepository, token))
//     }
//   }, [token])


//   return (agentRegisterState.signUpThanksRequestStatus === RequestStatus.SUCCESS
//     && (token === undefined || typeof token !== 'string')) ? (<SignUpThanksOne />) :
//     (
//       <>
//         <div className="w-full space-y-8">
//           <div className="block">
//             <h1 className="text-[60px] text-primary-dark font-bold">Become an Agent</h1>
//             <p className="text-[24px] text-primary-dark leading-0">
//               You get &#37; commission for every successful customer purchase
//             </p>
//           </div>
//           <div className="block">
//             <Image
//               src='/register-agent.svg'
//               height={457}
//               width={561}
//               alt=''
//             />
//           </div>
//         </div>
//         <div className="w-full">
//           <AgentRegisterForm token={token} />
//         </div>
//       </>
//     )
// }