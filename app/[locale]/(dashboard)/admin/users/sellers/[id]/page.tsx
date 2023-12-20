import DashboardHeaderText from "@/app/[locale]/(dashboard)/_components/dashboard-header-text";
import SellerDetails from "./_sections/seller-details";
import SellerDetailsInvited from "./_sections/seller-details-invited";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Seller Details" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        {/* <SellerDetails /> */}
        <SellerDetailsInvited />
      </div>
    </>
  );
}
