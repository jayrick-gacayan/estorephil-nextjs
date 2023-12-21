import DashboardHeaderText from "@/app/[locale]/(dashboard)/_components/dashboard-header-text";
import TaxRulesDetails from "./_sections/tax-rules-details";
export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Edit Tax Rule" />
      <div className="bg-[#F5F7FA] py-4 px-[13rem] space-y-4 flex-1 overflow-auto">
        <TaxRulesDetails />
      </div>
    </>
  );
}
