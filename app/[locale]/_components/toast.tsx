import { ToastProps } from "@/types/props/toast-props";
import { useCallback, useEffect, useRef } from "react";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
  FaCircleXmark,
  FaXmark
} from "react-icons/fa6";
import { useTimeout } from "usehooks-ts";

export default function Toast(toast: ToastProps & { onClose: () => void }) {
  const toastRef = useRef<HTMLDivElement>(null);

  let toastIcons = {
    success: <FaCircleCheck className='w-6 h-6' />,
    danger: <FaCircleXmark className='w-6 h-6' />,
    warning: <FaCircleExclamation className='w-6 h-6' />,
    info: <FaCircleInfo className='w-6 h-6' />
  }

  let colors = {
    success: 'bg-success',
    danger: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info',
  }

  const onToastClose = useCallback(() => {
    if (toastRef.current) {
      toastRef.current.classList.remove('animate-slide-in');
      toastRef.current.classList.add('animate-slide-out')
      setTimeout(toast.onClose, 400);
    }
  }, [toast.onClose]);


  useEffect(() => {
    if (toastRef.current) {
      toastRef.current.classList.add('animate-slide-in')
    }
  }, []);

  useTimeout(onToastClose, toast.duration * 1000)

  return (
    <div ref={toastRef}
      className={`w-[448px] block rounded overflow-auto h-auto text-white ${colors[toast.type as keyof typeof colors]} hover:bg-opacity-80`}>
      <div className={`flex items-center gap-1 py-4 px-2`}>
        <div className="w-auto flex-none">
          {toastIcons[toast.type as keyof typeof toastIcons]}
        </div>
        <div className="flex-1">
          {toast.message}
        </div>
        <div className="flex-none w-auto">
          <FaXmark />
        </div>
      </div>
    </div>
  )
}