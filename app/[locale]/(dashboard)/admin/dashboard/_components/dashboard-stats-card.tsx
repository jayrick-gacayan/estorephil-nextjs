import { ReactNode } from "react";

export default function DashboardStatsCard({
  color,
  iconColor,
  title,
  icon,
  number,
}: {
  color: string | ReactNode;
  iconColor: string | ReactNode;
  title: string | ReactNode;
  number: string | ReactNode;
  icon: any | ReactNode;
}) {
  return (
    <div
      className={`w-[375px] h-[96.89px] ${color} rounded-md flex items-center text-white`}>
      <div
        className={`${iconColor} h-full flex items-center w-[125px] justify-center rounded-l-md`}>
        {icon}
      </div>
      <div className="flex flex-col px-5 gap-2">
        <div className="text-3xl">{number}</div>
        <div className="text-sm">{title}</div>
      </div>
    </div>
  );
}
