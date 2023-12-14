import DashboardHeaderText from "../../../_components/dashboard-header-text";
import CourierDetails from "./_sections/courier-details";
import CourierInfoTabContent from "./_sections/courier-info-tab-content";
import CourierInfoTabs from "./_sections/courier-info-tabs";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text='Courier Info' />

      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <CourierInfoTabs />
        <div className="bg-white p-4 rounded space-y-4">
          <CourierInfoTabContent />
        </div>
      </div>
    </>
  )
}