import { ReactNode } from "react";
import Link from 'next-intl/link';

export default function PageIconButton({
  pathName,
  icon,
  pageCondition,
  onPageCondition,
  page,
}: {
  pathName: string;
  page: number;
  icon: ReactNode;
  pageCondition: boolean;
  onPageCondition: (condition: boolean) => string;
}) {

  return pageCondition ?
    (
      <span className={onPageCondition(pageCondition)}>
        {icon}
      </span>
    ) :
    (
      <Link href={{
        pathname: pathName,
        query: { page: page }
      }}
        className={onPageCondition(pageCondition)}>
        {icon}
      </Link>
    )
}