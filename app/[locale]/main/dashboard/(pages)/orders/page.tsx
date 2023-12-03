import HeaderFilter from "./_sections/header-filter";
import OrderTable from "./_sections/order-table";

export default function Page() {
    return (
        <div className="bg-[#f7f9fc] w-full px-[40px] py-[30px]">
            <HeaderFilter />
            <OrderTable />
        </div>
    )
}