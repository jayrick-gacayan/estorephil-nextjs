import DashboardHeaderText from "@/app/[locale]/(dashboard)/_components/dashboard-header-text";
import SellerDetailsInvited from "./_sections/seller-details-invited";
import SellerDetailsSelection from "./_sections/seller-details-selection";
import { notFound } from "next/navigation";
import { sellers } from "../_helpers/sellers-data";

export default function Page({ params }: { params: { id: string } }) {
  if (!/^\d+$/.test(params.id)) {
    notFound();
  }

  let data = sellers.find((value: any) => {
    return value.id === parseInt(params.id);
  });
  if (!data) {
    notFound();
  }
  return (
    <>
      <DashboardHeaderText text="Seller Details" />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <SellerDetailsSelection status={data.status} />
      </div>
    </>
  );
}
