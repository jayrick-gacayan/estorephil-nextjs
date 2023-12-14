'use client';

import DashboardHeaderText from "../../../_components/dashboard-header-text";
import DashboardHeaderTextButton from "../../../_components/dashboard-header-text-button";

export default function TaxRulesHeader() {
  return (
    <DashboardHeaderText text="Tax Rules">
      <DashboardHeaderTextButton labelText="Create Tax Rules"
        onClick={() => { }} />
    </DashboardHeaderText>
  )
}