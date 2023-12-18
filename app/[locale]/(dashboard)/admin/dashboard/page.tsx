import DashboardHeaderText from "../../_components/dashboard-header-text";
import DashboardChart from "./_sections/dashboard-chart";
import DashboardStatistcs from "./_sections/dashboard-statistics";
import DashboardTopSellers from "./_sections/dashboard-top-sellers";
import DashboardTradeRates from "./_sections/dashboard-trade-rates";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Dashboard" />
      <div className="bg-[#F5F7FA] p-4 space-y-8 flex-1 overflow-auto">
        <DashboardStatistcs />
        <DashboardChart />
        <DashboardTradeRates />
        <DashboardTopSellers />
      </div>
    </>
  );
}
