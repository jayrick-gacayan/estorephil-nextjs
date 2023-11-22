import Header from "./_sections/header";
import StaffTable from "./_sections/staff-table";

export default function Page() {
    return (
        <div className="bg-[#f7f9fc] w-full px-[40px] py-[30px]">
            <Header />
            <StaffTable />
        </div>
    )
}