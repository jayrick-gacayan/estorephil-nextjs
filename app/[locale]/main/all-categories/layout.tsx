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

export default async function CategoriesLayout({
  children,
}: {
  children: ReactNode;
}) {




  return <>{children}</>
}