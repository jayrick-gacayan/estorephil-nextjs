import { NextLinkProps } from '@/types/props/nextlink-props';
import Link from 'next-intl/link';

export function FooterLinksContainer({
  links,
  headerText,
}: {
  links: NextLinkProps[],
  headerText: string;
}): JSX.Element {
  return (
    <div className='space-y-2'>
      <h1 className='font-bold'>{headerText}</h1>
      <div>
        {
          links.map((link: NextLinkProps, index: number) => {
            return <Link key={`${link.text}-${index}`} href={link.link} className='block hover:text-primary'>{link.text}</Link>
          })
        }
      </div>
    </div>
  )
}