import CreateTaxRulesDetails from "./_sections/create-tax-rules-details";
import CreateTaxRulesHeader from "./_sections/create-tax-rules-header";

export default function Page() {
  return (
    <>
      <CreateTaxRulesHeader />
      <div className="bg-[#F5F7FA] py-4 px-[13rem] space-y-4 flex-1 overflow-auto">
        <CreateTaxRulesDetails />
      </div>
    </>
  );
}
