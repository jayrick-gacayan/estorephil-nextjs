import { MenuProps } from "@/types/props/menu-props";
import CourierMenuItemLink from "./courier-menu-item-link";
import { FaChevronDown } from "react-icons/fa";
import { ReactNode } from "react";

export default function CourierMenuItemWithSubLinks(props: MenuProps &
{
  segment: string;
  onActiveMenu: (alt: string, segment: string) => string;
  children?: ReactNode;
  onLinkClicked?: () => void;
  currentDropdownMenu: string;
  currentDropdownMenuSet: (currentDropdownMenu: string) => void;
}
) {
  return (
    <div className='block w-full'>
      <div className={`flex gap-2 px-4 py-2 w-full items-center hover:bg-tertiary-light 
        ${props.onActiveMenu(props.segment, props.alt)}`}>
        <div className="flex-1 flex gap-2 items-center cursor-pointer"
          onClick={() => {
            props.onLinkClicked && props.onLinkClicked();
          }}>
          {props.icon && <div className="flex-none w-auto">{props.icon}</div>}
          <div className="flex-1 text-left space-x-2">
            <span className="inline-block">{props.text}</span>
            {props.children && props.children}
          </div>
        </div>
        <div className="flex-none w-auto">
          <FaChevronDown className={`cursor-pointer transition-all delay-100 ${props.currentDropdownMenu === props.alt ? '-rotate-90' : 'rotate-0'}`}
            onClick={() => {
              props.currentDropdownMenuSet(props.alt)
            }} />
        </div>
      </div>
      {
        props.subMenus &&
        (<div className={`${props.currentDropdownMenu === props.alt ? 'block' : 'hidden'}`}>
          {
            props.subMenus && props.subMenus.map((subMenu: MenuProps) => {
              return subMenu.subMenus ?
                (
                  <CourierMenuItemWithSubLinks key={`sub-menu-items-${subMenu.text}`}
                    currentDropdownMenuSet={props.currentDropdownMenuSet}
                    {...subMenu}
                    segment={props.segment}
                    onActiveMenu={props.onActiveMenu}
                    currentDropdownMenu={props.currentDropdownMenu} />
                ) :
                (<CourierMenuItemLink key={`sub-menu-items-${subMenu.text}`}
                  segment={props.segment}
                  onActiveMenu={(alt: string, segment: string) => {
                    return segment === alt ? 'text-primary border-l-2 border-l-primary bg-tertiary-light' : ''
                  }}
                  {...subMenu} />)
            })
          }
        </div>)
      }
    </div>
  )
}