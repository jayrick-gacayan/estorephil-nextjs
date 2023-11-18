import { ReactNode, forwardRef } from 'react';

const Modal = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({
    children,
  }: {
    children: ReactNode
  },
    ref) => {
    return (
      <div ref={ref}
        className={`transition-all fixed z-[9999] hidden top-0 left-0 w-screen h-screen items-center justify-center
      after:bg-black/30 after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:z-0`}>
        {children}
      </div>
    )
  });

Modal.displayName = 'Modal';

export default Modal;


