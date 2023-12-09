import CourierHeaderText from "../../_sections/courier-header-text";
import CompletedSearchContainer from "./_sections/completed-search-container";
import OrdersCompletedPagination from "./_sections/orders-completed-pagination";
import OrdersCompletedTable from "./_sections/orders-completed-table";

export default function Page() {
  return (
    <>
      <CourierHeaderText text="Orders" />
      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <div className="bg-white p-4 rounded space-y-4">
          <CompletedSearchContainer />
          <OrdersCompletedTable />
          <OrdersCompletedPagination />
        </div>
      </div>
    </>
  )
}