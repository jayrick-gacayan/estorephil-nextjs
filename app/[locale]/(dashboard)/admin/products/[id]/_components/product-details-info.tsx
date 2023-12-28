import React, { ReactNode } from "react";

export default function ProductDetailsInfo({
  label,
  data,
}: {
  label: string | ReactNode;
  data: string | ReactNode;
}) {
  return (
    <div className="flex  w-[30rem]  ">
      <div className=" text-gray-400 text-xs  w-[10rem] ">{label}</div>
      <div className="text-xs font-semibold flex-1 flex justify-start  ">
        {data}
      </div>
    </div>
  );
}
