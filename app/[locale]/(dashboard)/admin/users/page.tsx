import DashboardHeaderText from "../../_components/dashboard-header-text";
import UserItems from "./_sections/user-items";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="All Users" />
      <div className="bg-[#F5F7FA] p-4  flex-1 overflow-auto">
        <UserItems />
      </div>
    </>
  );
}
