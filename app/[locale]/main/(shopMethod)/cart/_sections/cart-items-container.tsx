'use client';

import { Checkbox } from "@/app/[locale]/_components/checkbox";
import { CiCircleMinus } from "react-icons/ci";

export default function CartItemsContainer() {
  return (
    <div className="space-y-3">
      <div className="border border-secondary-light">
        <div className="flex items-center p-4 bg-tertiary-dark border-b-2 border-secondary-light">
          <div className="flex-1 space-x-3">
            <Checkbox<boolean> current={false} value={false} onCheckboxChanged={(value: boolean) => { }} />
          </div>
          <div>
            <CiCircleMinus className='w-5 h-5 text-[#857114] stroke-1' />
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-2 p-2 text-secondary-light">
            <div className="flex-none w-auto">&#160;</div>
            <div className="flex-none w-24">IMAGE</div>
            <div className="flex-1">PRODUCT NAME</div>
            <div className="flex-none w-48">PRICE</div>
            <div className="flex-none w-48">QUANTITY</div>
            <div className="flex-none w-48">TOTAL</div>
          </div>
        </div>
      </div>
    </div>
  )
}