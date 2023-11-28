import { Seller } from '@/models/seller';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Product } from '@/models/product';
import CustomInputField from '@/app/[locale]/_components/custom-input-field';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import SelectProductPriceRange from './_sections/select-product-price-range';
import Link from 'next-intl/link';
import StoreProducts from './_sections/store-products';

export async function generateStaticParams() {
  let sellers = (await import('@/app/_data/seller.json')).default;

  return sellers.sellers.map((seller: Seller) => {
    return { id: seller.id.toString() }
  });
}

export default async function Page({ params }: { params: { id: string } }) {
  let seller = (await import('@/app/_data/seller.json')).default.sellers.find((seller: Seller) => {
    return seller.id.toString() === params.id;
  });

  let products: Product[] = [];

  if (!seller) {
    notFound();
  }
  else {
    products = (await import('@/app/_data/product.json')).default.products.filter((product: Product) => {
      return seller?.id === product.seller?.id;
    })
  }

  return (
    <>
      <div className='relative h-48 flex'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <Image alt='alt-banner-store-image'
            src='/others/banner_image.jpg'
            fill
            className='object-fill' />
        </div>
        <div className='relative z-10 h-full w-full py-4'>
          <div className='bg-white w-full h-full' style={{ clipPath: 'polygon(0 0, 35% 0, 30% 100%, 0% 100%)' }}>
            <div className='max-w-screen-2xl m-auto h-full'>
              <div className='py-2 h-full'>
                <div className='flex w-fit gap-4 h-full'>
                  <div className='flex-none w-32 h-full relative'>
                    <Image alt={`store-image-alt-${seller.id}`}
                      src={seller.sellerImage}
                      fill
                      className='z-10' />
                  </div>
                  <div className='flex-none flex w-fit h-full flex-col justify-between'>
                    <div className='flex-1'>
                      <h3 className='p-0.5 font-semibold text-[24px] leading-0'>{seller.name}</h3>
                      <div className='text-tertiary text-sm'>{products.length === 0 ? 'No Product/s yet.' : `${products.length} Products`}</div>
                      <div className='text-tertiary text-sm'>{(20241).toLocaleString()} Sales</div>
                    </div>
                    <div className='flex-none w-auto'>
                      <button className='w-auto py-2 px-6 border border-danger text-danger'>FOLLOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-8'>
        <div className='max-w-screen-2xl m-auto'>
          <div className='flex w-fit text-center text-[14px] leading-0'>
            <div className='flex-none w-auto'>
              <Link href={'/'}
                className='border-b-2 border-b-primary block'>
                <div className='px-6 py-2 text-primary'>
                  Featured Products
                </div>
              </Link>
            </div>
            <div className='flex-none w-auto'>
              <Link href={'/'}
                className='border-b-2 border-b-transparent block hover:border-b-primary'>
                <div className='px-6 py-2 hover:text-primary'>
                  All Products
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-tertiary-light'>
        <div className='p-8'>
          <div className='max-w-screen-2xl m-auto space-y-4'>
            <div className='flex justify-between items-center gap-2'>
              <div className='flex-none md:w-[512px] w-full'>
                <CustomInputField leftIcon={<FaMagnifyingGlass />} />
              </div>
              <SelectProductPriceRange />
            </div>
            {products.length > 0 ? (<StoreProducts products={products} />) :
              (<div className='text-center text-[56px] font-semibold'>
                No Product/s Yet.
              </div>)}
          </div>
        </div>
      </div>
    </>
  )
}