import React, { ReactNode } from "react";
import CourierDetailsInfo from "./courier-details-info";
import { CourierDataProps } from "@/types/props/courier-data-props";

export default function CourierDetailsCard({
  title,
  data,
}: {
  title: string | ReactNode;
  data: CourierDataProps[];
}) {
  return (
    <div className=" w-[40rem] border border-t-4 border-gray-300 rounded-t-md shadow-xl text-sm px-5 py-5 h-full ">
      <div className="space-y-4">
        <div>{title}</div>
        {data.map((value: CourierDataProps, index: number) => {
          return (
            <CourierDetailsInfo
              key={`${index} - ${value.value}`}
              label={value.label}
              data={value.value}
            />
          );
        })}

        {/* <CourierDetailsInfo label={"Email:"} data={"illamorjezzel@gmail.com"} />
        <CourierDetailsInfo label={"Telephone Number:"} data={"09325119327"} />
        <CourierDetailsInfo label={"Role:"} data={"Agent Admin"} /> */}
      </div>
    </div>
  );
}
