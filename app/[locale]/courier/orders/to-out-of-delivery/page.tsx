import CourierHeaderText from "../../_sections/courier-header-text";
import OrdersOutOfDeliveryPagination from "./_sections/orders-out-of-delivery-pagination";
import OrdersOutOfDeliveryTable from "./_sections/orders-out-of-delivery-table";
import OutOfDeliverySearchContainer from "./_sections/out-of-delivery-search-container";

export default function Page() {
  return (
    <>
      <CourierHeaderText text="Orders" />
      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <div className="bg-white p-4 rounded space-y-4">
          <OutOfDeliverySearchContainer />
          <OrdersOutOfDeliveryTable />
          <OrdersOutOfDeliveryPagination />
        </div>
      </div>
    </>
  )
}