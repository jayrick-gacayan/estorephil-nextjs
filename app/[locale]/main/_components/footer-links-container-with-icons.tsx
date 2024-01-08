import { NextLinkProps } from '@/types/props/nextlink-props';

export function FooterLinksContainerWithIcons({
  headerText,
  links,
  linkChildrenClassName,
}: {
  headerText: string;
  links: NextLinkProps[];
  linkChildrenClassName: string;
}) {
  return (
    <div className='space-y-2'>
      <h1 className='font-bold'>{headerText}</h1>
      <div className='flex flex-wrap gap-1'>
        {
          links.map((link: NextLinkProps, index: number) => {
            return (
              <div className={`${linkChildrenClassName} cursor-pointer relative hover:text-primary`} key={`${link.text}-${index}`}>
                {link.icon}
              </div>
            );
          })
        }
      </div>
    </div>
  )
}