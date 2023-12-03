import Image from 'next/image';
import { ProductInformation } from './_section/product-information';
import { ProductPreviewImage } from './_section/product-image-preview';
import { BiCheckShield } from 'react-icons/bi';
import { RiRefund2Fill, RiShipLine } from 'react-icons/ri';
import { HiInformationCircle } from 'react-icons/hi';
import { BreadcrumbProps } from '@/types/props/breadcrumb-props';
import { Breadcrumbs } from '../../_components/bread-crumbs';
import { Product } from '@/models/product';
import { notFound } from 'next/navigation';
import ProductButtonsContainer from './_section/product-buttons-container';
import Link from 'next-intl/link';
import { FaCalendarAlt } from 'react-icons/fa';

export async function generateStaticParams() {
  let products = (await import('@/app/_data/product.json')).default;

  return products.products.map((product: Product) => {
    return { id: product.id.toString() }
  });
}

export default async function ProductPage({ params }: { params: { id: string } }) {

  let product = (await import('@/app/_data/product.json')).default.products.find((product: Product) => {
    return product.id.toString() === params.id;
  });

  if (!product) {
    notFound();
  }


  let breadCrumbsItems: BreadcrumbProps[] = [
    { text: 'Home & Kitchen' },
    { text: 'Home Decor Products' },
    { link: '/home', text: product.category }
  ];

  return (
    <div className='bg-default p-8'>
      <div className='max-w-screen-2xl m-auto bg-white border border-secondary-light divide-y divide-secondary-light'>
        <div className='flex w-full divide-x-2 divide-secondary-light items-stretch'>
          <div className='basis-1/2 py-6 px-8 '>
            <ProductPreviewImage productImage={product.productImage} />
          </div>
          <div className='basis-1/2 py-6 px-16 space-y-4'>
            <Breadcrumbs breadcrumbs={breadCrumbsItems} />
            <div className='block'>
              <h3 className='font-semibold py-2 border-b border-b-tertiary'>
                <div className='w-full text-ellipsis overflow-hidden h-full text-3xl'>
                  {product.name}
                </div>
              </h3>
              <div className='py-2 border-b border-b-tertiary text-sm'>
                {product.description}
              </div>
              <div className='py-2 border-b border-b-tertiary'>
                <span className='block'>Seller</span>
                <Link href={`/stores/${product.seller.id}`}
                  className='group/store flex gap-2 items-center'>
                  <div className='flex-none w-auto'>
                    <div className='rounded-full border-2 border-primary relative h-[56px] w-[56px]'>
                      <Image alt='seller-product-info' src={product.seller.image} fill className='rounded-full object-fill' />
                    </div>
                  </div>
                  <div>
                    <h6 className='transition-all duration-100 font-semibold group-hover/store:text-primary'>{product.seller.name}</h6>
                  </div>
                </Link>
              </div>
              <div className='flex py-2 border-b border-b-tertiary text-sm'>
                <div className='w-full'>
                  <div className='flex items-center justify-center gap-8'>
                    <div className='w-full'>
                      <div className='flex gap-x-1.5'>
                        <div className='flex-none'>
                          <RiRefund2Fill size={64} className='inline-block text-success' />
                        </div>
                        <div className='flex-1 space-y-1'>
                          <h6 className='font-bold'>Refund Guarantee</h6>
                          <div>
                            Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
                            Ut sit amet erat nec nibh rhoncus varius in non lorem.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full'>
                      <div className='flex gap-x-1.5'>
                        <div className='flex-none'>
                          <BiCheckShield size={64} className='inline-block text-success' />
                        </div>
                        <div className='flex-1 space-y-1'>
                          <h6 className='font-bold'>Warranty Available</h6>
                          <div>
                            Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
                            Ut sit amet erat nec nibh rhoncus varius in non lorem.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex py-2 border-b border-b-tertiary text-sm'>
                <div className='w-full'>
                  <div className='flex items-center justify-center gap-8'>
                    <div className='w-full'>
                      <div className='flex gap-1.5 flex-col'>
                        <div className='w-full'>
                          <div className='flex gap-2 items-center w-[200px]'>
                            <div className='flex-1 space-x-2'>
                              <RiShipLine size={24} className='inline-block' />
                              <span className='align-middle'>Ships from Canada</span>
                            </div>
                            <div className='flex-none w-auto'>
                              <HiInformationCircle size={24} className='inline-block align-middle' />
                            </div>
                          </div>
                        </div>
                        <div className='w-full'>
                          <div className='flex gap-2 items-center w-[200px]'>
                            <div className='flex-1 space-x-2'>
                              <FaCalendarAlt size={24} className='inline-block' />
                              <span className='align-middle'>July 25-30, 2022</span>
                            </div>
                            <div className='flex-none w-auto'>
                              <HiInformationCircle size={24} className='inline-block align-middle' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full'>
                      <div className='flex gap-x-1.5'>
                        <div className='flex-none'>
                          <Image alt='map-marker-image'
                            src='/others/marker.svg'
                            width={64}
                            height={64}
                            className='inline-block w-16 h-16' />
                        </div>
                        <div className='flex-1 space-y-1'>
                          <h6 className='font-bold'>Deliverable Locations</h6>
                          <div>Caloocan, Las Pinas, Makati, Malabon, Mandaluyong, Cebu, Davao, 25+ more...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full space-y-2'>
              <h1 className='font-bold text-primary text-3xl'>C&#36; {product.price.toFixed(2)}</h1>
              <ProductButtonsContainer product={product} seller={product.seller!} />
            </div>
          </div>
        </div>
        <ProductInformation />
      </div>
    </div>
  )
}