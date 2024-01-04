"use client";

import DashboardHeaderText from "@/app/[locale]/(dashboard)/_components/dashboard-header-text";
import DashboardHeaderTextButton from "@/app/[locale]/(dashboard)/_components/dashboard-header-text-button";
import { useRouter } from "next-intl/client";

export default function CreateTaxRulesHeader() {
  const router = useRouter();
  return (
    <DashboardHeaderText text="Create Tax Rule">
      <DashboardHeaderTextButton
        labelText="Save Tax Rules"
        onClick={() => {
          router.push("/admin/tax-rules");
        }}
        bgColor={"bg-success hover:bg-green-400"}
      />
    </DashboardHeaderText>
  );
}
