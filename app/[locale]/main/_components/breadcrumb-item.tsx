import Link from 'next-intl/link';
import { FaChevronRight } from 'react-icons/fa';

export function BreadcrumbItem({
  isLink,
  withRightArrowChevron,
  link,
  text
}: {
  isLink: boolean;
  link?: string;
  withRightArrowChevron: boolean;
  text: string;
}) {
  return isLink && link !== undefined ?
    (
      <Link href={link} className='text-primary space-x-0.5'>
        <span className='align-middle'>{text}</span>
        {withRightArrowChevron && <>{<FaChevronRight className='inline-block h-3 w-3 text-secondary' />}</>}
      </Link>
    ) :
    (
      <span className={`space-x-0.5`}>
        <span className='align-middle'>{text}</span>
        {withRightArrowChevron && <>{<FaChevronRight className='inline-block h-3 w-3' />}</>}
      </span>
    )
}