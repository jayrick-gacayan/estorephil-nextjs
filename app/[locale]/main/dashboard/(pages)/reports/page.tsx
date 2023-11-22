import HeaderFilter from "./_sections/header-filter"
import ReportTable from "./_sections/report-table"
import Stats from "./_sections/stats"

export default function Page() {
    return (
        <div className="bg-[#f7f9fc] w-full px-[40px] h-full py-[30px]">
            <Stats />
            <HeaderFilter />
            <ReportTable />
        </div>
    )
}