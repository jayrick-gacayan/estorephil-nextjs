'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export function CustomerSegments() {
  const translate = useTranslations();
  const locale = useLocale();

  return (
    <div className='bg-tertiary-dark'>
      <div className='max-w-screen-2xl m-auto py-1'>
        <div className='space-x-1.5 w-fit ml-auto'>
          <Link href='/register/agent' className='p-1 hover:text-primary'>{translate('becomeUserType', { userType: locale === 'ph' ? 'Ahente' : 'an Agent' })}</Link>
          <Link href='#' className='p-1 hover:text-primary'>{translate('becomeUserType', { userType: locale === 'ph' ? 'Tindero' : 'a Seller' })}</Link>
        </div>
      </div>
    </div>
  )
}