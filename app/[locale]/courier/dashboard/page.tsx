import CourierHeaderText from "../_sections/courier-header-text";
import MgmtCardContainer from "./_sections/mgmt-card-container";

export default function Page() {
  return (
    <>
      <CourierHeaderText text="Dashboard (Courier Admin)" />
      <div className='bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto'>
        <MgmtCardContainer />
      </div>
    </>
  )
}