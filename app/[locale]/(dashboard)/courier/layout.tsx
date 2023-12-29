import DashboardhHeaderNav from '../_sections/dashboard-header-nav';
import CourierSidebar from './_sections/courier-sidebar';
import { ReactNode } from 'react';
import CourierDashboardTopNavIcons from './_sections/courier-dashboard-top-nav-icons';

export default function Layout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <>
      <DashboardhHeaderNav bgColor='bg-success-dark'>
        <CourierDashboardTopNavIcons />
      </DashboardhHeaderNav>
      <main className='h-[calc(100vh-60px)] flex w-full text-default-dark relative'>
        <CourierSidebar />
        <div className='flex-1 h-full flex flex-col w-full bg-white relative'>
          {children}
        </div>
      </main>
    </>
  )
}