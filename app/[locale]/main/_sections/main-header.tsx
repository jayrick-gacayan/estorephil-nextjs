'use client';

import { CustomerSegments } from './customer-segments';
import Link from 'next-intl/link';
import Image from 'next/image';
import { FaEnvelope, FaPhoneFlip, FaTruck, FaRegHeart, FaUser } from 'react-icons/fa6';
import { TextWithIcon } from '../_components/text-with-icon';
import { NavbarSearch } from './navbar-search';
import PurchaseMethodNavbar from './purchase-method-navbar';
import CountryPicker from '../_components/country-picker';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import Dropdown from '../../_components/dropdown';
import { useCallback, useRef } from 'react';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';


export default function MainHeader() {
  const dropdownProfileImageRef = useRef<HTMLDivElement>(null);
  const state = useSelector((state: RootState) => state.main)
  const closeDropdown = useCallback(() => {
    if (dropdownProfileImageRef.current) {
      let querySelector = dropdownProfileImageRef.current.querySelector('#dropdown-profile-image');
      if (querySelector) {
        querySelector.classList.add('hidden')
      }
    }
  }, []);

  useOutsideClick(dropdownProfileImageRef, () => { closeDropdown(); });

  return (
    <header className='sticky top-0 left-0 w-full z-[999]'>
      <CustomerSegments />
      <div className='w-full bg-primary-dark text-white px-8 py-4'>
        <nav className='max-w-screen-2xl m-auto'>
          <div className='flex md:flex-row flex-col w-full justify-between rounded p-2 md:gap-12 gap-4'>
            <Link href='/home' className='flex-none w-[160px] block relative md:h-auto h-12'>
              <Image alt='estorephil-logo'
                src='/static_images/estorephil_logo.svg'
                fill />
            </Link>
            <NavbarSearch />
            <div className='md:block hidden space-x-3 w-auto'>
              <PurchaseMethodNavbar>
                <Dropdown ref={dropdownProfileImageRef}
                  className='relative inline'>
                  <Image alt='profile-image'
                    src='/static_images/static_profile_img.png'
                    width={48}
                    height={48}
                    className='rounded-full border border-white w-12 h-12 inline-block cursor-pointer'
                    onClick={() => {
                      if (dropdownProfileImageRef.current) {
                        dropdownProfileImageRef.current.querySelector('#dropdown-profile-image')?.classList.toggle('hidden')
                      }
                    }} />
                  <div id="dropdown-profile-image" className='leading-0 hidden absolute shadow-lg shadow-secondary text-default-dark top-[250%] right-0 z-[9999] rounded overflow-hidden bg-white h-auto w-48'>
                    <div className='block'>
                      <Link href='/dashboard/agency-information'
                        className='transition-all delay-100 px-4 py-2 block hover:bg-primary-dark cursor-pointer hover:text-white'>
                        PROFILE
                      </Link>
                      <span className='transition-all delay-100 px-4 py-2 block hover:bg-primary-dark cursor-pointer hover:text-white'>
                        SIGNOUT
                      </span>
                    </div>
                  </div>
                </Dropdown>
              </PurchaseMethodNavbar>
            </div>
          </div>
          <div className='flex py-2 text-primary-light text-sm'>
            <div className='flex-1 divide-x divide-[#6D96FF]'>
              <TextWithIcon text='ESTOREPHIL@GMAIL.COM' icon={<FaEnvelope className='inline-block' />} />
              <TextWithIcon text='(413)599-6034' icon={<FaPhoneFlip className='inline-block' />} />
            </div>
            <div className='divide-x divide-[#6D96FF] md:block hidden'>
              <Link href="/dashboard/orders" className='inline-block'>
                <TextWithIcon text='TRACK MY ORDER' icon={<FaTruck className='inline-block' />} />
              </Link>
              <TextWithIcon text='FAVORITES' icon={<FaRegHeart className='inline-block' />} />
              <Link href="/dashboard/agency-information" className='inline-block'>
                <TextWithIcon text='JAYRICK GACAYAN' icon={<FaUser className='inline-block' />} />
              </Link>
              <div className='inline-block'>
                <CountryPicker
                  value={state.countryPicker.value}
                  show={state.countryPicker.show}
                  icon={
                    state.countryPicker.value == 'ca' ? <Image
                      src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ca.svg"
                      height={25}
                      width={25}
                      alt=''
                    /> :
                      state.countryPicker.value == 'ph' ? <Image
                        src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ph.svg"
                        height={25}
                        width={25}
                        alt=''
                      />
                        : <Image
                          src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/us.svg"
                          height={25}
                          width={25}
                          alt=''
                        />
                  }
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}