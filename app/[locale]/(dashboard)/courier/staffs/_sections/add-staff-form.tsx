'use client';

import { ChangeEvent, memo, useState } from 'react';
import CourierGoogleLikeInputField from '../../_components/courier-google-like-input-field';
import CourierCustomGoogleLikeSelectInput from '../../_components/courier-custom-google-like-select-input';

function AddStaffForm({
  onClose
}: {
  onClose: () => void;
}) {
  const [courierRole, setCourierRole] = useState<string>('');

  return (
    <div className='py-8 space-y-4 w-[512px] m-auto'>
      <div className="border-b border-secondary-light pb-2">
        <h3 className='text-[32px] leading-0 text-center'>Add Staff</h3>
      </div>
      <div className='space-y-4 text-left'>
        <CourierGoogleLikeInputField labelText='Firstname'
          inputProps={{
            id: 'firstName',
            type: 'text',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            }
          }} />
        <CourierGoogleLikeInputField labelText='Lastname'
          inputProps={{
            id: 'lastName',
            type: 'text',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            }
          }} />
        <CourierGoogleLikeInputField labelText='Email'
          inputProps={{
            id: 'email',
            type: 'email',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            }
          }} />
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

export default memo(AddStaffForm);