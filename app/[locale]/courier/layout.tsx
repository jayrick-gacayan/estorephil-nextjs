import { FaLock, FaRegBell, FaRegUser } from 'react-icons/fa6';
import CourierHeaderNav from './_sections/courier-header-nav';
import CourierSidebar from './_sections/courier-sidebar';
import { ReactNode } from 'react';
import { SlLogout } from 'react-icons/sl';
import Link from 'next-intl/link';

export default function Layout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <>
      <CourierHeaderNav bgColor='bg-success-dark'>
        <div className='flex justify-between items-center py-3 px-4'>
          <div className='flex-1 flex items-center gap-4'>
            <div className='rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              <span className='block bg-white w-6 h-[2px] transition duration-500 ease-in-out -translate-y-1' />
              <span className='block bg-white w-6 h-[2px] transition duration-500 ease-in-out' />
              <span className='block bg-white w-6 h-[2px] transition duration-500 ease-in-out translate-y-1' />
            </div>
            <div className='flex-none w-auto'>
              <Link href='/courier/profile/4'
                className='block w-auto cursor-pointer'>
                <FaRegUser size={20} className='inline-block' />
              </Link>
            </div>
            <div className='flex-none w-auto'>
              <FaLock size={20} className='inline-block' />
            </div>
          </div>
          <div className='flex-none w-auto'>
            <div className='space-x-4'>
              <FaRegBell size={20} className='inline-block' />
              <SlLogout size={20} className='inline-block' />
            </div>
          </div>
        </div>
      </CourierHeaderNav>
      <main className='h-[calc(100vh-52px)] flex w-full text-default-dark relative'>
        <CourierSidebar />
        <div className='flex-1 h-full flex flex-col w-full bg-white relative'>
          {children}
        </div>
      </main>
    </>
  )
}