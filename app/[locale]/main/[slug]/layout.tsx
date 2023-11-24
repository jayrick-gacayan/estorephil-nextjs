import { ReactNode } from 'react';
import LayoutContainer from './_sections/layout-container';

export function generateStaticParams() {
  return [{ slug: 'cart' }, { slug: 'balikbayan-box' }];
}

export default function Layout({
  params: { slug },
  children
}: {
  params: { slug: string; },
  children: ReactNode
}): JSX.Element {

  return (
    <LayoutContainer checkoutSlug={slug}>{children}</LayoutContainer>
  )
}