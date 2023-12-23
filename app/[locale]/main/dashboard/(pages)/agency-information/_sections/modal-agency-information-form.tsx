'use client';

import Modal from '@/app/[locale]/_components/modal';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { AgentAgencyInformationState } from '../_redux/agent-agency-information-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { modalUpdateFormOpened, updateBasicInfoRequestStatusSet, updateModalBasicInfoClicked } from '../_redux/agent-agency-information-slice';
import AgentEditBasicInfoForm from './agent-edit-basic-info-form';
import AgentEditBusinessInfoForm from './agent-edit-business-info-form';
import { agentRegisterFormReset } from '@/app/[locale]/(auth)/(forAgentCourier)/agent/register/_redux/agent-register-slice';
import { RequestStatus } from '@/types/enums/request-status';
import LineDotLoader from '@/app/[locale]/_components/line-dot-loader';
import { useSession } from 'next-auth/react';
import { accountContainer } from '@/inversify/inversify.config';
import { AccountRepository } from '@/repositories/account-repository';
import { TYPES } from '@/inversify/types';
import { updateBasicInfo } from '../_redux/agent-agency-info-thunk';

export default function ModalAgencyInformationForm() {
  const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => {
    return state.agentAgencyInfo;
  })
  const dispatch: AppDispatch = useAppDispatch();
  const { data: sessionData, update } = useSession();


  const { open, type } = useMemo(() => {
    return agentAgencyInfoState.modalUpdateFormOpen;
  }, [agentAgencyInfoState.modalUpdateFormOpen]);

  const { updateBasicInfoRequestStatus } = useMemo(() => { return agentAgencyInfoState }, [agentAgencyInfoState])

  let updateStatus: boolean = useMemo(() => {
    return (updateBasicInfoRequestStatus === RequestStatus.WAITING ||
      updateBasicInfoRequestStatus === RequestStatus.IN_PROGRESS)
  }, [updateBasicInfoRequestStatus])

  const modalContentRef = useRef<HTMLDivElement>(null);

  const cbOnModalClose = useCallback(() => {
    if (!updateStatus) {
      if (modalContentRef.current) {
        modalContentRef.current.classList.remove('animate-slide-up');
        modalContentRef.current.classList.add('animate-slide-down');
        setTimeout(() => {
          if (type === 'basicInfo') {
            dispatch(agentRegisterFormReset());

          }
          dispatch(modalUpdateFormOpened(''));

        }, 300);
      }
    }
  }, [dispatch, updateStatus]);

  useEffect(() => {
    switch (updateBasicInfoRequestStatus) {
      case RequestStatus.WAITING:
        setTimeout(() => { dispatch(updateModalBasicInfoClicked()) }, 1000)
        break;
      case RequestStatus.IN_PROGRESS:
        setTimeout(() => {
          if (sessionData?.token) {
            let accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
            dispatch(updateBasicInfo(
              accountRepository,
              sessionData.token,
              sessionData,
              update
            ));
          }
        }, 1000);
        break;
    }
  }, [updateBasicInfoRequestStatus, dispatch, sessionData])

  useOutsideClick(modalContentRef, () => { cbOnModalClose(); });

  return (
    <Modal open={open}>
      <div ref={modalContentRef}
        className={`animate-slide-up translate-y-full flex-none w-auto rounded-2xl bg-white text-center relative z-10 px-8`}>
        {open && type === 'basicInfo' && <AgentEditBasicInfoForm />}
        {open && type === 'businessInfo' && <AgentEditBusinessInfoForm />}
        <div className='py-8 space-y-4 w-[768px] m-auto'>
          <div className='block'>
            <div className='w-1/2 m-auto'>
              <div className='flex items-stretch gap-2 justify-center'>
                <button className='bg-info p-2 rounded text-white disabled:cursor-not-allowed'
                  disabled={updateStatus}
                  onClick={() => {
                    if (type === 'basicInfo') {
                      dispatch(updateBasicInfoRequestStatusSet(RequestStatus.WAITING))

                    }
                  }}>
                  {
                    !updateStatus ? 'Update' :
                      (
                        <div className='w-fit m-auto block space-x-0.5'>
                          <span className='inline-block align-middle'>
                            <LineDotLoader height={24} width={48} color={'#fff'} />
                          </span>
                          <span className='inline-block'>Checking</span>
                        </div>
                      )
                  }
                </button>
                <button className='border border-info p-2 rounded text-info disabled:cursor-not-allowed'
                  disabled={updateStatus}
                  onClick={cbOnModalClose}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}