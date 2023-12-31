import Link from 'next-intl/link';

export default function AuthHeader() {
  return (
    <header className='sticky top-0 left-0 w-full z-[999] h-[10vh]'>
      <div className="px-8">
        <nav className='max-w-screen-2xl m-auto'>
          <div className="flex gap-4 items-center justify-between py-8">
            <div className="flex-none w-auto">
              <Link href='/' className='font-semibold text-primary-dark text-[24px]'>eStorePh</Link>
            </div>
            <div className="flex-none w-auto">
              <div className="space-x-8">
                <Link href='#' className='transition-all delay-100 p-4 hover:text-primary'>
                  Become a Seller
                </Link>
                <Link href='/courier/register' className='transition-all delay-100 p-4 hover:text-primary'>
                  Become a Courier
                </Link>
                <Link href='/agent/register' className='transition-all delay-100 p-4 hover:text-primary'>
                  Become an Agent
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}