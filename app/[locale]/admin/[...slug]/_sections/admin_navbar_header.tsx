'use client'

import Link from 'next-intl/link';
import Image from 'next/image';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function AdminNavbarHeader() {

  return (
    <header className='sticky w-full top-0 left-0 z-[999]'>
      <nav className='bg-[#23b7e5] text-white w-full'>
        <div className='flex '>
          <div className='flex-none w-[224px] py-3 px-2'>
            <Link href='/home' className='w-[224px] relative block md:h-full h-8'>
              <Image alt='estorephil-logo'
                src='/static_images/estorephil_logo.svg'
                fill
                className='md:px-8 px-0' />
            </Link>
          </div>
          <div className='flex-1 flex justify-between items-center py-3 px-4'>
            <div className='rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              <span className={`block bg-white w-6 h-[3px] transition duration-500 ease-in-out -translate-y-1`} />
              <span className={`block bg-white w-6 h-[3px] transition duration-500 ease-in-out`} />
              <span className={`block bg-white w-6 h-[3px] transition duration-500 ease-in-out translate-y-1`} />
            </div>
            <div className='flex-none w-auto'>
              <div className='relative'>
                <div className='transition-all duration-200 ease-in absolute hover:-left-[75%] bg-sky-300 text-white top-[15%] -left-[60%] text-[20px] block z-20'>
                  <FaArrowLeftLong className='w-6 h-4 block' />
                </div>
                <div className='border rounded border-white h-6 w-5 block' />
              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}