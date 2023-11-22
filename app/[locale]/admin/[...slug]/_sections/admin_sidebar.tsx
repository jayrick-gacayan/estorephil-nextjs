'use client';

import { LinkProps } from '@/types/props/link-props';
import { FaChartBar, FaChartLine, FaFilter, FaImages, FaMoneyCheck, FaShoppingBasket, FaShoppingCart, FaThLarge } from 'react-icons/fa';
import Link from 'next-intl/link';

const adminDashboardLinks: LinkProps[] = [
  { link: '/admin/dashboard', altText: 'dashboard', text: 'Dashboard', icon: <FaThLarge className='w-6 h-6 inline-block' /> },
  { link: '/admin/products', altText: 'products', text: 'Products', icon: <FaShoppingCart className='w-6 h-6 inline-block' /> },
  { link: '/admin/tax_rules', altText: 'tax_rules', text: 'Tax Rules', icon: <FaMoneyCheck className='w-6 h-6 inline-block' /> },
  { link: '/admin/trade_rates', altText: 'trade_rates', text: 'Trade Rates', icon: <FaChartBar className='w-6 h-6 inline-block' /> },
  { link: '/admin/categories', altText: 'categories', text: 'Categories', icon: <FaFilter className='w-6 h-6 inline-block' /> },
  { link: '/admin/accounting', altText: 'accounting', text: 'Accounting', icon: <FaChartLine className='w-6 h-6 inline-block' /> },
  { link: '/admin/banners', altText: 'banners', text: 'Banners', icon: <FaImages className='w-6 h-6 inline-block' /> },
  { link: '/admin/orders', altText: 'orders', text: 'Orders', icon: <FaShoppingBasket className='w-6 h-6 inline-block' /> },
];

export function AdminSidebar({ currentLink }: { currentLink: string }): JSX.Element {
  return (
    <div className='lg:block hidden h-full w-[224px] bg-white lg:relative absolute lg:z-0 z-[100] top-0 left-0 border-r-2 border-r-neutral-300'>
      <div className='text-sm px-4 py-3'>Menu</div>
      <div className='block overflow-hidden hover:overflow-auto'>
        {
          adminDashboardLinks.map((adminLink: LinkProps, index: number) => {
            return (
              <div key={`admin-links-${adminLink.text}-${index}`}
                className='w-full'>
                <Link
                  href={`${adminLink.link}`}
                  className={`transition-all delay-100 ease-linear block py-2 px-4 space-x-2 ${currentLink === adminLink.altText ? `border-l-4 border-l-[#23b7e5] text-[#23b7e5]` : `text-inherit`}`}>
                  {adminLink.icon}
                  <span className='align-middle'>{adminLink.text}</span>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}