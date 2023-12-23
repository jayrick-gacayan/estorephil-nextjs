"use client";

import { useRouter } from "next-intl/client";
import DashboardHeaderText from "../../../_components/dashboard-header-text";
import DashboardHeaderTextButton from "../../../_components/dashboard-header-text-button";

export default function TaxRulesHeader() {
  const router = useRouter();
  return (
    <DashboardHeaderText text="Tax Rules">
      <DashboardHeaderTextButton
        labelText="Create Tax Rules"
        onClick={() => {
          router.push("/admin/tax-rules/create");
        }}
      />
    </DashboardHeaderText>
  );
}
