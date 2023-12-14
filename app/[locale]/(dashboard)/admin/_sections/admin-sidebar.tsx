'use client';

import { MenuProps } from '@/types/props/menu-props';
import { BiSolidDashboard } from 'react-icons/bi';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useMemo, useState, MouseEvent, memo } from 'react';
import { useRouter } from 'next-intl/client';
import DashboardMenuItemWithSubLinks from '../../_components/dashboard-menu-item-with-sublinks';
import DashboardMenuItemLink from '../../_components/dashboard-menu-item-link';
import { FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';
import { FaChartBar, FaChartLine, FaFilter, FaImages, FaMoneyCheck, FaUsers } from 'react-icons/fa6';

let adminDashboardMenus: MenuProps[] = [
  {
    link: '/admin/dashboard',
    text: 'Dashboard',
    alt: 'dashboard',
    icon: <BiSolidDashboard />
  },
  {
    link: '/admin/products',
    text: 'Products',
    alt: 'products',
    icon: <FaShoppingCart />
  },
  {
    link: '/admin/tax-rules',
    alt: 'tax-rules',
    text: 'Tax Rules',
    icon: <FaMoneyCheck />
  },
  {
    link: '/admin/trade_rates',
    alt: 'trade-rates',
    text: 'Trade Rates',
    icon: <FaChartBar />
  },
  {
    link: '/admin/categories',
    alt: 'categories',
    text: 'Categories',
    icon: <FaFilter />
  },
  {
    link: '/admin/accounting',
    alt: 'accounting',
    text: 'Accounting',
    icon: <FaChartLine />
  },
  {
    link: '/admin/banners',
    alt: 'banners',
    text: 'Banners',
    icon: <FaImages />
  },
  {
    link: '/admin/orders',
    alt: 'orders',
    text: 'Orders',
    icon: <FaShoppingBasket />
  },
  {
    link: '/admin/users',
    text: 'Users',
    alt: 'users',
    icon: <FaUsers />,
    subMenus: [
      {
        link: '/admin/users/admins',
        text: 'Admins',
        alt: 'admins',
      },
      {
        link: '/admin/users/agent',
        text: 'Agents',
        alt: 'agents'
      },
      {
        link: '/admin/users/couriers',
        text: 'Couriers',
        alt: 'couriers'
      },
      {
        link: '/admin/users/sellers',
        text: 'Sellers',
        alt: 'sellers'
      }
    ]
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
            adminDashboardMenus.map((adminDashboardMenu: MenuProps) => {

              if (adminDashboardMenu.subMenus) {
                let objectToAdminMenuItemWithSubLinksProps: any = adminDashboardMenu;
                if (adminDashboardMenu.link) {
                  objectToAdminMenuItemWithSubLinksProps = {
                    ...objectToAdminMenuItemWithSubLinksProps,
                    currentDropdownMenu: currentDropdownMenu,
                    currentDropdownMenuSet: (currentMenu: string) => {
                      setCurrentDropdownMenu(currentDropdownMenu === currentMenu ? '' : adminDashboardMenu.alt)
                    },
                    onLinkClicked: () => {
                      router.push(adminDashboardMenu.link!);
                    }
                  }
                }

                return (<DashboardMenuItemWithSubLinks segment={segment}
                  key={`menu-sublink-items-${adminDashboardMenu.text}`}
                  onActiveMenu={function (alt: string, segment: string): string {
                    return segment === alt ? `text-primary bg-tertiary-light` : ``;
                  }}
                  {...objectToAdminMenuItemWithSubLinksProps}>
                  {adminDashboardMenu.alt === 'orders' && <div className='rounded-full w-auto bg-danger text-white px-1.5 inline-block text-sm'>4</div>}
                </DashboardMenuItemWithSubLinks>)
              }

              let objectToAdminMenuItemLinkProps: any = adminDashboardMenu;

              if (adminDashboardMenu.alt === 'delivery-rates') {
                objectToAdminMenuItemLinkProps = {
                  ...objectToAdminMenuItemLinkProps,
                  onDisabledLink: (event: MouseEvent<HTMLAnchorElement>) => {
                    event.preventDefault();
                  }
                }
              }

              return (<DashboardMenuItemLink key={`menu-items-${adminDashboardMenu.text}`}
                segment={segment!}
                onActiveMenu={(alt: string, segment: string) => {
                  return segment === alt ? 'text-primary border-l-4 border-l-primary bg-tertiary-light' : ''
                }}
                {...objectToAdminMenuItemLinkProps} />)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default memo(AdminSidebar);