'use client';

import { useState } from "react";

export function QuantityContainer() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='w-full flex gap-8 items-center'>
      <div className='flex-none w-auto'>Quantity</div>
      <div className='flex-1'>
        <div className='flex items-center justify-between gap-4 text-center'>
          <div className={`transition duration-100 rounded px-4 py-2 bg-tertiary text-secondary text-2xl 
            ${count > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            onClick={() => { setCount((count) => { return count > 0 ? count - 1 : 0; }) }}>
            &#8722;
          </div>
          <div>{count}</div>
          <div className='transition duration-100 cursor-pointer hover:bg-primary-light rounded px-4 py-2 bg-primary text-white text-2xl'
            onClick={() => { setCount((count) => { return count + 1; }) }}>
            &#43;
          </div>
        </div>
      </div>
    </div>
  )
}