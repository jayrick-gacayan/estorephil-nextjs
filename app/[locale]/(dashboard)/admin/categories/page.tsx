import DashboardHeaderText from "../../_components/dashboard-header-text";
import CategoryItems from "./_sections/category-items";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Categories" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <CategoryItems />
      </div>
    </>
  );
}
