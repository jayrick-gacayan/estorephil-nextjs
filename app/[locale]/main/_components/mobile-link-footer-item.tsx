import { ReactNode } from 'react';
import Link from 'next-intl/link';

export function MobileLinkFooterItem({
  link,
  text,
  icon
}: {
  link: string;
  text: string;
  icon: ReactNode
}): JSX.Element {
  return (
    <Link className='block space-y-1' href='#'>
      {icon}
      <span className='block'>HOME</span>
    </Link>
  )
}