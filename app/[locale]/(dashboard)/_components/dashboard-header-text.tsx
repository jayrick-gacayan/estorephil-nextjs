import { ReactNode } from "react";

export default function DashboardHeaderText({
  text,
  children,
}: {
  text: string;
  children?: ReactNode;
}) {

  return (
    <div className='border-b-[.5px] border-secondary-dark bg-white'>
      <div className="flex p-4 justify-between items-center">
        <div className="flex-none w-auto">
          <h1 className="text-2xl text-secondary-dark">{text}</h1>
        </div>
        {children && children}
      </div>
    </div>
  )
}