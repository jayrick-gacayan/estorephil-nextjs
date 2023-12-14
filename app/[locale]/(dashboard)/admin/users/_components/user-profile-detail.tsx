import { ReactNode } from "react";

export default function UserProfileDetails({
  label,
  data,
}: {
  label: string | ReactNode;
  data: string | ReactNode;
}) {
  return (
    <div>
      <div className="text-md">{label}</div>
      <div className="text-sm">{data}</div>
    </div>
  );
}
