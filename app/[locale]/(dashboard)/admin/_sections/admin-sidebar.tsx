'use client';

import { MenuProps } from '@/types/props/menu-props';
import { BiSolidDashboard } from 'react-icons/bi';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useMemo, useState, MouseEvent, memo } from 'react';
import { useRouter } from 'next-intl/client';
import DashboardMenuItemWithSubLinks from '../../_components/dashboard-menu-item-with-sublinks';
import DashboardMenuItemLink from '../../_components/dashboard-menu-item-link';

let courierDashboardMenus: MenuProps[] = [
  {
    link: '/courier',
    text: 'Dashboard',
    alt: 'dashboard',
    icon: <BiSolidDashboard />
  },
];

function AdminSidebar() {
  const [currentDropdownMenu, setCurrentDropdownMenu] = useState<string>('');
  const router = useRouter();
  const segments = useSelectedLayoutSegments();

  const segment = useMemo(() => {
    if (segments.includes('profile')) {
      return 'profile'
    }
    if (segments.length > 1) {
      return segments[segments.length - 1];
    }
    return segments[0];
  }, [segments]);

  return (
    <div className='lg:block hidden h-full w-[256px] bg-white lg:relative absolute lg:z-0 z-[100] top-0 left-0 border-r-[.5px] border-r-secondary-dark'>
      <div className='space-y-2'>
        <div className='px-4 py-2'>Menu</div>
        <div className='block'>
          {
            courierDashboardMenus.map((courierDashboardMenu: MenuProps) => {

              if (courierDashboardMenu.subMenus) {
                let objectToCourierMenuItemWithSubLinksProps: any = courierDashboardMenu;
                if (courierDashboardMenu.link) {
                  objectToCourierMenuItemWithSubLinksProps = {
                    ...objectToCourierMenuItemWithSubLinksProps,
                    currentDropdownMenu: currentDropdownMenu,
                    currentDropdownMenuSet: (currentMenu: string) => {
                      setCurrentDropdownMenu(currentDropdownMenu === currentMenu ? '' : courierDashboardMenu.alt)
                    },
                    onLinkClicked: () => {
                      router.push(courierDashboardMenu.link!);
                    }
                  }
                }

                return (<DashboardMenuItemWithSubLinks segment={segment}
                  key={`menu-sublink-items-${courierDashboardMenu.text}`}
                  onActiveMenu={function (alt: string, segment: string): string {
                    return segment === alt ? `text-primary bg-tertiary-light` : ``;
                  }}
                  {...objectToCourierMenuItemWithSubLinksProps}>
                  {courierDashboardMenu.alt === 'orders' && <div className='rounded-full w-auto bg-danger text-white px-1.5 inline-block text-sm'>4</div>}
                </DashboardMenuItemWithSubLinks>)
              }

              let objectToCourierMenuItemLinkProps: any = courierDashboardMenu;

              if (courierDashboardMenu.alt === 'delivery-rates') {
                objectToCourierMenuItemLinkProps = {
                  ...objectToCourierMenuItemLinkProps,
                  onDisabledLink: (event: MouseEvent<HTMLAnchorElement>) => {
                    event.preventDefault();
                  }
                }
              }

              return (<DashboardMenuItemLink key={`menu-items-${courierDashboardMenu.text}`}
                segment={segment!}
                onActiveMenu={(alt: string, segment: string) => {
                  return segment === alt ? 'text-primary border-l-4 border-l-primary bg-tertiary-light' : ''
                }}
                {...objectToCourierMenuItemLinkProps} />)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default memo(AdminSidebar);