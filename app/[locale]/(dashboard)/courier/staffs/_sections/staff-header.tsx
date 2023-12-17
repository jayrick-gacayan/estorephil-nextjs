'use client';

import { AppDispatch } from '@/redux/store';
import DashboardHeaderText from '../../../_components/dashboard-header-text';
import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import { modalAddStaffFormOpened } from '../_redux/courier-staff-slice';
import DashboardHeaderTextButton from '../../../_components/dashboard-header-text-button';

export default function StaffHeader() {
  const dispatch: AppDispatch = useAppDispatch();
  return (
    <DashboardHeaderText text='Staff Management'>
      <DashboardHeaderTextButton labelText='Invite Courier Staff'
        onClick={() => { dispatch(modalAddStaffFormOpened()); }} />
    </DashboardHeaderText>
  )
}