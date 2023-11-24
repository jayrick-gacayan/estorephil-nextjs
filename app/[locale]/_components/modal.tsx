import { ForwardedRef, ReactNode, forwardRef, memo, useEffect } from 'react';

type Modal = {
  open: boolean;
  children: ReactNode;
}

const Modal = forwardRef(
  ({ children, open }: Modal, ref: ForwardedRef<HTMLDivElement>) => {

    useEffect(() => {
      if (ref && typeof ref !== 'function') {
        if (ref.current) {
          if (open) {
            ref.current.classList.remove('hidden');
            ref.current.classList.add('flex');
          }
        }
      }
    }, [open, ref]);

    return (
      <div ref={ref}
        className='transition-all hidden duration-100 fixed z-[9999] top-0 left-0 w-screen h-screen items-center justify-center
      after:bg-black/30 after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:z-0'>
        {children}
      </div>
    )
  }
);

Modal.displayName = 'Modal';

export default memo(Modal);


