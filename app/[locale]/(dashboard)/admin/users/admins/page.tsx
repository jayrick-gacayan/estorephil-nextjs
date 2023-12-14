import DashboardHeaderText from "../../../_components/dashboard-header-text";
import AdminItems from "./_sections/admin-items";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Admins" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <AdminItems />
      </div>
    </>
  );
}
