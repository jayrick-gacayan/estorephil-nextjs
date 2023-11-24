import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import ShopMethodProviders from './_sections/shop-method-providers';


async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ph' }];
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string; };
}): Promise<JSX.Element> {
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ShopMethodProviders>
        {children}
      </ShopMethodProviders>
    </NextIntlClientProvider>
  )
}
