'use client';

import { AppDispatch } from "@/redux/store";
import DashboardHeaderText from "../../../_components/dashboard-header-text";
import { useAppDispatch } from "@/app/_hooks/redux_hooks";
import { modalBoxesOpened } from "../_redux/courier-boxes-slice";
import DashboardHeaderTextButton from "../../../_components/dashboard-header-text-button";

export default function BoxesHeader() {
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <DashboardHeaderText text="Box Management">
      <DashboardHeaderTextButton labelText='Set Box Pricing'
        onClick={() => { dispatch(modalBoxesOpened('createBox')); }} />
    </DashboardHeaderText>
  )
}