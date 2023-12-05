'use client';

import { MenuProps } from "@/types/props/menu-props";
import { BiSolidDashboard } from "react-icons/bi";
import { BsBox2 } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import CourierMenuItemLink from "../_components/courier-menu-item-link";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";
import { useMemo } from "react";

const courierDashboardMenus: MenuProps[] = [
  { link: '/courier', text: 'Dashboard', alt: 'dashboard', icon: <BiSolidDashboard /> },
  { link: '/courier/sellers', text: 'Sellers', alt: 'sellers', icon: <BsBox2 /> },
  {
    text: 'Orders',
    alt: 'orders',
    icon: <FaShoppingCart />,
    subMenus: [
      {
        link: '/courier/orders/to-pick-up',
        text: 'To Pick Up',
        alt: 'to-pick-up',
      },
      { link: '/courier/orders/to-ship', text: 'To Ship', alt: 'to-ship' },
      { link: '/courier/orders/to-out-of-delivery', text: 'Out of Delivery', alt: 'to-out-of-delivery' },
      { link: '/courier/orders/completed', text: 'Completed', alt: 'completed' }
    ]
  },
];

export default function CourierSidebar() {

  const segments = useSelectedLayoutSegments();

  const segment = useMemo(() => {
    if (segments.length > 1) {
      return segments[segments.length - 1];
    }
    return segments[1];
  }, [segments])
  return (
    <div className='lg:block hidden h-full w-[256px] bg-white lg:relative absolute lg:z-0 z-[100] top-0 left-0 border-r-[.5px] border-r-secondary-dark'>
      <div className="p-4 space-y-2">
        <div className='text-sm'>Menu</div>
        <div className="block">
          {
            courierDashboardMenus.map((courierDashboardMenu: MenuProps) => {
              return (<CourierMenuItemLink key={`menu-items-${courierDashboardMenu.text}`}
                segment={segment!}
                onActiveMenu={(alt: string, segment: string) => {
                  return segment === alt ? 'text-primary' : ''
                }}
                {...courierDashboardMenu} />)
            })
          }
        </div>
      </div>
    </div>
  )
}