import DashboardHeaderText from "../../_components/dashboard-header-text";
import ProductItems from "./_sections/product-items";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Products" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <ProductItems />
      </div>
    </>
  );
}
