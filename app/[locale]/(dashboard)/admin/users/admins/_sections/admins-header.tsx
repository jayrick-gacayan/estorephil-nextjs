'use client';

import DashboardHeaderText from "@/app/[locale]/(dashboard)/_components/dashboard-header-text";
import DashboardHeaderTextButton from "@/app/[locale]/(dashboard)/_components/dashboard-header-text-button";



export default function AdminsHeader() {
  return (
    <DashboardHeaderText text="Admins">
      <DashboardHeaderTextButton labelText="Invite Admin User"
        onClick={() => { }} />
    </DashboardHeaderText>
  )
}