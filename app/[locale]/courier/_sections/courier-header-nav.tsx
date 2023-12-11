'use client';

import Link from 'next-intl/link';
import Image from 'next/image';
import { ReactNode, useEffect, useRef, } from 'react';

export default function CourierHeaderNav({
  bgColor,
  children
}: {
  bgColor: string;
  children: ReactNode;
}) {

  return (
    <header className='sticky w-full top-0 left-0 z-[999]'>
      <nav className={`${bgColor} text-white w-full p-1.5`}>
        <div className='flex items-center'>
          <div className='flex-none w-[256px]'>
            <Link href='/home'
              className='w-[256px] relative block h-8'>
              <Image alt='estorephil-logo'
                src='/static_images/estorephil_logo.svg'
                fill />
            </Link>
          </div>
          <div className='flex-1'>
            {children}
          </div>
        </div>
      </nav>
    </header>
  )
}