import { ReactNode } from 'react';
import LayoutContainer from './_sections/layout-container';

export function generateStaticParams() {
  return [
    { slug: 'cart' },
    { slug: 'balikbayan-box' },
    { slug: 'success' }
  ];
}

export default function Layout({
  params,
  children
}: {
  params: { slug: string; },
  children: ReactNode
}): JSX.Element {
  let slug = params.slug;

  return (
    <LayoutContainer checkoutSlug={slug}>{children}</LayoutContainer>
  )
}