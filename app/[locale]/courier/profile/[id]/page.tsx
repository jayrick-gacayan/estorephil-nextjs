import CourierHeaderText from "../../_sections/courier-header-text";
import CourierDetails from "./_sections/courier-details";
import CourierInfoTabContent from "./_sections/courier-info-tab-content";
import CourierInfoTabs from "./_sections/courier-info-tabs";

export default function Page() {
  return (
    <>
      <CourierHeaderText text='Courier Info' />

      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <CourierInfoTabs />
        <div className="bg-white p-4 rounded space-y-4">
          <CourierInfoTabContent />
        </div>
      </div>
    </>
  )
}