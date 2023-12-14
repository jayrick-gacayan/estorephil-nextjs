import DashboardHeaderText from "../../_components/dashboard-header-text";
import TradeRateItems from "./_sections/trade-rate-items";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Trade Rates" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <TradeRateItems />
      </div>
    </>
  );
}
