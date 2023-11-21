export function QuantityShopMethod() {
  return (
    <div className='w-32 flex overflow-hidden text-center text-[20px] leading-0 divide-x divide-secondary-light rounded-full border border-secondary-light items-center'>
      <div className='py-1.5 pl-2.5 pr-1 w-8 flex-none cursor-pointer hover:bg-secondary-light'>&#8722;</div>
      <div className='flex-1 p-1.5 text-center'>2</div>
      <div className='py-1.5 pr-2.5 pl-1 w-8 flex-none cursor-pointer hover:bg-secondary-light'>&#43;</div>
    </div>
  )
}