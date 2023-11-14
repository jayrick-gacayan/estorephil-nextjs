import { ReactNode } from 'react';
import { AdminPageHeader } from './_components/admin_page_header';
import { LinkProps } from '@/types/props/link_props';
import { FaChartBar, FaChartLine, FaFilter, FaImages, FaMoneyCheck, FaShoppingBasket, FaShoppingCart, FaThLarge } from 'react-icons/fa';
import { AdminNavbarHeader } from './_sections/admin_navbar_header';
import { AdminSidebar } from './_sections/admin_sidebar';

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

export function generateStaticParams() {
  return adminDashboardLinks.map((adminLink: LinkProps) => {
    return { slug: [adminLink.altText?.toLowerCase()] };
  });
}

export default function Layout({
  children,
  params
}: {
  children: ReactNode;
  params: { slug: string[] }
}): JSX.Element {
  let currentLink: string = params.slug[0];

  return (
    <>
      <AdminNavbarHeader />
      <main className='h-[calc(100vh-48px)] flex w-full text-secondary relative'>
        <AdminSidebar currentLink={currentLink} />
        <div className='flex-1 h-full overflow-auto bg-neutral-200'>
          <div className='border-b-2 border-neutral-300'>
            <AdminPageHeader text={adminDashboardLinks.find((adminLink: LinkProps) => {
              return adminLink.altText === currentLink
            })?.text!} />
          </div>
          {children}
        </div>
      </main>
    </>
  )
}