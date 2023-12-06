
import StaffHeader from "./_sections/staff-header";
import StaffPagination from "./_sections/staff-pagination";
import StaffSearchContainer from "./_sections/staff-search-container";
import StaffTable from "./_sections/staff-table";

export default function Page() {
  return (
    <>
      <StaffHeader />
      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <div className="space-y-4 bg-white rounded p-4">
          <StaffSearchContainer />
          <StaffTable />
          <StaffPagination />
        </div>
      </div>
    </>
  )
}