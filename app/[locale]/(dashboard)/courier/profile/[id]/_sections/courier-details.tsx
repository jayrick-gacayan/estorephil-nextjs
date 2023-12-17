'use client';

import Image from 'next/image';
import CourierInputField from '../../../_components/courier-custom-input';
import { ChangeEvent } from 'react';

export default function CourierDetails() {
  return (
    <>
      <div className="space-y-8 p-4">
        <div>
          <Image alt='courier-profile-info-image'
            src='/static_images/profile_image_default.jpg'
            width={96}
            height={96}
            className='w-24 h-24 rounded-full border border-tertiary-light' />
        </div>

        <div className="flex items-center gap-12 text-[14px]">
          <div className='w-full space-y-4'>
            <div className='flex items-center gap-6 border-b border-[#DDE6E9] pb-4'>
              <div className='flex-none w-56'>
                Courier Name
              </div>
              <div className='flex-1'>
                <CourierInputField inputProps={{
                  type: 'text',
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    return;
                  }
                }} />
              </div>
            </div>
            <div className='flex items-center gap-6 border-b border-[#DDE6E9] pb-4'>
              <div className='flex-none w-56'>
                Contact Person
              </div>
              <div className='flex-1'>
                <CourierInputField inputProps={{
                  type: 'text',
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    return;
                  }
                }} />
              </div>
            </div>
            <div className='flex items-center gap-6 border-b border-[#DDE6E9] pb-4'>
              <div className='flex-none w-56'>
                Contact Number
              </div>
              <div className='flex-1'>
                <CourierInputField inputProps={{
                  type: 'text',
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    return;
                  }
                }} />
              </div>
            </div>
          </div>
          <div className='w-full space-y-4'>
            <div className='flex items-center gap-6 border-b border-[#DDE6E9] pb-4'>
              <div className='flex-none w-56'>
                Business Address
              </div>
              <div className='flex-1'>
                <CourierInputField inputProps={{
                  type: 'text',
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    return;
                  }
                }} />
              </div>
            </div>
            <div className='flex items-center gap-6 border-b border-[#DDE6E9] pb-4'>
              <div className='flex-none w-56'>
                Business License
              </div>
              <div className='flex-1'>
                <CourierInputField inputProps={{
                  type: 'text',
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    return;
                  }
                }} />
              </div>
            </div>
            <div className='flex items-center gap-6 border-b border-[#DDE6E9] pb-4'>
              <div className='flex-none w-56'>
                Contact Number
              </div>
              <div className='flex-1'>
                <CourierInputField inputProps={{
                  type: 'text',
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    return;
                  }
                }} />
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}