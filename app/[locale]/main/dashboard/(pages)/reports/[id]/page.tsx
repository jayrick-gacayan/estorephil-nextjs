import HeaderFilter from "./_sections/header-filter";
import ReportTable from "./_sections/report-table";

export default function Page() {
    return (
        <div className="bg-[#f7f9fc] w-full px-[40px] h-full py-[30px]">
            <HeaderFilter />
            <ReportTable />
        </div>
    )
}