import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import PageIconButton from "./page-icon-button";
import { ReactNode } from "react";

export default function PaginationCustom({
  currentPage,
  totalPageNumbers,
  totalPageCount,
  onPageChanged,
  onActivePageNumber,
  onPageCondition,
  parentPaginateClassName,
  leftIcon = <FaCaretLeft className='inline' />,
  rightIcon = <FaCaretRight className='inline' />
}: {
  currentPage: number;
  totalPageNumbers: number[];
  totalPageCount: number;
  onPageChanged: (page: number) => void;
  onActivePageNumber: (page: number, currentPage: number) => string;
  onPageCondition: (condition: boolean) => string;
  parentPaginateClassName: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

}) {


  return (
    <div className="block">
      <div className={parentPaginateClassName}>
        <PageIconButton icon={leftIcon}
          pageCondition={currentPage === 1}
          onPageCondition={onPageCondition}
          onClick={() => { currentPage > 1 && onPageChanged(currentPage - 1) }} />
        {
          totalPageNumbers.map((value: number, index: number) => {
            return (
              <div key={`pagination-${index}-${value}`}
                className={onActivePageNumber(value, currentPage)}
                onClick={() => { onPageChanged(value) }}>
                {value}
              </div>
            )
          })
        }
        <PageIconButton icon={rightIcon}
          pageCondition={currentPage === totalPageCount}
          onPageCondition={onPageCondition}
          onClick={() => { currentPage < totalPageCount && onPageChanged(currentPage + 1) }} />
      </div>
    </div>
  )
}