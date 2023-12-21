import React, { ReactNode } from "react";

export default function ProductDetailsInfo({
  label,
  data,
}: {
  label: string | ReactNode;
  data: string | ReactNode;
}) {
  return (
    <div className="flex justify-between w-[35rem] ">
      <div className=" text-gray-400 text-xs">{label}</div>
      <div className="w-[20rem] ">
        <div className="text-xs font-semibold text-end  flex justify-end">
          {data}
        </div>
      </div>
    </div>
  );
}
