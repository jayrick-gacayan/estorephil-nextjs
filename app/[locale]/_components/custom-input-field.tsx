import { ReactNode } from 'react';

export default function CustomInputField({
  leftIcon,
}: {
  leftIcon?: ReactNode;
}) {
  return (
    <div className='rounded border border-tertiary bg-white p-2 flex gap-2 items-center'>
      {leftIcon && <div className='flex-none w-auto text-tertiary'>{leftIcon}</div>}
      <div className='flex-1'>
        <input type='text'
          className='outline-none focus:outline-none placeholder:text-tertiary'
          placeholder='Search store products' />
      </div>
    </div>
  )
}