import Pagination from "../../_components/pagination";

export default function StaffPagination() {

  let totalPageNumbers = Array.from({ length: 5 }, (value: any, index: number) => { return index + 1; });

  return (
    <Pagination currentPage={1}
      totalPageNumbers={totalPageNumbers}
      onPageChanged={function (page: number): void {
        throw new Error("Function not implemented.");
      }} />
  )
}