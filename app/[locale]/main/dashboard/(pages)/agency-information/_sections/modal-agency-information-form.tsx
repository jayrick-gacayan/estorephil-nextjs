'use client';

import Modal from '@/app/[locale]/_components/modal';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { useCallback, useMemo, useRef } from 'react';
import { AgentAgencyInformationState } from '../_redux/agent-agency-information-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { AppDispatch, RootState } from '@/redux/store';
import { modalUpdateFormOpened, updateModalBasicInfoClicked } from '../_redux/agent-agency-information-slice';
import AgentEditBasicInfoForm from './agent-edit-basic-info-form';
import AgentEditBusinessInfoForm from './agent-edit-business-info-form';

export default function ModalAgencyInformationForm() {
  const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => {
    return state.agentAgencyInfo;
  })
  const dispatch: AppDispatch = useAppDispatch();

  const { open, type } = useMemo(() => {
    return agentAgencyInfoState.modalUpdateFormOpen;
  }, [agentAgencyInfoState.modalUpdateFormOpen])

  const modalContentRef = useRef<HTMLDivElement>(null);

  const cbOnModalClose = useCallback(() => {
    if (modalContentRef.current) {
      modalContentRef.current.classList.remove('animate-slide-up');
      modalContentRef.current.classList.add('animate-slide-down');
      setTimeout(() => {
        dispatch(modalUpdateFormOpened(''));
      }, 300);
    }
  }, [dispatch]);

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
                <button className='bg-info p-2 rounded text-white'
                  onClick={() => {
                    if (type === 'basicInfo') {
                      dispatch(updateModalBasicInfoClicked())
                    }
                  }}>Update</button>
                <button className='border border-info p-2 rounded text-info'
                  onClick={cbOnModalClose}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}