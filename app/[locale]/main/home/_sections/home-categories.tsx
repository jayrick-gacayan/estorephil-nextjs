import { LinkProps } from '@/types/props/link-props';
import Link from 'next-intl/link';

export function HomeCategories() {
  const allCategoriesLinks: LinkProps[] = [
    { link: '/all-categories', text: `3D Printed Products` },
    { link: '/all-categories', text: `Baby Products \u0028excluding Baby Apparel\u0029` },
    { link: '/all-categories', text: `Beauty` },
    { link: '/all-categories', text: `Books` },
    { link: '/all-categories', text: `Camera \u0026 Photo` },
    { link: '/all-categories', text: `Collectibles \u2212 Books` },
    { link: '/all-categories', text: `Collectibles \u2212 Coins` },
    { link: '/all-categories', text: `Collectibles \u2212 Entertainment or Sports` },
    { link: '/all-categories', text: `Consumer Electronics` },
    { link: '/all-categories', text: `Electronics Accessories` },
  ]

  return (
    <div className='lg:block hidden flex-none border rounded border-[#9CB4CC] p-3 space-y-2 bg-white'>
      <div className='flex'>
        <div className='flex-1 font-bold'>CATEGORIES</div>
        <Link href={`/all-categories`} className='w-auto flex-none underline text-primary hover:text-primary-dark'>View All</Link>
      </div>
      <div className='block text-secondary'>
        {
          allCategoriesLinks.map((categoryLink: LinkProps) => {
            return (
              <Link key={`all-categories-link-text-${categoryLink.text}`}
                href={{
                  pathname: categoryLink.link,
                  query: { keyword: categoryLink.text }
                }}
                className='block hover:text-primary'>{categoryLink.text}
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}