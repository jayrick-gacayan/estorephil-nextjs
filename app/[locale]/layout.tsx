import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import ToastContainer from './_sections/toast-container';

async function getMessages(locale: string) {
  try { return (await import(`../../messages/${locale}.json`)).default; }
  catch (error) { notFound(); }
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
      {children}
      <ToastContainer />
    </NextIntlClientProvider>
  )
}
