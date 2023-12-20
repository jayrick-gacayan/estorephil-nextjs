import DashboardHeaderText from "@/app/[locale]/(dashboard)/_components/dashboard-header-text";
import AgentDetails from "./_sections/courier-details";
import CourierDetails from "./_sections/courier-details";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Courier Details" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <CourierDetails />
      </div>
    </>
  );
}
