import Link from 'next-intl/link';
import { FaCcMastercard, FaCcPaypal, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterLinksContainer } from '../_components/footer_links_container';
import { LinkProps } from '@/types/props/link-props';
import { FooterLinksContainerWithIcons } from '../_components/footer-links-container-with-icons';
import Image from 'next/image';
import { RiVisaLine } from 'react-icons/ri';
import { FaStripe } from 'react-icons/fa6';
import { NextLinkProps } from '@/types/props/nextlink-props';

const customerCareLinks: NextLinkProps[] = [
  { link: '#', text: 'Order Tracking', altText: "" },
  { link: '#', text: 'Return and Refund Policy', altText: "" },
  { link: '#', text: 'Payment Methods', altText: "" },
  { link: '#', text: 'Become a Seller', altText: "" },
  { link: '#', text: 'Become a Courier', altText: "" },
  { link: '#', text: 'Become an Agent', altText: "" },
  { link: '#', text: 'Contact Us', altText: "" },
]

const aboutEstorePhilLinks: NextLinkProps[] = [
  { link: '#', text: 'About Us', altText: "" },
  { link: '#', text: 'Terms and Conditions', altText: "" },
  { link: '#', text: 'Privacy Policy', altText: "" },
]

const socialLinks: NextLinkProps[] = [
  { link: '#', icon: <FaFacebook size={30} />, altText: "" },
  { link: '#', icon: <FaTwitter size={30} />, altText: "" },
  { link: '#', icon: <FaInstagram size={30} />, altText: "" },
];

const paymentTypeLinks: NextLinkProps[] = [
  { link: '#', icon: <RiVisaLine size={30} />, altText: "" },
  { link: '#', icon: <FaStripe size={30} />, altText: "" },
  { link: '#', icon: <FaCcPaypal size={30} />, altText: "" },
  { link: '#', icon: <FaCcMastercard size={30} />, altText: "" },
]

const deliveryServicesLinks: NextLinkProps[] = [
  {
    link: '#',
    icon: <Image alt='delivery-services-lbc'
      src='/others/lbc_logo.svg'
      height={24}
      width={24}
      className='w-6 h-6'
    />,
    altText: ""
  },
  {
    link: '#',
    icon: <Image alt='delivery-services-lbc'
      src='/others/dhl_logo.svg'
      height={24}
      width={24}
      className='w-6 h-6'
    />,
    altText: ""
  }
];

export function Footer() {

  return (
    <div className='w-full bg-primary-dark text-white p-8'>
      <div className='max-w-screen-2xl m-auto py-8'>
        <div className='flex lg:flex-row flex-col gap-1 lg:space-y-0 space-y-4'>
          <div className='w-full'>
            <FooterLinksContainer headerText='CUSTOMER CARE' links={customerCareLinks} />
          </div>
          <div className='w-full space-y-4'>
            <FooterLinksContainer headerText='ABOUT ESTOREPHIL' links={aboutEstorePhilLinks} />
            <FooterLinksContainerWithIcons headerText='SOCIALS'
              links={socialLinks}
              linkChildrenClassName='p-1' />
          </div>
          <div className='w-full space-y-4'>
            <FooterLinksContainerWithIcons headerText='PAYMENT'
              links={paymentTypeLinks}
              linkChildrenClassName='bg-white text-primary-dark p-1 rounded' />
            <FooterLinksContainerWithIcons headerText='DELIVERY SERVICES'
              links={deliveryServicesLinks}
              linkChildrenClassName='p-1 rounded' />
          </div>
          <div className='w-full space-y-2'>
            <h1 className='font-bold'>Promotions</h1>
            <div className='block [&>a]:block space-y-2'>
              <Link href='#' className='rounded w-full bg-[#D4D4D4] h-12' />
              <Link href='#' className='rounded w-full bg-[#D4D4D4] h-12' />
              <Link href='#' className='rounded w-full bg-[#D4D4D4] h-12' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}