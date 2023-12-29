import CourierHeader from "./_sections/courier-header";
import CourierItems from "./_sections/courier-items";

export default function Page() {
  return (
    <>
      <CourierHeader />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <CourierItems />
      </div>
    </>
  );
}
