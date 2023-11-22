import CustomersTable from "./_sections/customers-table";
import HeaderFilter from "./_sections/header-filter";

export default function Page() {
    return (
        <div className="bg-[#f7f9fc] w-full px-[40px] py-[30px]">
            <HeaderFilter />
            <CustomersTable />
        </div>
    )
}