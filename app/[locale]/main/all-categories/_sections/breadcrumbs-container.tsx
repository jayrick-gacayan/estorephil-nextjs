'use client';

import { BreadcrumbProps } from '@/types/props/breadcrumb_props';
import { useSearchParams } from 'next/navigation';
import { Breadcrumbs } from '../../_components/bread-crumbs';

export default function BreadcrumbsContainer({
  basePath,
  text
}: {
  basePath: string;
  text: string;
}) {
  const searchParams = useSearchParams();
  let keyword = searchParams.get('keyword');

  let breadcrumbItems: BreadcrumbProps[] = [
    { link: '/home', text: 'Home' },
  ];

  if (!!keyword) {
    breadcrumbItems.push({ link: `/${basePath}`, text });
    breadcrumbItems.push({ text: keyword })
  }
  else {
    breadcrumbItems.push({ text })
  }

  return (<Breadcrumbs breadcrumbs={breadcrumbItems} />)
}