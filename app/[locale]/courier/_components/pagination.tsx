import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

export default function Pagination({
  currentPage,
  totalPageNumbers,
  onPageChanged,
}: {
  currentPage: number;
  totalPageNumbers: number[];
  onPageChanged: (page: number) => void;
}) {

  return (
    <div className="block">
      <div className="ml-auto bg-white w-fit border-[.5px] border-[#DEE2E6] flex divide-x divide-[#DEE2E6] rounded overflow-hidden">
        <div className="inline p-2">
          <FaCaretLeft className='inline' />
        </div>
        {
          totalPageNumbers.map((value: number, index: number) => {
            return (
              <div key={`pagination-${index}-${value}`}
                className={`text-[#DEE2E6] inline p-2 ${currentPage === value ? 'bg-primary text-white' : ''}`}>
                {value}
              </div>
            )
          })
        }
        <div className="inline p-2">
          <FaCaretRight className='inline' />
        </div>
      </div>
    </div>
  )
}