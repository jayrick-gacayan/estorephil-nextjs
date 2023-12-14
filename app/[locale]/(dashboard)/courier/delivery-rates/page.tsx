import DashboardHeaderText from "../../_components/dashboard-header-text";
import CargoTabsContainer from "./_sections/cargo-tabs-container";
import DeliveryRatesTabContent from "./_sections/delivery-rates-tab-content";

export default function Page() {
  return (
    <>
      <DashboardHeaderText text="Delivery Rates" />
      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto space-y-4'>
        <CargoTabsContainer />
        <div className="space-y-4 bg-white rounded p-4">
          <DeliveryRatesTabContent />
        </div>
      </div>
    </>
  )
}