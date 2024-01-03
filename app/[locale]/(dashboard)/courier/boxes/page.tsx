import BoxesHeader from "./_sections/boxes-header";
import BoxesSearchContainer from "./_sections/boxes-search-container";
import BoxesTable from "./_sections/boxes-table";
import ModalAlertInfo from "./_sections/modal-alert-info";
import ModalBoxesContainer from "./_sections/modal-boxes-container";

export default function Page() {
  return (
    <>
      <BoxesHeader />
      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <div className="bg-white p-4 rounded space-y-4">
          <BoxesSearchContainer />
          <BoxesTable />
        </div>
      </div>
      <ModalBoxesContainer />
      <ModalAlertInfo />
    </>
  )
}