import { ReactNode } from 'react';
import LayoutContainer from './_sections/layout-container';

export function generateStaticParams() {
  return [{ checkoutSlug: 'cart' }, { checkoutSlug: 'balikbayan-box' }];
}

export default function Layout({
  params: { checkoutSlug },
  children
}: {
  params: { checkoutSlug: string; },
  children: ReactNode
}): JSX.Element {

  return (
    <LayoutContainer checkoutSlug={checkoutSlug}>{children}</LayoutContainer>
  )
}