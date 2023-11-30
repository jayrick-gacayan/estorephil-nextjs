import { ReactNode } from 'react';

export default function Modal({
  open,
  children
}: {
  open: boolean;
  children: ReactNode;
}) {
  return !open ? null : (
    <div className='transition-all flex duration-100 fixed z-[9999] top-0 left-0 w-screen h-screen items-center justify-center
      after:bg-black/30 after:transition-opacity after:delay-100 after:ease-out after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:w-screen after:h-screen after:z-0'>
      {children}
    </div>
  )
}



