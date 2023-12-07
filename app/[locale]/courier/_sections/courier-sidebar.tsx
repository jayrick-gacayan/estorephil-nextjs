'use client';

import { MenuProps } from '@/types/props/menu-props';
import { BiSolidDashboard } from 'react-icons/bi';
import { BsBox2 } from 'react-icons/bs';
import { FaCogs, FaShoppingCart } from 'react-icons/fa';
import CourierMenuItemLink from '../_components/courier-menu-item-link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useMemo } from 'react';
import { FaMoneyBill1Wave, FaUserTie, FaUsers } from 'react-icons/fa6';

const courierDashboardMenus: MenuProps[] = [
  {
    link: '/courier',
    text: 'Dashboard',
    alt: 'dashboard',
    icon: <BiSolidDashboard />
  },
  {
    link: '/courier/staffs',
    text: 'Staff Management',
    alt: 'staffs',
    icon: <FaUsers />
  },
  {
    link: '/courier/boxes',
    text: 'Box Management',
    alt: 'boxes',
    icon: <BsBox2 />
  },
  {
    link: '/courier/deliveries',
    text: 'Delivery Management',
    alt: 'deliveries',
    icon: <FaCogs />
  },
  {
    link: '/courier/sellers',
    text: 'Sellers',
    alt: 'sellers',
    icon: <FaUserTie />
  },
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
  {
    link: '/courier/delivery-rates',
    text: 'Delivery Rates',
    alt: 'delivery-rates',
    icon: <FaMoneyBill1Wave />
  },
];

export default function CourierSidebar() {

  const segments = useSelectedLayoutSegments();

  const segment = useMemo(() => {
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
              return (<CourierMenuItemLink key={`menu-items-${courierDashboardMenu.text}`}
                segment={segment!}
                onActiveMenu={(alt: string, segment: string) => {
                  return segment === alt ? 'text-primary border-l-4 border-l-primary' : ''
                }}
                {...courierDashboardMenu} />)
            })
          }
        </div>
      </div>
    </div>
  )
}