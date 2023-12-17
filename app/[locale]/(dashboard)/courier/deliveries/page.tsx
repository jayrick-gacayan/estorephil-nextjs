import DeliveryHeader from "./_sections/delivery-header";
import DeliveryAreas from "./_sections/delivery-areas";
import PickupAreas from "./_sections/pickup-areas";

export default function Page() {
  return (
    <>
      <DeliveryHeader />
      <div className='bg-[#F5F7FA] p-4 flex-1 overflow-auto'>
        <div className="space-y-4 bg-white rounded p-4">
          <div className="flex items-stretch gap-4">
            <DeliveryAreas />
            <PickupAreas />
          </div>

        </div>
      </div>
    </>
  )
}