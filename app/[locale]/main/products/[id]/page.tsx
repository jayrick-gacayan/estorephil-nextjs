import { FaRegHeart } from 'react-icons/fa';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';
import { ProductInformation } from './_section/product_information';
import { QuantityContainer } from './_section/quantity_container';
import { ProductPreviewImage } from './_section/product_image_preview';
import { BiCheckShield } from 'react-icons/bi';
import { RiRefund2Fill, RiShipLine } from 'react-icons/ri';
import { HiInformationCircle, HiOutlineLocationMarker } from 'react-icons/hi';
import { BreadcrumbProps } from '@/types/props/breadcrumb_props';
import { Breadcrumbs } from '../../_components/bread_crumbs';

export default function ProductPage({ params }: { params: { id: string } }) {
  let breadCrumbsItems: BreadcrumbProps[] = [
    { text: 'Home & Kitchen' },
    { text: 'Home Decor Products' },
    { link: '/home', text: 'Frying Pans' }
  ];

  return (
    <div className='bg-[#ECF0F1] p-8'>
      <div className='max-w-screen-2xl m-auto bg-white border border-secondary-light divide-y divide-secondary-light'>
        <div className='flex w-full divide-x-2 divide-secondary-light items-stretch'>
          <div className='basis-1/2 py-6 px-8 '>
            <ProductPreviewImage />
          </div>
          <div className='basis-1/2 py-6 px-16 space-y-4'>
            <Breadcrumbs breadcrumbs={breadCrumbsItems} />
            <div className='block'>
              <h3 className='font-semibold py-2 border-b border-b-tertiary text-sm overflow-hidden'>
                <div className='w-full text-ellipsis overflow-hidden h-full'>
                  Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem.
                  Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque.
                  Sed quis ultrices eros. Curabitur sit amet eros eu arcu consectetur pulvinar.
                  Aliquam sodales, turpis eget tristique tempor, sapien lacus facilisis diam, molestie efficitur sapien velit nec magna.
                </div>

              </h3>
              <div className='py-2 border-b border-b-tertiary text-sm h-32 overflow-hidden'>
                Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem.
                Maecenas a venenatis enim, quis porttitor magna. Etiam nec rhoncus neque.
                Sed quis ultrices eros. Curabitur sit amet eros eu arcu consectetur pulvinar.
                Aliquam sodales, turpis eget tristique tempor, sapien lacus facilisis diam, molestie efficitur sapien velit nec magna.
              </div>
              <div className='py-2 border-b border-b-tertiary'>
                <span className='block'>Seller</span>
                <div className='flex gap-2 items-center'>
                  <div className='flex-none w-auto'>
                    <div className='rounded-full border-2 border-primary relative h-[72px] w-[72px]'>
                      <Image alt='seller-product-info' src='/others/costco.png' fill className='rounded-full object-fill' />
                    </div>
                  </div>
                  <div>
                    <h6 className='font-semibold'>Costco</h6>
                  </div>
                </div>
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
              <h1 className='font-bold text-primary text-3xl'>C&#36; 100.00</h1>
              <div className='flex w-full gap-8'>
                <QuantityContainer />
                <div className='w-full flex justify-around gap-4'>
                  <button className='transition border border-primary duration-100 rounded-full flex-1 h-auto bg-primary text-white space-x-2 px-6 py-3 hover:bg-primary-light'>
                    <FaCartShopping className='inline-block' />
                    <span className='align-middle'>Add to Cart</span>
                  </button>
                  <button className='rounded-full w-24 h-auto bg-danger-light text-danger hover:bg-danger hover:text-white border border-danger space-x-2 px-6 py-3 text-center'>
                    <FaRegHeart className='inline-block' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductInformation />
      </div>
    </div>
  )
}