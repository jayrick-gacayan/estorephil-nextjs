import { ReactNode } from "react";
import Image from 'next/image'
import SignUpThanksOne from "../../_sections/sign-up-thanks-one";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // <SignUpThanksOne />
    <div className="flex h-full w-full gap-4 py-8">
      <div className="w-full space-y-8">
        <div className="block">
          <h1 className="text-[60px] text-primary-dark font-bold">Become an Agent</h1>
          <p className="text-[24px] text-primary-dark leading-0">
            You get &#37; commission for every successful customer purchase
          </p>
        </div>
        <div className="block">
          <Image
            src='/register-agent.svg'
            height={457}
            width={561}
            alt=''
          />
        </div>
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}