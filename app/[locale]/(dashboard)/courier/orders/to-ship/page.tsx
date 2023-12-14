import DashboardHeaderText from '../../../_components/dashboard-header-text';
import OrdersToShipPagination from './_sections/orders-to-ship-pagination';
import OrdersToShipTable from './_sections/orders-to-ship-table';
import ToShipSearchContainer from './_sections/to-ship-search-container';

export default function Page() {
  return (
    <>
      <DashboardHeaderText text='Orders' />
      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <div className="bg-white p-4 rounded space-y-4">
          <ToShipSearchContainer />
          <OrdersToShipTable />
          <OrdersToShipPagination />
        </div>
      </div>
    </>
  )
}