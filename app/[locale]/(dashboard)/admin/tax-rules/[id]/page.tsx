import DashboardHeaderText from "@/app/[locale]/(dashboard)/_components/dashboard-header-text";
import TaxRulesDetails from "./_sections/tax-rules-details";
import TaxRulesHeader from "./_sections/tax-rules-header";

export default function Page() {
  return (
    <>
      <TaxRulesHeader />
      <div className="bg-[#F5F7FA] py-4 px-[13rem] space-y-4 flex-1 overflow-auto">
        <TaxRulesDetails />
      </div>
    </>
  );
}
