import { PhRegion } from "@/models/ph-region";
import BoxesHeader from "./_sections/boxes-header";
import BoxesSearchContainer from "./_sections/boxes-search-container";
import BoxesTable from "./_sections/boxes-table";
import ModalAlertInfo from "./_sections/modal-alert-info";
import ModalBoxesContainer from "./_sections/modal-boxes-container";
import BoxesFilterFields from "./_sections/boxes-filter-fields";

export default async function Page() {

  let regions: PhRegion[] = (await import('@/app/_data/ph-regions.json')).default.regions;

  return (
    <>
      <BoxesHeader />
      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <div className="bg-white p-4 rounded space-y-4">
          <BoxesFilterFields />
          <BoxesTable />
        </div>
      </div>
      <ModalBoxesContainer regions={regions} />
      <ModalAlertInfo />
    </>
  )
}