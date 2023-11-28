'use client';

import { useCallback, useRef } from 'react';
import Modal from '../../_components/modal';
import { useAppDispatch } from '@/app/_hooks/redux_hooks';
import { AppDispatch } from '@/redux/store';

export default function ModalPickingUpItems({ open }: { open: boolean; }) {
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const dispatch: AppDispatch = useAppDispatch();

  const cbOnModalClose = useCallback(() => {
    if (modalContentRef.current) {
      if (open) {
        modalContentRef.current.classList.add('animate-slide-bottom-down');
        modalContentRef.current.classList.remove('animate-slide-bottom-up');
        setTimeout(() => {
          modalWrapperRef.current?.classList.remove('flex');
          modalWrapperRef.current?.classList.add('hidden');
          // dispatch(modalProductDeliveryAddressOpened({ open: false, type: '' }));
        }, 300);
      }
    }
  }, [open, dispatch]);

  return (
    <Modal ref={modalWrapperRef} open={open}>
      <div ref={modalContentRef}
        className={`modal-content flex-none w-auto rounded-2xl bg-white text-center relative z-10 px-8`}>
        <div className='space-y-8'>
          <h1 className='font-semibold text-[36px] leading-0'>PACKING-UP ITEMS</h1>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui.
            Morbi purus mauris, vulputate quis felis nec, fermentum aliquam orci.
            Quisque ornare iaculis placerat.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            In commodo sem arcu, sed fermentum tortor consequat vel.
            Phasellus lacinia quam quis leo tincidunt vehicula.
          </p>
        </div>
      </div>
    </Modal>
  )
}