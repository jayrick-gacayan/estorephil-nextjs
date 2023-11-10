import { ReactNode } from "react";

export function AdminModelCard({
  text,
  icon,
  bgColor,
  count
}: {
  text: string;
  icon: ReactNode;
  bgColor: string;
  count: number;
}) {
  return (
    <div className={`rounded h-24 w-full flex text-white overflow-hidden self-stretch`}>
      <div className={`flex-none w-24 p-2 flex items-center ${bgColor}`}>{icon}</div>
      <div className={`flex-1 p-2 ${bgColor} opacity-60 text-xl flex items-center`}>
        <div className="w-full">
          <div>{count}</div>
          <div className="text-uppercase">{text}</div>
        </div>
      </div>
    </div>
  )
}