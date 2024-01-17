import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import PageIconButton from "./page-icon-button";
import { ReactNode } from "react";
import Link from 'next-intl/link';

export default function PaginationCustom({
  pathName,
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
  pathName: string;
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
          pathName={pathName}
          pageCondition={currentPage === 1}
          onPageCondition={onPageCondition}
          page={currentPage - 1} />
        {
          totalPageNumbers.map((value: number, index: number) => {
            return (
              <Link href={{
                pathname: pathName,
                query: { page: value }
              }}

                key={`pagination-${index}-${value}`}
                className={onActivePageNumber(value, currentPage)}
                onClick={() => { onPageChanged(value) }}>
                {value}
              </Link>
            )
          })
        }
        <PageIconButton icon={rightIcon}
          pathName={pathName}
          pageCondition={currentPage === totalPageCount}
          onPageCondition={onPageCondition}
          page={currentPage - 1} />
      </div>
    </div>
  )
}