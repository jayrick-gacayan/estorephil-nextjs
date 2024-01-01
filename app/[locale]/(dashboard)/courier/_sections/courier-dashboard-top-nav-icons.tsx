'use client';

import { FaLock, FaRegBell, FaRegUser } from "react-icons/fa6";
import Link from 'next-intl/link';
import { SlLogout } from "react-icons/sl";
import { accountContainer } from "@/inversify/inversify.config";
import { TYPES } from "@/inversify/types";
import { AccountRepository } from "@/repositories/account-repository";

export default function CourierDashboardTopNavIcons() {
  return (
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
          <span className='inline-block cursor-pointer'
            onClick={async () => {
              let accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
              let result = await accountRepository.nextAuthSignOut(`/login`);

              console.log('result', result)
            }}>
            <SlLogout size={20} className='inline-block' />
          </span>
        </div>
      </div>
    </div>
  )
}