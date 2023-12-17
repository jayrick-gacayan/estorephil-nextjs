'use client';

import DashboardHeaderText from "../../../_components/dashboard-header-text";
import DashboardHeaderTextButton from "../../../_components/dashboard-header-text-button";

export default function CategoriesHeader() {
  return (
    <DashboardHeaderText text="Categories">
      <DashboardHeaderTextButton labelText="Create Category"
        onClick={() => { }} />
    </DashboardHeaderText>
  )
}