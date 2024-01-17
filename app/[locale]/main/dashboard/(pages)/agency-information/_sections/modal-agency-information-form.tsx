'use client';

import Modal from '@/app/[locale]/_components/modal';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { AgentAgencyInformationState } from '../_redux/agent-agency-information-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { agentRegisterFormReset, modalUpdateFormOpened, resetPasswordFormClicked, resetPasswordFormReset, resetPasswordRequestStatusChanged, updateBasicInfoRequestStatusSet, } from '../_redux/agent-agency-information-slice';
import { RequestStatus } from '@/types/enums/request-status';
import LineDotLoader from '@/app/[locale]/_components/line-dot-loader';
import { useSession } from 'next-auth/react';
import { accountContainer } from '@/inversify/inversify.config';
import { AccountRepository } from '@/repositories/account-repository';
import { TYPES } from '@/inversify/types';
import { agentResetPassword, updateBasicInfo } from '../_redux/agent-agency-information-thunk';
import EditBasicInfo from './edit-basic-info';
import EditBusinessInfo from './edit-business-info';
import { useSelector } from 'react-redux';
import ResetPasswordInfo from './reset-password-info';

export default function ModalAgencyInformationForm({
  cityProvince
}: {
  cityProvince: { province: string; cities: string[] }[]
}) {
  const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => {
    return state.agentAgencyInfo;
  })
  const dispatch: AppDispatch = useAppDispatch();
  const { data: sessionData, update: updateSession } = useSession()
  const state = useSelector((state: RootState) => state.agentAgencyInfo)
  const { open, type } = useMemo(() => {
    return agentAgencyInfoState.modalUpdateFormOpen;
  }, [agentAgencyInfoState.modalUpdateFormOpen]);

  const { updateBasicInfoStatus, resetPasswordInfoStatus } = useMemo(() => {
    return {
      updateBasicInfoStatus: agentAgencyInfoState.updateBasicInfoStatus,
      resetPasswordInfoStatus: agentAgencyInfoState.resetPasswordRequestStatus
    }
  }, [
    agentAgencyInfoState.updateBasicInfoStatus,
    agentAgencyInfoState.resetPasswordRequestStatus,
  ]);

  let updateStatus: boolean = useMemo(() => {

    return type === 'basicInfo' ? updateBasicInfoStatus === RequestStatus.IN_PROGRESS || updateBasicInfoStatus === RequestStatus.WAITING :
      type === 'resetPassword' ? resetPasswordInfoStatus === RequestStatus.IN_PROGRESS || resetPasswordInfoStatus === RequestStatus.WAITING :
        false;
  }, [updateBasicInfoStatus, type, resetPasswordInfoStatus]);

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
          else if (type === 'resetPassword') {
            dispatch(resetPasswordFormReset())
          }
          dispatch(modalUpdateFormOpened({ type: '', open: false }));

        }, 300);
      }
    }
  }, [dispatch, updateStatus, type]);

  useEffect(() => {
    switch (resetPasswordInfoStatus) {
      case RequestStatus.IN_PROGRESS:
        if (sessionData?.token) {
          let accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
          dispatch(agentResetPassword(accountRepository, sessionData.token));
        }
        break;
      case RequestStatus.SUCCESS:
        cbOnModalClose();

        break;
    }
  }, [resetPasswordInfoStatus, sessionData, dispatch, cbOnModalClose])

  useEffect(() => {
    if (updateBasicInfoStatus === RequestStatus.SUCCESS) {
      async function updateAgentBasicInfo() {
        if (!!sessionData) {
          await updateSession({
            user: {
              ...sessionData,
              user: {
                ...sessionData.user,
                first_name: state.firstName.value ?? sessionData.user.first_name,
                last_name: state.lastName.value ?? sessionData.user.last_name,
                phone_number: state.phoneNumber.value ?? sessionData.user.phone_number,
                city: state.city.value ?? sessionData.user.city,
                province: state.province.value ?? sessionData.user.province
              }
            }
          })
        }
      }
      updateAgentBasicInfo();
      cbOnModalClose();
    }
  }, [updateBasicInfoStatus, sessionData, updateSession, dispatch, cbOnModalClose])

  useOutsideClick(modalContentRef, () => { cbOnModalClose(); });


  console.log('session data', sessionData);

  return (
    <Modal open={open}>
      <div
        ref={modalContentRef}
        className={`animate-slide-up translate-y-full flex-none w-auto rounded-2xl bg-white text-center relative z-10 px-8`}
      >
        {open && type === 'basicInfo' && <EditBasicInfo />}
        {open && type === 'businessInfo' && <EditBusinessInfo />}
        {open && type === 'resetPassword' && <ResetPasswordInfo />
        }
        <div className='py-8 space-y-4 w-[768px] m-auto'>
          <div className='block'>
            <div className='w-1/2 m-auto'>
              <div className='flex items-stretch gap-2 justify-center'>
                <button className={`${type === 'resetPassword' ? 'bg-success hover:bg-success-dark' : 'bg-info hover:bg-info-light'} p-2 rounded text-white disabled:cursor-not-allowed`}
                  disabled={updateStatus}
                  onClick={() => {
                    if (sessionData?.token) {
                      if (type === 'basicInfo') {

                        let accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
                        dispatch(updateBasicInfo(
                          accountRepository,
                          sessionData.token
                        ));

                      }
                      else if (type === 'resetPassword') {
                        dispatch(resetPasswordRequestStatusChanged(RequestStatus.WAITING));
                        dispatch(resetPasswordFormClicked());
                      }
                    }
                  }}>
                  {
                    !(updateStatus) ? (type === 'resetPassword' ? 'Reset' : 'Update') :
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
                <button className={`border p-2 rounded disabled:cursor-not-allowed 
                  ${type === 'resetPassword' ? 'border-success text-success' : 'border-info text-info'}`}
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