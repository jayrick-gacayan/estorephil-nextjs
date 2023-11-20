import { ReactNode } from "react";

export default function ShopMethodLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <div className="flex-1 bg-white">
        <div className="border-b border-b-secondary-light">
          <div className="p-8 text-[44px] leading-0 font-[500]">CART</div>
        </div>
        <div className="p-8">
          {children}
        </div>
      </div>
      <div className="w-[384px] bg-secondary-light">

      </div>
    </div>
  )
}