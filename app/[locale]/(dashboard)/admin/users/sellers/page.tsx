import SellerHeader from "./_sections/seller-header";
import SellerItems from "./_sections/seller-items";

export default function Page() {
  return (
    <>
      <SellerHeader />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <SellerItems />
      </div>
    </>
  );
}
