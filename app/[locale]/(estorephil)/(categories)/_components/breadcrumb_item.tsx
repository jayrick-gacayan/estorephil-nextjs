import Link from 'next-intl/link';
import { FaChevronRight } from 'react-icons/fa';

export function BreadcrumbItem({
  isLink,
  withRightArrowChevron,
  text
}: {
  isLink: boolean;
  withRightArrowChevron: boolean;
  text: string;
}) {
  return isLink ?
    (
      <Link href='#' className='text-[#0D2D82] space-x-0.5'>
        <span className='align-middle'>{text}</span>
        {withRightArrowChevron && <>{<FaChevronRight className='inline-block h-3 w-3 text-[#2F353D]' />}</>}
      </Link>
    ) :
    (
      <span className={`space-x-0.5`}>
        <span className='align-middle'>{text}</span>
        {withRightArrowChevron && <>{<FaChevronRight className='inline-block h-3 w-3' />}</>}
      </span>
    )
}