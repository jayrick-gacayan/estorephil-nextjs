import DashboardHeaderText from "../../_components/dashboard-header-text";
import DashboardStatistcs from "./_sections/dashboard-statistics";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Dashboard" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <DashboardStatistcs />
      </div>
    </>
  );
}
