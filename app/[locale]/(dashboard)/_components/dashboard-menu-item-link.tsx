import Link from 'next-intl/link';
import { MenuProps } from '@/types/props/menu-props';
import { ReactNode, MouseEvent } from 'react';

export default function DashboardMenuItemLink(props: MenuProps &
{
  segment: string;
  onActiveMenu: (alt: string, segment: string) => string;
  children?: ReactNode;
  onDisabledLink?: (event: MouseEvent<HTMLAnchorElement>) => void;
}
): JSX.Element {

  return (
    <Link href={props.link!}
      className={`${props.alt === 'delivery-rates' ? 'cursor-not-allowed text-secondary-light' : `${props.onActiveMenu(props.alt, props.segment)} hover:bg-tertiary-light hover:text-primary`} px-4 py-2  w-full h-fit flex items-center gap-2`}
      onClick={(event) => { props.onDisabledLink && props.onDisabledLink(event) }}>
      <div className='flex-1 w-auto space-x-2'>
        {props.icon && <span className='inline-block align-middle'>{props.icon}</span>}
        <span className='inline-block'>{props.text}</span>
      </div>
      {props.children && <div className='flex-none'>{props.children && props.children}</div>}
    </Link>
  );
}