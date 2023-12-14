import DashboardHeaderText from "../../../_components/dashboard-header-text";
import CourierItems from "./_sections/courier-items";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Couriers" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <CourierItems />
      </div>
    </>
  );
}
