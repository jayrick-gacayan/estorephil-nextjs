import { OurSellers } from './_sections/our-sellers';
import { Carousel } from './_sections/carousel';
import { HomeCategories } from './_sections/home-categories';
import { BayanSection } from './_sections/bayan-section';
import BalikbayanItems from './_sections/balikbayan-items';
import NewItems from './_sections/new-items';

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <div className='bg-default px-8'>
      <div className='max-w-screen-2xl m-auto py-4'>
        <div className='flex md:flex-row flex-col gap-2 h-[400px]'>
          <HomeCategories />
          <Carousel />
          <BayanSection />
        </div>
      </div>
      <OurSellers />
      <BalikbayanItems />
      <NewItems />
    </div>
  )
}
