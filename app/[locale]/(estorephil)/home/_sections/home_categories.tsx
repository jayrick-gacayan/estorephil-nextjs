import Link from 'next-intl/link';

export function HomeCategories() {
  return (
    <div className='lg:block hidden flex-none border rounded border-[#9CB4CC] p-2 space-y-2 bg-white'>
      <div className='flex'>
        <div className='flex-1 font-bold'>CATEGORIES</div>
      </div>
      <div className='block text-[#2F353D]'>
        <Link href='#' className='block'>3D Printed Products</Link>
        <Link href='#' className='block'>Automotive & Powersports</Link>
        <Link href='#' className='block'>Baby Products &#40;excluding Baby Apparel&#41;</Link>
        <Link href='#' className='block'>Beauty</Link>
        <Link href='#' className='block'>Books</Link>
        <Link href='#' className='block'>Camera &#38; Photo</Link>
        <Link href='#' className='block'>Clothing &#38; Accessories</Link>
        <Link href='#' className='block'>Collectibles &#8211; Books</Link>
        <Link href='#' className='block'>Collectibles &#8211; Coins</Link>
        <Link href='#' className='block'>Collectibles &#8211; Entertainment or Sports</Link>
        <Link href='#' className='block'>Consumer Electronics</Link>
        <Link href='#' className='block'>Electronics Accessories</Link>
      </div>
    </div>
  )
}