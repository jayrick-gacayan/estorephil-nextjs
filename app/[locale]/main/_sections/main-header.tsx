'use client';

import { CustomerSegments } from './customer-segments';
import Link from 'next-intl/link';
import Image from 'next/image';
import { FaEnvelope, FaPhoneFlip, FaTruck, FaRegHeart, FaUser } from 'react-icons/fa6';
import { TextWithIcon } from '../_components/text-with-icon';
import { NavbarSearch } from '../_components/navbar-search';
import CartTypeNavbar from './cart-type-navbar';
import { AppDispatch, RootState } from '@/redux/store';
import Dropdown from '../../_components/dropdown';
import { RefObject, useCallback, useEffect, useMemo, useRef } from 'react';
import { useOutsideClick } from '@/app/_hooks/use-outside-click';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next-intl/client';
import CustomCountryPicker from '../_components/custom-country-picker';
import { MainState } from '../_redux/main-state';
import { useAppDispatch, useAppSelector } from '@/app/_hooks/redux_hooks';
import { TextInputField } from '@/types/props/text-input-field';
import { countryPickerToggled } from '../_redux/main-slice';
import { accountContainer } from '@/inversify/inversify.config';
import { AccountRepository } from '@/repositories/account-repository';
import { TYPES } from '@/inversify/types';
import LinkForSubTopNav from '../_components/link-for-sub-top-nav';
import { COUNTRIES } from '@/types/helpers/country-helper';

let countries = COUNTRIES.filter((value: any) => {
  return value.code === 'PH' || value.code === 'CA' || value.code === 'US';
});

export default function MainHeader({
  countryCookie,
  onCountryCookieSet,
}: {
  countryCookie: string,
  onCountryCookieSet: (countryCode: string) => void;
}) {
  const dropdownProfileImageRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const mainState: MainState = useAppSelector((state: RootState) => { return state.main });
  const { push } = useRouter();
  const dispatch: AppDispatch = useAppDispatch();

  const closeDropdown = useCallback(() => {
    if (dropdownProfileImageRef.current) {
      let querySelector = dropdownProfileImageRef.current.querySelector('#dropdown-profile-image');
      if (querySelector) {
        querySelector.classList.add('hidden')
      }
    }
  }, []);

  let countryPicker: TextInputField<string> = useMemo(() => {
    return mainState.countryPicker;
  }, [mainState.countryPicker])

  const { data: sessionData } = useSession()
  const userFullName = `${sessionData?.user?.first_name} ${sessionData?.user?.last_name}`
  const onSession = !!sessionData
  const removeSession = async () => {
    await signOut({ callbackUrl: `/login` })
  }
  useEffect(() => { console.log('sessionData main header', sessionData) }, [sessionData])

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
            <NavbarSearch countryCookie={countryCookie} />
            <div className='md:block hidden space-x-3 w-auto'>
              <CartTypeNavbar>
                {onSession
                  ? <Dropdown ref={dropdownProfileImageRef}
                    className='relative inline'>
                    <Image alt='profile-image'
                      src={sessionData?.user?.profile_image_url ?? `https://estorephilbucketv1.s3.us-west-2.amazonaws.com/assets/images/profile_image_default.jpg`}
                      width={48}
                      height={48}
                      className='rounded-full border border-white w-12 h-12 inline-block cursor-pointer'
                      onClick={() => {
                        if (dropdownProfileImageRef.current) {
                          dropdownProfileImageRef.current.querySelector('#dropdown-profile-image')?.classList.toggle('hidden')
                        }
                      }} />
                    <div
                      id="dropdown-profile-image"
                      className='leading-0 hidden absolute shadow-lg shadow-secondary text-default-dark top-[250%] right-0 z-[9999] rounded overflow-hidden bg-white h-auto w-48'>
                      <div className='block'>
                        <button
                          onClick={() => {
                            push('/dashboard/agency-information')
                          }}
                          className='transition-all delay-100 px-4 py-2 block hover:bg-primary-dark cursor-pointer hover:text-white w-full'>
                          PROFILE
                        </button>
                        <button
                          className='transition-all delay-100 px-4 py-2 block hover:bg-primary-dark cursor-pointer hover:text-white w-full'
                          type='button'
                          onClick={() => {
                            removeSession()
                          }}
                        >
                          SIGNOUT
                        </button>
                      </div>
                  </Dropdown>
                  : (
                    <button onClick={() => { push('/login') }}
                      className='transition-all delay-50 text-white border border-transparent py-2 px-4 h-full rounded text-xl align-middle bg-primary hover:bg-primary-light'>Login
                    </button>)
                }
              </CartTypeNavbar>
            </div>
          </div>
          <div className='flex py-2 text-primary-light text-sm'>
            <div className='flex-1 divide-x divide-[#6D96FF]'>
              <TextWithIcon text='ESTOREPHIL@GMAIL.COM' icon={<FaEnvelope className='inline-block' />} />
              <TextWithIcon text='(413)599-6034' icon={<FaPhoneFlip className='inline-block' />} />
            </div>
            <div className='divide-x divide-[#6D96FF] md:block hidden'>
              {onSession && <>
                <Link href="/dashboard/orders" className='inline-block'>
                  <TextWithIcon text='TRACK MY ORDER' icon={<FaTruck className='inline-block' />} />
                </Link>
                <TextWithIcon text='FAVORITES' icon={<FaRegHeart className='inline-block' />} />
                <Link href="/dashboard/agency-information" className='inline-block'>
                  <TextWithIcon text={userFullName} icon={<FaUser className='inline-block' />} />
                </Link>
              </>
              }
              <div className='inline-block align-middle w-[100px] px-2'>
                <CustomCountryPicker value={COUNTRIES.find((value: any) => {
                  return value.code === countryCookie;
                }) ?? countries[1]}
                  labelText={(value: any) => {
                    return (
                      <div className="flex items-center gap-4 text-white px-2">
                        <div className='block'>
                          <Image alt='selected-country-picker-alt'
                            src={`/flags-svg/${countryCookie}.svg`}
                            height={24}
                            width={24}
                            className='w-6 h-6' />
                        </div>
                        <div className='block'>
                          {value.code.toUpperCase()}
                        </div>
                      </div>
                    );
                  }}
                  items={countries}
                  onToggle={() => { dispatch(countryPickerToggled()); }}
                  onSelect={async (value: any) => { onCountryCookieSet(value.code); }}
                  show={countryPicker.show ?? false}
                  selectedClassName={(value: any) => {
                    return value.code === countryCookie ? 'bg-primary text-white' : ''
                  }} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}