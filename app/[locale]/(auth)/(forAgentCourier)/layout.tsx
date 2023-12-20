import { ReactNode } from "react";
import AuthHeader from "../_sections/auth-header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-screen">
      <AuthHeader />
      <div className="bg-tertiary-dark h-[90vh]">
        <div className="px-8 h-full">
          <div className='max-w-screen-2xl m-auto h-full'>
            <div className="flex h-full w-full gap-4 py-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}