import { ReactNode } from 'react';

export function TextWithIcon({ text, icon, }: { text: string; icon: ReactNode }) {
  return (
    <span className='px-2 space-x-1.5'>
      {icon}
      <span className='align-middle text-white'>{text}</span>
    </span>
  )
}