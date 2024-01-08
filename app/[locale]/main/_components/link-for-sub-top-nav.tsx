import { ReactNode } from "react";
import Link from 'next-intl/link';

export default function LinkForSubTopNav({
  href,
  icon,
  text
}: {
  href: string;
  icon: ReactNode;
  text: string | ReactNode;
}) {

  return (
    <Link href={href} className='inline-block'>
      <span className='px-2 space-x-1.5'>
        {icon}
        <span className='align-middle text-white hover:underline'>{text}</span>
      </span>
    </Link>
  )
}