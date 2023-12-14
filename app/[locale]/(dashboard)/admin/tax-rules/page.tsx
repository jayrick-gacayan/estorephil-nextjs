import DashboardHeaderText from "../../_components/dashboard-header-text";
import TaxRulesItem from "./_sections/tax-rules-item";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Tax Rules" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <TaxRulesItem />
      </div>
    </>
  );
}
