import DashboardHeaderText from "../../_components/dashboard-header-text";
import OrderItems from "./_sections/order-items";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Orders" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <OrderItems />
      </div>
    </>
  );
}
