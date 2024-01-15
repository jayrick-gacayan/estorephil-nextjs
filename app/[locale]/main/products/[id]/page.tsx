import Image from 'next/image';
import { ProductInformation } from './_section/product-information';
import { ProductPreviewImage } from './_section/product-image-preview';
import { BiCheckShield } from 'react-icons/bi';
import { RiRefund2Fill, RiShipLine } from 'react-icons/ri';
import { HiInformationCircle } from 'react-icons/hi';
import { BreadcrumbProps } from '@/types/props/breadcrumb-props';
import { Breadcrumbs } from '../../_components/bread-crumbs';
import { Products } from '@/models/products';
import { notFound } from 'next/navigation';
import ProductButtonsContainer from './_section/product-buttons-container';
import Link from 'next-intl/link';
import { FaCalendarAlt } from 'react-icons/fa';
import ProductGallery from './_section/gallery';
import Gallery from './_section/gallery';
import Details from './_section/details';
import Provider from './_section/provider';

export async function generateStaticParams() {
  let products = (await import('@/app/_data/product.json')).default;

  return products.products.map((product: Products) => {
    return { id: product.id.toString() }
  });
}

export default async function Page({ params }: { params: { id: string } }) {

  // let product = (await import('@/app/_data/product.json')).default.products.find((product: Product) => {
  //   return product.id.toString() === params.id;
  // });

  // if (!product) {
  //   notFound();
  // }

  return (
    <Provider id={params.id}>
      <div className='bg-default p-8'>
        <div className='max-w-screen-2xl m-auto bg-white border border-secondary-light divide-y divide-secondary-light'>
          <div className='flex w-full divide-x-2 divide-secondary-light items-stretch'>
            <Gallery />
            <Details />
          </div>
          <ProductInformation />
        </div>
      </div>
    </Provider>
  )
}