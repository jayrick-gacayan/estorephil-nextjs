import { BreadcrumbProps } from "@/types/props/breadcrumb-props";
import { BreadcrumbItem } from "./breadcrumb-item";

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: BreadcrumbProps[] }) {
  return (
    <div className='space-x-1'>
      {
        breadcrumbs.map((breadcrumb: BreadcrumbProps, index: number) => {
          let breadcrumbProps: any = {
            isLink: breadcrumb.link ? true : false,
            withRightArrowChevron: (index < breadcrumbs.length - 1) ? true : false,
            text: breadcrumb.text
          }

          if (breadcrumb.link) {
            breadcrumbProps = { ...breadcrumbProps, link: breadcrumb.link }
          }

          return (<BreadcrumbItem key={`breadcrumb-item-${index}-${breadcrumb.text}`} {...breadcrumbProps} />)

        })
      }
    </div>
  )
}