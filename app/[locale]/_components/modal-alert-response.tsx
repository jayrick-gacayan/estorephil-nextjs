import { FaCircleCheck, FaCircleExclamation, FaCircleInfo, FaCircleXmark } from "react-icons/fa6";
import Modal from "./modal";
import { forwardRef, memo } from "react";

export const ModalAlertResponse = forwardRef(({
  open,
  type,
  message,
  onCloseModal
}: {
  open: boolean;
  type: string;
  message: string;
  onCloseModal: () => void;
}, ref: any) => {
  let icons = {
    success: <FaCircleCheck size={128} className="block" />,
    danger: <FaCircleXmark size={128} className="block" />,
    warning: <FaCircleExclamation size={128} className="block" />,
    info: <FaCircleInfo size={128} className="block" />
  }

  let colors = {
    success: 'text-success',
    danger: 'text-danger',
    warning: 'text-warning',
    info: 'text-info'
  }

  return (
    <Modal open={open}>
      <div
        ref={ref}
        className="animate-slide-up translate-y-full text-default-dark text-[32px] bg-white rounded h-auto relative z-10 p-8 space-y-8 overflow-hidden shadow-lg">
        {
          type !== 'none' &&
          (
            <div className={`${colors[type as keyof typeof colors]} w-fit m-auto block`}>
              {icons[type as keyof typeof icons]}
            </div>
          )
        }
        {
          message !== '' && <div className="text-[28px]">{message}</div>
        }
        <button onClick={onCloseModal}
          className={`block rounded mt-4 bg-primary text-white px-8 py-2 w-fit m-auto`}>
          OK
        </button>
      </div>
    </Modal>
  )
})

ModalAlertResponse.displayName = "CustomSelect";

export default memo(ModalAlertResponse);