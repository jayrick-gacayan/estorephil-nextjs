'use client';

import { useState } from 'react';
import CourierGoogleLikeInputField from '../../_components/courier-google-like-input-field';
import CourierCustomGoogleLikeSelectInput from '../../_components/courier-custom-google-like-select-input';

export default function AddStaffForm({
  onClose
}: {
  onClose: () => void;
}) {
  const [courierRole, setCourierRole] = useState<string>('')

  return (
    <div className='py-8 space-y-4 w-[512px] m-auto'>
      <h3 className='text-[32px] leading-0 text-left'>Add Staff</h3>
      <div className='space-y-4 text-left'>
        <CourierGoogleLikeInputField inputId='firstName' labelText='Firstname' />
        <CourierGoogleLikeInputField inputId='lastName' labelText='Lastname' />
        <CourierGoogleLikeInputField inputId='email' labelText='Email' />
        <CourierCustomGoogleLikeSelectInput<string> inputId='courierRole'
          labelText='Role'
          items={['Admin', 'Staff']}
          value={courierRole}
          onSelectChange={(value: string) => {
            setCourierRole((courierRole) => { return value; });
          }} />
      </div>
      <div className='block'>
        <div className='w-1/2 m-auto'>
          <div className='flex items-stretch gap-2 justify-center'>
            <button className='bg-info p-2 rounded text-white'>Add</button>
            <button className='border border-info p-2 rounded text-info'
              onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}