import { ReactNode } from 'react';

export default function Modal({
  open,
  children
}: {
  open: boolean;
  children: ReactNode;
}): JSX.Element {

  return (
    <div className={`transition-all fixed top-0 left-0 w-screen h-screen ${open ? `z-[9999] duration-75` : `-z-[9999] duration-500`} flex items-center justify-center
      after:bg-black/30 after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:z-0`}>
      {children}
    </div>
  )
}