import { LinkProps } from '@/types/props/link_props';
import Link from 'next-intl/link';

export function FooterLinksContainer({
  headerText,
  links
}: {
  links: LinkProps[],
  headerText: string;
}): JSX.Element {
  return (
    <div className='space-y-2'>
      <h1 className='font-bold'>{headerText}</h1>
      <div>
        {
          links.map((link: LinkProps, index: number) => {
            return <Link key={`${link.text}-${index}`} href={link.link} className='block'>{link.text}</Link>
          })
        }
      </div>
    </div>
  )
}