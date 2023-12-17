import DashboardHeaderText from '../../../_components/dashboard-header-text';
import OrderToPickUpPagination from './_sections/orders-pick-up-pagination';
import OrdersPickUpTable from './_sections/orders-pick-up-table';
import PickUpSearchContainer from './_sections/pick-up-search-container';

export default function Page() {
  return (
    <>
      <DashboardHeaderText text='Orders' />
      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <div className="bg-white p-4 rounded space-y-4">
          <PickUpSearchContainer />
          <OrdersPickUpTable />
          <OrderToPickUpPagination />
        </div>
      </div>
    </>
  )
}