import DashboardHeaderText from "../../_components/dashboard-header-text";
import CourierSellersFieldsContainer from "./_sections/courier-seller-fields-container";
import CourierSellersPagination from "./_sections/courier-sellers-pagination";
import SellersTable from "./_sections/sellers-table";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Sellers" />
      <div className='bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto'>
        <div className="bg-white p-4 space-y-4 text-[#2F353D80] rounded">
          <CourierSellersFieldsContainer />
          <SellersTable />
          <CourierSellersPagination />
        </div>
      </div>
    </>
  )
}