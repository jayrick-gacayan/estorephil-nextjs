'use client';

import { AppDispatch } from '@/redux/store';
import DashboardHeaderText from '../../../_components/dashboard-header-text';
import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import { modalAddStaffFormOpened } from '../_redux/courier-staff-slice';

export default function StaffHeader() {
  const dispatch: AppDispatch = useAppDispatch();
  return (
    <DashboardHeaderText text='Staff Management'>
      <div className='flex-none w-auto'>
        <button className='bg-info hover:bg-info-dark px-4 py-1.5 rounded w-fit text-white'
          onClick={() => {
            dispatch(modalAddStaffFormOpened());
          }}>
          Invite Courier Staff
        </button>
      </div>
    </DashboardHeaderText>
  )
}