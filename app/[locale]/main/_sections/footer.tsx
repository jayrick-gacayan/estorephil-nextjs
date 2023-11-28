import Link from 'next-intl/link';
import { FaCcMastercard, FaCcPaypal, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterLinksContainer } from '../_components/footer_links_container';
import { LinkProps } from '@/types/props/link-props';
import { FooterLinksContainerWithIcons } from '../_components/footer-links-container-with-icons';
import Image from 'next/image';
import { RiVisaLine } from 'react-icons/ri';
import { FaStripe } from 'react-icons/fa6';
import CustomValidation from '@/types/helpers/custom-validation';

const customerCareLinks: LinkProps[] = [
  { link: '#', text: 'Order Tracking' },
  { link: '#', text: 'Return and Refund Policy' },
  { link: '#', text: 'Payment Methods' },
  { link: '#', text: 'Become a Seller' },
  { link: '#', text: 'Become a Courier' },
  { link: '#', text: 'Become an Agent' },
  { link: '#', text: 'Contact Us' },
]

const aboutEstorePhilLinks: LinkProps[] = [
  { link: '#', text: 'About Us' },
  { link: '#', text: 'Terms and Conditions' },
  { link: '#', text: 'Privacy Policy' },
]

const socialLinks: LinkProps[] = [
  { link: '#', icon: <FaFacebook size={30} /> },
  { link: '#', icon: <FaTwitter size={30} /> },
  { link: '#', icon: <FaInstagram size={30} /> },
];

const paymentTypeLinks: LinkProps[] = [
  { link: '#', icon: <RiVisaLine size={30} /> },
  { link: '#', icon: <FaStripe size={30} /> },
  { link: '#', icon: <FaCcPaypal size={30} /> },
  { link: '#', icon: <FaCcMastercard size={30} /> },
]

const deliveryServicesLinks: LinkProps[] = [
  {
    link: '#',
    icon: <Image alt='delivery-services-lbc'
      src='/others/lbc_logo.svg'
      height={24}
      width={24}
      className='w-6 h-6'
    />
  },
  {
    link: '#',
    icon: <Image alt='delivery-services-lbc'
      src='/others/dhl_logo.svg'
      height={24}
      width={24}
      className='w-6 h-6'
    />
  },
];

export function Footer() {

  function sample() {
    let getError = new CustomValidation();
    console.log(getError.setErrorType('djsfdjsf', ['required']))

  }

  return (
    <div className='w-full bg-primary-dark text-white p-8'>
      <div className='max-w-screen-2xl m-auto py-8'>
        <div className='flex lg:flex-row flex-col gap-1 lg:space-y-0 space-y-4'>
          <div className='w-full'>
            <FooterLinksContainer headerText='CUSTOMER CARE' links={customerCareLinks} />
          </div>
          <div className='w-full space-y-4'>
            <FooterLinksContainer headerText='ABOUT ESTOREPHIL' links={aboutEstorePhilLinks} />
            <FooterLinksContainerWithIcons headerText='SOCIALS' links={socialLinks} linkChildrenClassName='p-1' />
          </div>
          <div className='w-full space-y-4'>
            <FooterLinksContainerWithIcons headerText='PAYMENT' links={paymentTypeLinks} linkChildrenClassName='bg-white text-primary-dark p-1 rounded' />
            <FooterLinksContainerWithIcons headerText='DELIVERY SERVICES' links={deliveryServicesLinks} linkChildrenClassName='p-1 rounded' />
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