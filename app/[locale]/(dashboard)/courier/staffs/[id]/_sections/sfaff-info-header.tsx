'use client';

import { AppDispatch } from "@/redux/store";
import DashboardHeaderText from "../../../../_components/dashboard-header-text";
import { useAppDispatch } from "@/app/_hooks/redux_hooks";
import { modalStaffEditOpened } from "../_redux/courier-staff-info-slice";

export default function StaffInfoHeader() {
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <DashboardHeaderText text='Staff Details'>
      <div className='flex-none w-auto'>
        <button className='bg-info hover:bg-info-dark px-4 py-1.5 rounded w-fit text-white'
          onClick={() => {
            dispatch(modalStaffEditOpened());
          }}>
          Edit Staff
        </button>
      </div>
    </DashboardHeaderText>
  )
}