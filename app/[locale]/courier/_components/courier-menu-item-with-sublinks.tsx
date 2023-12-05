import { MenuProps } from "@/types/props/menu-props";
import CourierMenuItemLink from "./courier-menu-item-link";

export default function CourierMenuItemWithSubLinks(props: MenuProps &
{ segment: string; onActiveMenu: (alt: string, segment: string) => string; }
) {
  return (
    <div className='block w-full'>
      <button className="flex gap-2 p-2 w-full items-center">
        {props.icon && <div className="flex-none w-auto">{props.icon}</div>}
        <div className="flex-1 text-left">{props.text}</div>
      </button>
      {
        props.subMenus &&
        (<div className="p-2">
          {
            props.subMenus && props.subMenus.map((subMenu: MenuProps) => {
              return subMenu.subMenus ?
                (
                  <CourierMenuItemWithSubLinks key={`sub-menu-items-${subMenu.text}`}
                    {...subMenu}
                    segment={props.segment}
                    onActiveMenu={(alt: string, segment: string) => {
                      return segment === alt ? 'text-primary' : ''
                    }} />
                ) :
                (<CourierMenuItemLink key={`sub-menu-items-${subMenu.text}`}
                  segment={props.segment}
                  onActiveMenu={(alt: string, segment: string) => {
                    return segment === alt ? 'text-primary' : ''
                  }}
                  {...subMenu} />)
            })
          }
        </div>)
      }
    </div>
  )
}