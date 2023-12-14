import { ReactNode } from "react";

export default function StaffInfoData({
  labelText,
  data
}: {
  labelText: string;
  data: ReactNode | string;
}) {
  return (
    <div className='flex items-center justify-evenly'>
      <div className='w-full text-secondary-light'>{labelText}:</div>
      <div className='w-full font-semibold'>{data}</div>
    </div>
  )
}