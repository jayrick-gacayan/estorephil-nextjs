import PageContainer from './_sections/page-container';

export default function Page({ params: { slug } }: { params: { slug: string } }) {

  return (
    <PageContainer checkoutSlug={slug} />
  )
}