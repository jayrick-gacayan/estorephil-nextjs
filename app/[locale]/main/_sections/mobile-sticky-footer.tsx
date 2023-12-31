import { FaHome, FaRegHeart, FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { MobileLinkFooterItem } from '../_components/mobile-link-footer-item';
import { NextLinkProps } from '@/types/props/nextlink-props';

const mobileFooterLinks: NextLinkProps[] = [
  { link: '#', text: 'HOME', icon: <FaHome size={32} className='block m-auto' />, altText: "" },
  { link: '#', text: 'FAVORITES', icon: <FaRegHeart size={32} className='block m-auto' />, altText: "" },
  { link: '#', text: 'CART', icon: <FaCartShopping size={32} className='block m-auto' />, altText: "" },
  { link: '#', text: 'PROFILE', icon: <FaUser size={32} className='block m-auto' />, altText: "" }
]

export function MobileStickyFooter() {
  return (
    <div className='sticky md:hidden block bottom-0 top-0 bg-primary-dark text-white border-t border-t-white z-[999]'>
      <div className='flex justify-around px-8 py-4'>
        {
          mobileFooterLinks.map((link: NextLinkProps) => {
            return (
              <MobileLinkFooterItem key={`mobile-footer-${link.text}`} link={link.link} text={link.text!} icon={link.icon!} />
            )
          })
        }
      </div>
    </div>
  )
}