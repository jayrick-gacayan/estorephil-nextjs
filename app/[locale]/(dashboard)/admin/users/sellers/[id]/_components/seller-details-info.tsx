import React, { ReactNode } from "react";

export default function SellerDetailsInfo({
  label,
  data,
}: {
  label: string | ReactNode;
  data: string | ReactNode;
}) {
  return (
    <div className="flex justify-between w-full ">
      <div className=" text-xs font-semibold">{label}</div>
      <div className="  text-end">
        <div className="text-xs  text-gray-400 ">{data}</div>
      </div>
    </div>
  );
}
