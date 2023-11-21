export function QuantityShopMethod() {
  return (
    <div className='w-32 flex text-center text-[20px] leading-0 divide-x divide-secondary-light rounded-full border border-secondary-light items-center'>
      <div className='py-1.5 pl-2.5 w-8 flex-none cursor-pointer'>&#8722;</div>
      <div className='flex-1 p-1.5 text-center'>2</div>
      <div className='py-1.5 pr-2 w-8 flex-none cursor-pointer'>&#43;</div>
    </div>
  )
}