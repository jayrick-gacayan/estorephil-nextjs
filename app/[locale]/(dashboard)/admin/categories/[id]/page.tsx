import DashboardHeaderText from "@/app/[locale]/(dashboard)/_components/dashboard-header-text";
import CategoriesDetails from "./_sections/categories-details";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Agents Details" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <CategoriesDetails />
      </div>
    </>
  );
}
