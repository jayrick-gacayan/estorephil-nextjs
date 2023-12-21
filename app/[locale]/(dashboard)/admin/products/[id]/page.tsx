import DashboardHeaderText from "@/app/[locale]/(dashboard)/_components/dashboard-header-text";
import ProductDetails from "./_sections/product-details";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Product Details" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <ProductDetails />
      </div>
    </>
  );
}
