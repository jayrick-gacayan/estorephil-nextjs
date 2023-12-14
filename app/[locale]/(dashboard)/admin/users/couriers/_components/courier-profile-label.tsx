import Link from "next/link";
import { ReactNode } from "react";

export default function CourierProfileLabel({
  label,
  label2,
  data,
  data2,
  data3,
  labelLink,
  dataLink,
  dataLink2,
  dataLink3,
  title,
}: {
  label: string | ReactNode;
  label2: string | ReactNode;
  data: string | ReactNode;
  data2: string | ReactNode;
  data3: string | ReactNode;
  labelLink: string | ReactNode;
  dataLink: string | ReactNode;
  dataLink2: string | ReactNode;
  dataLink3: string | ReactNode;
  title: boolean | ReactNode;
}) {
  return (
    <div>
      <div className="text-md text-gray-400 flex gap-2">
        <div
          className={`${title == true ? "text-lg font-bold text-black" : ""}`}>
          {label}
        </div>
        <div className="text-blue-500 underline flex items-center">
          <Link href="/">{labelLink}</Link>
        </div>
      </div>
      <div>
        <div className="flex gap-2">
          <div className="text-sm">{data}</div>
          <div className="text-blue-500 underline flex items-center text-sm">
            <Link href="/">{dataLink}</Link>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-sm">{data2}</div>
          <div className="text-blue-500 underline flex items-center text-sm">
            <Link href="/">{dataLink2}</Link>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-sm">{data3}</div>
          <div className="text-blue-500 underline flex items-center text-sm">
            <Link href="/">{dataLink3}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
