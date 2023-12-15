import TaxRulesHeader from "./_sections/tax-rules-header";
import TaxRulesItem from "./_sections/tax-rules-item";

export default function Page() {
  return (
    <>
      <TaxRulesHeader />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <TaxRulesItem />
      </div>
    </>
  );
}
