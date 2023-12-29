'use client';

import { BreadcrumbProps } from '@/types/props/breadcrumb-props';
import { useSearchParams } from 'next/navigation';
import BreadCrumbItem from '../../_components/bread-crumb-item';

export default function BreadcrumbsContainer({
  basePath,
  text
}: {
  basePath: string;
  text: string;
}) {
  const searchParams = useSearchParams();
  let categories = searchParams.getAll('category[]');

  let breadcrumbItems: BreadcrumbProps[] = [
    { text: 'Home', link: `/home`, isLink: true, withRightChevron: true },
  ];

  if (categories.length > 0) {
    breadcrumbItems.push({ link: `/${basePath}`, text: text, withRightChevron: true, isLink: true });

    if (categories.length === 1) {
      breadcrumbItems.push({ link: `/${basePath}?category[]=${categories[0]}`, text: categories[0], withRightChevron: false })
    }
    else {
      for (let i: number = 0; i < categories.length; i++) {
        let breadCrumbItem: BreadcrumbProps = {
          link: `/${basePath}?${encodeURIComponent('category[]')}=${encodeURIComponent(categories[i])}`, text: categories[i],
        };
        if (i > categories.length - 2) {
          breadCrumbItem = { ...breadCrumbItem, otherPuncMarks: <>&#44;</> }
        }
        else if (i === categories.length - 2) {
          breadCrumbItem = { ...breadCrumbItem, otherPuncMarks: <>&#38;</> }
        }
        breadcrumbItems.push(breadCrumbItem);
      }
    }
  }
  else {
    breadcrumbItems.push({ link: `/${basePath}`, text })
  }

  return (
    <div className='space-x-1'>
      {
        breadcrumbItems.map((breadCrumb: BreadcrumbProps, index: number) => {
          return (
            <BreadCrumbItem key={`breadcrumb-all-categories-${index}-${breadCrumb.text}`} breadCrumb={breadCrumb} />
          )
        })
      }
    </div>
  )
}