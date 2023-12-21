import { ReactNode } from "react";

export default function DashboardHeaderText({
  text,
  children,
}: {
  text: string;
  children?: ReactNode;
}) {
  return (
    <div className=" border-b-2 border-b-tertiary-dark bg-white">
      <div className="flex p-4 justify-between items-center">
        <div className="flex-none w-auto">
          <h1 className="text-xl text-gray-500">{text}</h1>
        </div>
        {children && children}
      </div>
    </div>
  );
}
