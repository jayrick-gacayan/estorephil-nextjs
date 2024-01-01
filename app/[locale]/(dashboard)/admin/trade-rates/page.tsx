import TradeRateItems from "./_sections/trade-rate-items";
import TradeRatesHeader from "./_sections/trade-rates-header";

export default function Page() {
  return (
    <>
      <TradeRatesHeader />
      <div className="bg-[#F5F7FA] p-4  flex-1 overflow-auto">
        <TradeRateItems />
      </div>
    </>
  );
}
