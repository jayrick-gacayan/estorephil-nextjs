import { LinkProps } from '@/types/props/link-props';

export function FooterLinksContainerWithIcons({
  headerText,
  links,
  linkChildrenClassName,
}: {
  headerText: string;
  links: LinkProps[];
  linkChildrenClassName: string;
}) {
  return (
    <div className='space-y-2'>
      <h1 className='font-bold'>{headerText}</h1>
      <div className='flex flex-wrap gap-1'>
        {
          links.map((link: LinkProps, index: number) => {
            return (
              <div className={`${linkChildrenClassName} relative`} key={`${link.text}-${index}`}>
                {link.icon}
              </div>
            );
          })
        }
      </div>
    </div>
  )
}