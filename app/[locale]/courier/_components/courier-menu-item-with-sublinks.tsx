import { MenuProps } from "@/types/props/menu-props";
import CourierMenuItemLink from "./courier-menu-item-link";

export default function CourierMenuItemWithSubLinks(props: MenuProps &
{ segment: string; onActiveMenu: (alt: string, segment: string) => string; }
) {
  return (
    <div className='block w-full'>
      <button className={`flex gap-2 px-4 py-2 w-full items-center hover:bg-tertiary-light 
        ${props.subMenus && props.subMenus.some((value: MenuProps) => {
        return props.segment === value.alt;
      }) ? `text-primary` : ``}`}>
        {props.icon && <div className="flex-none w-auto">{props.icon}</div>}
        <div className="flex-1 text-left">{props.text}</div>
      </button>
      {
        props.subMenus &&
        (<div className="px-4 py-2">
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
                    return segment === alt ? 'text-primary border-l-2 border-l-primary' : ''
                  }}
                  {...subMenu} />)
            })
          }
        </div>)
      }
    </div>
  )
}