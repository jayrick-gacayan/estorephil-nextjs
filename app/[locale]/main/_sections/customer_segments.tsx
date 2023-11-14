import Link from 'next-intl/link';

export function CustomerSegments() {
  return (
    <div className='bg-[#F2F2F2] text-secondary'>
      <div className='max-w-screen-2xl m-auto py-1 px-8'>
        <div className='space-x-1.5 w-fit ml-auto'>
          <Link href='#' className='p-1 hover:text-primary'>Become an Agent</Link>
          <Link href='#' className='p-1 hover:text-primary'>Become a Seller</Link>
        </div>
      </div>
    </div>
  )
}