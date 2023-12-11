'use client';

import { ChangeEvent } from "react";
import CourierGoogleLikeInputField from "../../../_components/courier-google-like-input-field";
import Image from 'next/image';

export default function EditStaffForm({ onClose }: { onClose: () => void; }) {
  return (<div className='py-8 space-y-4 w-[768px] m-auto'>
    <h3 className='text-[32px] leading-0 text-left'>Edit Basic Information</h3>
    <div className="flex items-stretch gap-4">
      <div className="flex-none w-64">
        <Image alt='edit-profile-image-info'
          src='/static_images/profile_image_default.jpg'
          width={256}
          height={192}
          className='w-64 h-48 rounded' />
      </div>
      <div className="flex-1 space-y-4">
        <CourierGoogleLikeInputField labelText='Email'
          inputProps={{
            id: 'email',
            type: 'email',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            }
          }} />
        <CourierGoogleLikeInputField labelText='First Name'
          inputProps={{
            id: 'firstName',
            type: 'text',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            }
          }} />
        <CourierGoogleLikeInputField labelText='Last Name'
          inputProps={{
            id: 'lastName',
            type: 'text',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            }
          }} />
        <CourierGoogleLikeInputField labelText='Phone Number'
          inputProps={{
            id: 'phoneNumber',
            type: 'text',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            }
          }} />
        <CourierGoogleLikeInputField labelText='Address'
          inputProps={{
            id: 'address',
            type: 'text',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            }
          }} />
      </div>
    </div>

    <div className='block'>
      <div className='w-1/2 m-auto'>
        <div className='flex items-stretch gap-2 justify-center'>
          <button className='bg-info p-2 rounded text-white'>Update</button>
          <button className='border border-info p-2 rounded text-info'
            onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  </div>);
}