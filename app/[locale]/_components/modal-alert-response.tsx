import { motion } from "framer-motion";
import { FaCircleCheck, FaCircleExclamation, FaCircleInfo, FaCircleXmark } from "react-icons/fa6";

let variants = {
  open: {
    opacity: 1,
    y: "0",
    transition: {
      delay: 0.2, duration: 0.2,
    }
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      delay: 0.7, duration: 0.7,
    }
  }
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.7, type: "spring", duration: 0.7, bounce: 0 },
      opacity: { delay: 0.7, duration: 0.7 }
    }
  }
};

export default function ModalAlertResponse({
  open,
  type,
  message,
  onCloseModal
}: {
  open: boolean;
  type: string;
  message: string;
  onCloseModal: () => void;
}) {

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
    <motion.div initial={{ opacity: 0, y: "100%" }}
      animate={open ? 'open' : 'closed'}
      variants={variants}
      className="fixed z-[9999] top-0 left-0 w-screen h-screen flex items-center justify-center
      after:bg-black/30 after:transition-opacity after:delay-100 after:ease-out after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:w-screen after:h-screen after:z-0">
      <div className="text-default-dark text-[32px] bg-white rounded h-auto relative z-10 p-8 space-y-8 overflow-hidden shadow-lg">
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
        <button onClick={() => {
          onCloseModal()
        }}
          className={`block rounded mt-4 bg-primary text-white px-8 py-2 w-fit m-auto`}>
          OK
        </button>
      </div>
    </motion.div>
  )
}