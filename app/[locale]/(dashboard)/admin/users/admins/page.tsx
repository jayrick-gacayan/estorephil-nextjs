import AdminItems from "./_sections/admin-items";
import AdminsHeader from "./_sections/admins-header";

export default function Page() {
  return (
    <>
      <AdminsHeader />
      <div className="bg-[#F5F7FA] p-4 space-y-4 flex-1 overflow-auto">
        <AdminItems />
      </div>
    </>
  );
}
