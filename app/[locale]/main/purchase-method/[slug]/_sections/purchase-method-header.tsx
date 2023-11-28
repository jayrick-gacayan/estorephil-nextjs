export default function ShopMethodHeader({ text }: { text: string; }) {
  return (
    <div className='border-b border-b-secondary-light'>
      <div className='p-8 text-[44px] leading-0 font-[500]'>{text}</div>
    </div>
  )
}