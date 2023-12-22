import { ReactNode } from 'react';
import { CategorySidebar } from './_sections/category-sidebar';
import BreadcrumbsContainer from './_sections/breadcrumbs-container';
import SellerByCategory from './_sections/seller-by-category';
import { categoryContainer } from '@/inversify/inversify.config';
import { TYPES } from '@/inversify/types';
import { CategoryRepository } from '@/repositories/category-repository';
import { cookies } from 'next/headers';

async function getMainCategories(countryCode: string) {
  let categoriesRepository = categoryContainer.get<CategoryRepository>(TYPES.CategoryRepository);
  return (await categoriesRepository.getMainCategories(countryCode)).data;
}

export default async function CategoriesLayout({ children }: { children: ReactNode }) {
  let cookieStore = cookies();
  let countryCookie = cookieStore.get('country_code');

  let categories = await getMainCategories(countryCookie?.value ?? 'ph');

  return (
    <div>
      <div className='flex lg:flex-row flex-col'>
        <CategorySidebar categories={categories ?? []} />
        <div className='flex-1'>
          <div className='bg-white px-4 pt-4 pb-8 space-y-1.5 border-b border-b-tertiary-dark'>
            <BreadcrumbsContainer basePath='all-categories' text='All Categories' />
            <SellerByCategory />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}