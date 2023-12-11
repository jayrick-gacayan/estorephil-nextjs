'use client';

import Image from 'next/image';
import StaffInfoData from '../_components/staff-info-data';

export default function StaffDetails() {

  return (
    <div className="flex items-stretch gap-2 justify-evenly p-2">
      <div className="flex-none w-[448px]">
        <div className='w-80 block'>
          <Image alt='staff-profile-image'
            src='/static_images/profile_image_default.jpg'
            width={320}
            height={288}
            className='rounded h-72 w-80 block' />
        </div>
      </div>
      <div className="flex-1">
        <div className='w-[640px] space-y-4'>
          <StaffInfoData labelText='Name' data='Oliver Visto' />
          <StaffInfoData labelText='Email' data='oliver.visto@kodakollectiv.com' />
          <StaffInfoData labelText='Role' data='Admin' />
          <StaffInfoData labelText='Phone Number' data='09123456789' />
          <StaffInfoData labelText='Complete Address' data='Mandaue City' />
        </div>
      </div>
    </div>
  )
}