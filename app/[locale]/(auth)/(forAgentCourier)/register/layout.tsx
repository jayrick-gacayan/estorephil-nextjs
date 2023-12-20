import { ReactNode } from "react";
import Image from 'next/image'
import SignUpThanksOne from "../../_sections/sign-up-thanks-one";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-full gap-4 py-8">
      {children}
    </div>
  )
}