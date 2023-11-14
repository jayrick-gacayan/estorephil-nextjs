
import { LinkProps } from '@/types/props/link_props';
import { FaHome, FaRegHeart, FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { MobileLinkFooterItem } from '../_components/mobile_link_footer_item';

const mobileFooterLinks: LinkProps[] = [
  { link: '#', text: 'HOME', icon: <FaHome className='w-8 h-8 block m-auto' /> },
  { link: '#', text: 'FAVORITES', icon: <FaRegHeart className='w-8 h-8 block m-auto' /> },
  { link: '#', text: 'CART', icon: <FaCartShopping className='w-8 h-8 block m-auto' /> },
  { link: '#', text: 'PROFILE', icon: <FaUser className='w-8 h-8 block m-auto' /> }
]

export function MobileStickyFooter() {
  return (
    <div className='sticky md:hidden block bottom-0 top-0 bg-primary text-white border-t border-t-white z-[9999]'>
      <div className='flex justify-around px-8 py-4'>
        {
          mobileFooterLinks.map((link: LinkProps) => {
            return (
              <MobileLinkFooterItem key={`mobile-footer-${link.text}`} link={link.link} text={link.text!} icon={link.icon!} />
            )
          })
        }
      </div>
    </div>
  )
}