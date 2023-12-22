import { ReactNode } from "react";

export default function OrderDetailsInfo({
  label,
  data,
}: {
  label: string | ReactNode;
  data: string | ReactNode;
}) {
  return (
    <div className="flex justify-between w-[35rem] ">
      <div className=" text-gray-400 text-xs">{label}</div>
      <div className="w-[20rem]">
        <div
          className={`w-min ${
            data == "Cancelled"
              ? "bg-red-500 text-white px-2 py-1 rounded-xl text-xs font-semibold"
              : data == "Active"
              ? "bg-green-500 text-white px-2 py-1 rounded-xl text-xs font-semibold"
              : "text-xs font-semibold"
          }`}>
          {data}
        </div>
      </div>
    </div>
  );
}
