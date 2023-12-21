import { OurSellers } from './_sections/our-sellers';
import { Carousel } from './_sections/carousel';
import { HomeCategories } from './_sections/home-categories';
import { BayanSection } from './_sections/bayan-section';
import BalikbayanItems from './_sections/balikbayan-items';
import NewItems from './_sections/new-items';
import OurProducts from './_sections/our-products';
import { cookies } from 'next/headers';
import { categoryContainer } from '@/inversify/inversify.config';
import { CategoryRepository } from '@/repositories/category-repository';
import { TYPES } from '@/inversify/types';

async function getMainCategories(countryCode: string) {
  let categoriesRepository = categoryContainer.get<CategoryRepository>(TYPES.CategoryRepository);

  return (await categoriesRepository.getMainCategories(countryCode)).data;

}
export default async function Home({ params }: { params: { locale: string } }) {

  let cookieStore = cookies();
  let countryCookie = cookieStore.get('country_code');
  let categories = await getMainCategories(countryCookie?.value ?? 'ph');


  return (
    <div className='bg-default px-8'>
      <div className='max-w-screen-2xl m-auto py-4'>
        <div className='flex md:flex-row flex-col gap-2 h-[400px]'>
          <HomeCategories categories={categories ?? []} />
          <Carousel />
          <BayanSection />
        </div>
      </div>
      <OurSellers />
      <OurProducts />
      {/* <BalikbayanItems />
      <NewItems /> */}
    </div>
  )
}
