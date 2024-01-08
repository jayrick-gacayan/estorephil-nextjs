import { OurSellers } from './_sections/our-sellers';
import { Carousel } from './_sections/carousel';
import { HomeCategories } from './_sections/home-categories';
import { BayanSection } from './_sections/bayan-section';
import OurProducts from './_sections/our-products';
import { cookies } from 'next/headers';
import { categoryContainer, homeContainer, productContainer, storeContainer } from '@/inversify/inversify.config';
import { CategoryRepository } from '@/repositories/category-repository';
import { TYPES } from '@/inversify/types';
import { StoreRepository } from '@/repositories/store-repository';
import { ProductRepository } from '@/repositories/product-repository';
import { HomeRepository } from '@/repositories/home-repository';

async function getMainCategories(countryCode: string) {
  let categoriesRepository = categoryContainer.get<CategoryRepository>(TYPES.CategoryRepository);
  return (await categoriesRepository.getMainCategories(countryCode)).data;
}

async function getMainStores(countryCode: string) {
  let storeRepository: StoreRepository = storeContainer.get<StoreRepository>(TYPES.StoreRepository);
  return (await storeRepository.getMainStores(countryCode)).data;
}

async function getMainProducts(countryCode: string) {
  let homeRepository = homeContainer.get<HomeRepository>(TYPES.HomeRepository);
  return (await homeRepository.getMainProducts(countryCode)).data;
}

export default async function Home({ params }: { params: { locale: string } }) {
  let cookieStore = cookies();
  let countryCookie = cookieStore.get('country_code');

  let categories = await getMainCategories(countryCookie?.value ?? 'ph');
  let stores = await getMainStores(countryCookie?.value ?? 'ph');
  let ourProducts = await getMainProducts(countryCookie?.value ?? 'ph');

  // let ourProducts = (await import('@/app/_data/products.json')).default.products;
  return (
    <div className='bg-default px-8'>
      <div className='max-w-screen-2xl m-auto py-4'>
        <div className='flex md:flex-row flex-col gap-2 h-[400px]'>
          <HomeCategories />
          <Carousel />
          <BayanSection />
        </div>
      </div>
      <OurSellers stores={stores ?? []} />
      <OurProducts products={ourProducts ?? []} />
      {/* <BalikbayanItems />
      <NewItems /> */}
    </div>
  )
}
