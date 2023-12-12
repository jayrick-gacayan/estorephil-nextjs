import CourierHeaderText from "../_sections/courier-header-text";
import AllOrdersPagination from "./_sections/all-orders-pagination";
import AllOrdersSearchContainer from "./_sections/all-orders-search-container";
import AllOrdersTable from "./_sections/all-orders-table";

export default function Page() {
  return (
    <>
      <CourierHeaderText text='Orders' />
      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <div className="bg-white p-4 rounded space-y-4">
          <AllOrdersSearchContainer />
          <AllOrdersTable />
          <AllOrdersPagination />
        </div>
      </div>
    </>
  )
}