import DashboardHeaderText from "@/app/[locale]/(dashboard)/_components/dashboard-header-text";
import OrderDetails from "./_sections/order-details";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Order Details" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <OrderDetails />
      </div>
    </>
  );
}
