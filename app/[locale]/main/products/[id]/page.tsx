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
    <div className='bg-[#ECF0F1] p-8'>
      <div className='max-w-screen-2xl m-auto bg-white border border-secondary-light divide-y divide-secondary-light'>
        <div className='flex w-full divide-x-2 divide-secondary-light items-stretch'>
          <div className='basis-1/2 py-6 px-8 '>
            <ProductPreviewImage productImage={product.productImage} />
          </div>
          <div className='basis-1/2 py-6 px-16 space-y-4'>
            <Breadcrumbs breadcrumbs={breadCrumbsItems} />
            <div className='block'>
              <h3 className='font-semibold py-2 border-b border-b-tertiary'>
                <div className='w-full text-ellipsis overflow-hidden h-full'>
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
                    <div className='rounded-full border-2 border-primary relative h-[72px] w-[72px]'>
                      <Image alt='seller-product-info' src={product.seller.sellerImage} fill className='rounded-full object-fill' />
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
                          <RiRefund2Fill className='inline-block text-success w-16 h-16' />
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
                          <BiCheckShield className='inline-block text-success w-16 h-16' />
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
                  </div>
                </div>

              </div>
              <div className='py-2 border-b border-b-tertiary'>
                <div className='flex text-sm items-center'>
                  <div className='space-y-2 basis-1/2'>
                    <div className='space-x-4'>
                      <RiShipLine className='inline-block' />
                      <div className='inline-block space-x-2 align-middle'>
                        <span>Ships from Canada</span>
                        <HiInformationCircle className='inline-block align-middle' />
                      </div>
                    </div>
                    <div className='space-x-4'>
                      <RiShipLine className='inline-block' />
                      <div className='inline-block space-x-2 align-middle'>
                        <span>July 25-30, 2022</span>
                        <HiInformationCircle className='inline-block align-middle' />
                      </div>
                    </div>
                  </div>
                  <div className='basis-1/2'>
                    <div className='flex gap-x-1 items-center'>
                      <div className='flex-none'>
                        <Image alt='map-marker-image'
                          src='/others/map_marker.png'
                          width={48}
                          height={64}
                          className='inline-block w-16 h-16' />

                      </div>
                      <div className='flex-1 space-y-1'>
                        <h6 className='font-bold space-x-2'>
                          <span className='align-middle'>Deliverable Locations</span>
                          <HiInformationCircle className='inline-block' />
                        </h6>
                        <div>
                          Caloocan, Las Pinas, Makati, Malabon, Mandaluyong, Cebu, Davao, 25+ more...
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