import { ReactNode } from "react";

export default function Tabs({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex w-full justify-center">
      {children}
    </div>
  )
}