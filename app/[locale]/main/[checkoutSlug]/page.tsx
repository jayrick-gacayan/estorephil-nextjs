import PageContainer from './_sections/page-container';

export default function Page({ params: { checkoutSlug } }: { params: { checkoutSlug: string } }) {

  return (
    <PageContainer checkoutSlug={checkoutSlug} />
  )
}