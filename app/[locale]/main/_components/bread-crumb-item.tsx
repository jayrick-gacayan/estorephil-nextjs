import { BreadcrumbProps } from '@/types/props/breadcrumb-props';
import Link from 'next-intl/link';
import { FaChevronRight } from 'react-icons/fa6';

export default function BreadCrumbItem({ breadCrumb }: { breadCrumb: BreadcrumbProps }) {
  return (
    <div className="text-primary space-x-0.5 inline-block">
      <Link href={breadCrumb.link!} className='inline-block align-middle hover:underline'>
        {breadCrumb.text}
      </Link>
      {breadCrumb.otherPuncMarks && breadCrumb.otherPuncMarks}
      {breadCrumb.withRightChevron && <>{<FaChevronRight className='inline-block h-3 w-3' />}</>}
    </div>
  )
}