'use client';

import Modal from '@/app/[locale]/_components/modal';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { AgentAgencyInformationState } from '../_redux/agent-agency-information-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { agentRegisterFormReset, modalUpdateFormOpened, updateBasicInfoRequestStatusSet, } from '../_redux/agent-agency-information-slice';
import { RequestStatus } from '@/types/enums/request-status';
import LineDotLoader from '@/app/[locale]/_components/line-dot-loader';
import { useSession } from 'next-auth/react';
import { accountContainer } from '@/inversify/inversify.config';
import { AccountRepository } from '@/repositories/account-repository';
import { TYPES } from '@/inversify/types';
import { updateBasicInfo } from '../_redux/agent-agency-information-thunk';
import EditBasicInfo from './edit-basic-info';
import EditBusinessInfo from './edit-business-info';
import { useSelector } from 'react-redux';

export default function ModalAgencyInformationForm({
  cityProvince
}: {
  cityProvince: { province: string; cities: string[] }[]
}) {
  const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => {
    return state.agentAgencyInfo;
  })
  const dispatch: AppDispatch = useAppDispatch();
  // const { data: sessionData, update } = useSession();
  const { data: sessionData, update: updateSession } = useSession()
  const state = useSelector((state: RootState) => state.agentAgencyInfo)
  const { open, type } = useMemo(() => {
    return agentAgencyInfoState.modalUpdateFormOpen;
  }, [agentAgencyInfoState.modalUpdateFormOpen]);
  const updateBasicInfoStatus = useMemo(() => { return agentAgencyInfoState.updateBasicInfoStatus }, [agentAgencyInfoState.updateBasicInfoStatus])

  let updateStatus: boolean = useMemo(() => {
    return updateBasicInfoStatus === RequestStatus.IN_PROGRESS || updateBasicInfoStatus === RequestStatus.WAITING;
  }, [updateBasicInfoStatus])
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
          dispatch(modalUpdateFormOpened({ type: '', open: false }));

        }, 300);
      }
    }
  }, [dispatch, updateBasicInfoStatus]);

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
                phone_number: state.phoneNumber ?? sessionData.user.phone_number,
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

  }, [updateBasicInfoStatus, sessionData, updateSession, dispatch, updateSession])

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
        <div className='py-8 space-y-4 w-[768px] m-auto'>
          <div className='block'>
            <div className='w-1/2 m-auto'>
              <div className='flex items-stretch gap-2 justify-center'>
                <button className='bg-info p-2 rounded text-white disabled:cursor-not-allowed'
                  disabled={updateStatus}
                  onClick={() => {

                    if (type === 'basicInfo') {
                      if (sessionData?.token) {
                        let accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
                        dispatch(updateBasicInfo(
                          accountRepository,
                          sessionData.token
                        ));
                      }
                    }
                  }}>
                  {
                    !(updateStatus) ? 'Update' :
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