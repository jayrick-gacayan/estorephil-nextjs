import CourierHeaderText from "../_sections/courier-header-text";
import CourierSellersFieldsContainer from "./_sections/courier-seller-fields-container";
import CourierSellersPagination from "./_sections/courier-sellers-pagination";
import SellersTable from "./_sections/sellers-table";

export default function Page() {
  return (
    <>
      <CourierHeaderText text="Sellers" />
      <div className="bg-white p-4">
        <div className="space-y-4 text-[#2F353D80] rounded">
          <CourierSellersFieldsContainer />
          <SellersTable />
          <CourierSellersPagination />
        </div>
      </div>
    </>
  )
}