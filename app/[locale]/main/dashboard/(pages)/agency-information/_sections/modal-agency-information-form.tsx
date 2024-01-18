'use client';

import Modal from '@/app/[locale]/_components/modal';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { AgentAgencyInformationState } from '../_redux/agent-agency-information-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import {
  agentEditFormBasicInfoReset,
  agentEditFormBusinessInfoReset,
  modalUpdateFormOpened,
  resetPasswordFormClicked,
  resetPasswordFormReset,
  resetPasswordRequestStatusChanged,
  updateBasicInfoRequestStatusSet,
} from '../_redux/agent-agency-information-slice';
import { RequestStatus } from '@/types/enums/request-status';
import LineDotLoader from '@/app/[locale]/_components/line-dot-loader';
import { useSession } from 'next-auth/react';
import { accountContainer } from '@/inversify/inversify.config';
import { AccountRepository } from '@/repositories/account-repository';
import { TYPES } from '@/inversify/types';
import { agentResetPassword, updateBasicInfo, updateBusinessInfo } from '../_redux/agent-agency-information-thunk';
import EditBasicInfo from './edit-basic-info';
import EditBusinessInfo from './edit-business-info';
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
  const { data: sessionData, update: updateSession } = useSession();

  const { open, type } = useMemo(() => {
    return agentAgencyInfoState.modalUpdateFormOpen;
  }, [agentAgencyInfoState.modalUpdateFormOpen]);

  const {
    updateBasicInfoStatus,
    resetPasswordInfoStatus,
    updateBusinessInfoStatus
  } = useMemo(() => {
    return {
      updateBasicInfoStatus: agentAgencyInfoState.updateBasicInfoStatus,
      resetPasswordInfoStatus: agentAgencyInfoState.resetPasswordRequestStatus,
      updateBusinessInfoStatus: agentAgencyInfoState.updateBusinessInfoRequestStatus,
    }
  }, [
    agentAgencyInfoState.updateBasicInfoStatus,
    agentAgencyInfoState.resetPasswordRequestStatus,
    agentAgencyInfoState.updateBusinessInfoRequestStatus,
  ]);

  let updateStatus: boolean = useMemo(() => {
    let updateStatus: undefined | RequestStatus = undefined;

    switch (type) {
      case 'basicInfo': updateStatus = updateBasicInfoStatus; break;
      case 'resetPassword': updateStatus = resetPasswordInfoStatus; break;
      case 'businessInfo': updateStatus = updateBusinessInfoStatus; break;
    }

    return !updateStatus ? false : (updateStatus === RequestStatus.IN_PROGRESS || updateStatus === RequestStatus.WAITING);

  }, [updateBasicInfoStatus, type, resetPasswordInfoStatus, updateBusinessInfoStatus]);

  const modalContentRef = useRef<HTMLDivElement>(null);

  const cbOnModalClose = useCallback(() => {
    if (!updateStatus) {
      if (modalContentRef.current) {
        modalContentRef.current.classList.remove('animate-slide-up');
        modalContentRef.current.classList.add('animate-slide-down');
        setTimeout(() => {
          switch (type) {
            case 'basicInfo': dispatch(agentEditFormBasicInfoReset()); break;
            case 'resetPassword': dispatch(resetPasswordFormReset()); break;
            case 'businessInfo': dispatch(agentEditFormBusinessInfoReset()); break;
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
  }, [resetPasswordInfoStatus, sessionData, dispatch, cbOnModalClose]);

  useEffect(() => {
    if (updateBusinessInfoStatus === RequestStatus.SUCCESS) {
      cbOnModalClose();
    }
  }, [cbOnModalClose, updateBusinessInfoStatus])

  useEffect(() => {
    if (updateBasicInfoStatus === RequestStatus.SUCCESS) {
      async function updateAgentBasicInfo() {
        if (!!sessionData) {
          await updateSession({
            user: {
              ...sessionData,
              user: {
                ...sessionData.user,
                first_name: agentAgencyInfoState.firstName.value ?? sessionData.user.first_name,
                last_name: agentAgencyInfoState.lastName.value ?? sessionData.user.last_name,
                phone_number: agentAgencyInfoState.phoneNumber.value ?? sessionData.user.phone_number,
                city: agentAgencyInfoState.city.value ?? sessionData.user.city,
                province: agentAgencyInfoState.province.value ?? sessionData.user.province
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
      <div className='animate-slide-up translate-y-full flex-none w-auto rounded-2xl bg-white text-center relative z-10 px-8'
        ref={modalContentRef}>
        {open && type === 'basicInfo' && <EditBasicInfo />}
        {open && type === 'businessInfo' && <EditBusinessInfo />}
        {open && type === 'resetPassword' && <ResetPasswordInfo />}
        <div className='py-8 space-y-4 w-[768px] m-auto'>
          <div className='block'>
            <div className='w-1/2 m-auto'>
              <div className='flex items-stretch gap-2 justify-center'>
                <button className={`${type === 'resetPassword' ? 'bg-success hover:bg-success-dark' : 'bg-info hover:bg-info-light'} p-2 rounded text-white disabled:cursor-not-allowed`}
                  disabled={updateStatus}
                  onClick={() => {
                    let token = sessionData?.token
                    if (token) {
                      let accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);

                      switch (type) {
                        case 'basicInfo': dispatch(updateBasicInfo(accountRepository, token)); break;
                        case 'businessInfo':
                          dispatch(updateBusinessInfo(
                            accountRepository,
                            token,
                            (data: any) => {
                              console.log('here data', data)
                              // updateSession({
                              //   user: {
                              //     ...sessionData,
                              //     company: { ...sessionData?.company, ...data }
                              //   },
                              // })
                            }
                          ));
                          break;
                        case 'resetPassword':
                          dispatch(resetPasswordRequestStatusChanged(RequestStatus.WAITING));
                          dispatch(resetPasswordFormClicked());
                          break;
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