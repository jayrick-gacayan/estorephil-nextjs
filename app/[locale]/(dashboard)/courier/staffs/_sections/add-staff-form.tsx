'use client';

import { ChangeEvent, memo, useState } from 'react';
import CourierCustomGoogleLikeSelectInput from '../../_components/courier-custom-google-like-select-input';
import { ValidationType } from '@/types/enums/validation-type';
import InputGoogleLikeCustom from '@/app/[locale]/_components/input-google-like-custom';

function AddStaffForm({
  onClose
}: {
  onClose: () => void;
}) {
  const [courierRole, setCourierRole] = useState<string>('');

  function googleLikeInputLabelClassName(status: ValidationType) {
    return `transition-all absolute peer-focus:text-sm cursor-text peer-placeholder-shown:top-2 peer-focus:-top-3 peer-placeholder-shown:text-base left-0 -top-3 text-sm bg-inherit mx-2 px-1 
          ${status !== ValidationType.NONE && status !== ValidationType.VALID ? `text-danger peer-focus:text-danger` :
        status === ValidationType.VALID ? 'peer-focus:text-success text-success' :
          'peer-focus:text-primary peer-placeholder-shown:text-tertiary-dark text-tertiary-dark'}`
  }

  function googleLikeInputClassName(status: ValidationType) {
    return `border-[.5px] rounded w-full p-2 disabled:bg-tertiary-dark
    ${status !== ValidationType.NONE && status !== ValidationType.VALID ? 'text-danger focus:border-danger border-danger' :
        status === ValidationType.VALID ? 'focus:border-success border-success text-success' :
          'focus:border-primary border-tertiary-dark'}`
  }

  return (
    <div className='py-8 space-y-4 w-[512px] m-auto'>
      <div className="border-b border-secondary-light pb-2">
        <h3 className='text-[32px] leading-0 text-center'>Add Staff</h3>
      </div>
      <div className='space-y-4 text-left'>
        <InputGoogleLikeCustom labelText='Firstname'
          inputProps={{
            id: 'add-staff-firstname',
            type: 'text',
            value: '',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            },
            className: googleLikeInputClassName(ValidationType.NONE)
          }}
          errorText={''}
          status={ValidationType.NONE}
          labelClassName={googleLikeInputLabelClassName} />
        <InputGoogleLikeCustom labelText='Lastname'
          inputProps={{
            id: 'add-staff-lastname',
            type: 'text',
            value: '',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            },
            className: googleLikeInputClassName(ValidationType.NONE)
          }}
          errorText={''}
          status={ValidationType.NONE}
          labelClassName={googleLikeInputLabelClassName} />
        <InputGoogleLikeCustom labelText='Email'
          inputProps={{
            id: 'add-staff-email',
            type: 'email',
            value: '',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            },
            className: googleLikeInputClassName(ValidationType.NONE)
          }}
          errorText={''}
          status={ValidationType.NONE}
          labelClassName={googleLikeInputLabelClassName} />

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