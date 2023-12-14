'use client';

import DashboardHeaderText from "../../../_components/dashboard-header-text";
import DashboardHeaderTextButton from "../../../_components/dashboard-header-text-button";

export default function TradeRatesHeader() {
  return (
    <DashboardHeaderText text="Trade Rates">
      <DashboardHeaderTextButton labelText="Create Tax Rates"
        onClick={() => { }} />
    </DashboardHeaderText>
  )
}