import Link from 'next-intl/link';
import { MenuProps } from "@/types/props/menu-props";
import CourierMenuItemWithSubLinks from "./courier-menu-item-with-sublinks";

export default function CourierMenuItemLink(props: MenuProps &
{ segment: string; onActiveMenu: (alt: string, segment: string) => string; }
) {
  if (props.subMenus) {
    return <CourierMenuItemWithSubLinks {...props} />;
  }

  return (
    <Link href={props.link!}
      className={`${props.onActiveMenu(props.alt, props.segment)} p-2 hover:bg-tertiary-light hover:text-primary w-full h-fit flex items-center gap-2`}>

      {props.icon && <div className="flex-none w-auto">{props.icon}</div>}
      <div className="flex-1">{props.text}</div>
    </Link>
  )
}