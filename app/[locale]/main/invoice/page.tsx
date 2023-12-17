import { FaCcVisa } from 'react-icons/fa6';
import { IoAirplaneSharp } from 'react-icons/io5';
import PersonTransactionInfo from './_components/person-transaction-info';
import { Order } from '@/models/order';
import OrderByStore from './_components/orders-by-store';
import { OrderDetail } from '@/models/order-detail';
import OrderDetailsRow from './_components/order-details-row';
import Image from 'next/image';

export default async function Page() {
  let orders = await (await import('@/app/_data/orders.json')).default.orders;

  return (
    <div className='bg-default p-8 text-default-dark'>
      <div className='max-w-screen-2xl m-auto space-y-8'>
        <div className='border border-secondary-light rounded overflow-hidden'>
          <div className='bg-white p-6 space-y-6'>
            <div className='flex items-center justify-center gap-1'>
              <div className='flex-1'>
                <div className='flex gap-6 justify-center items-center'>
                  <div className='flex-none w-auto'>
                    <Image alt='agent-profile-pic'
                      src='/others/agent_face.png'
                      width={96}
                      height={96}
                      className='w-24 h-24 block' />
                    <span className='block text-center font-semibold'>Agent</span>
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-semibold'>Non pulvinar</h3>
                    <div>403-534-2342</div>
                    <div>3482 Port Washington Road Arrowwood Alberta T0L 0B0</div>
                  </div>
                </div>
              </div>
              <div className='flex-none w-auto'>
                <div className='rounded border-2 px-8 font-bold py-2 border-danger text-[28px] leading-0 text-danger'>
                  PENDING
                </div>
              </div>
            </div>
            <hr className='bg-primary-dark h-[6px]' />
            <div className='flex gap-2 items-stretch'>
              <div className='rounded border border-secondary-light p-2 space-y-4 w-full'>
                <h4 className='font-semibold'>ORDER INFO</h4>
                <table className='table-auto'>
                  <tbody>
                    <tr>
                      <td className='px-1'>STORE NAME</td>
                      <td className='px-1 font-semibold'>ONLINE STORE PH</td>
                    </tr>
                    <tr>
                      <td className='px-1'>DATE ORDERED</td>
                      <td className='px-1 font-semibold'>5/25/2022</td>
                    </tr>
                    <tr>
                      <td className='px-1'>TRANSACTION NO.</td>
                      <td className='px-1 font-semibold text-danger'>192838488282828</td>
                    </tr>
                    <tr>
                      <td className='px-1'>ITEMS</td>
                      <td className='px-1 font-semibold'>4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='rounded border border-secondary-light p-2 space-y-4 w-full'>
                <PersonTransactionInfo headerText='BILLING'
                  name='Martha Chavez'
                  phoneNumber='403-534-2342'
                  address='3482 Port Washington Road Arrowwood Alberta T0L 0B0'
                  email='Martha.chavez@gmail.com' />
                <div className='space-y-1'>
                  <h4 className='font-semibold'>PAYMENT METHOD</h4>
                  <div className='block text-sm space-x-1'>
                    <FaCcVisa size={24} className='inline-block align-center' />
                    <span className='inline-block'>****4232</span>
                  </div>
                </div>
              </div>
              <div className='rounded border border-secondary-light p-2 space-y-2 w-full'>
                <PersonTransactionInfo headerText='RECEIVER'
                  name='Rebecca Chavez'
                  phoneNumber='0932 123 4567'
                  address='253 M.L. Quezon Street Santo Niño Tukuran 7019 Zamboanga del Sur Philippines'
                  email='Martha.chavez@gmail.com' />
                <div className='space-y-1'>
                  <h4 className='font-semibold'>DELIVERY METHOD</h4>
                  <div className='w-fit block text-sm space-x-2 rounded bg-primary text-white py-1 px-2'>
                    <IoAirplaneSharp size={24} className='inline-block' />
                    <span className='inline-block align-middle'>Air Cargo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='font-[500]'>
              ITEMS &#40;{orders.reduce((prev: number, current: Order, index: number) => {
                return prev + current.orderDetails!.length;
              }, 0)}&#41;
            </div>
            <div className='space-y-6'>
              {
                orders.map((order: Order) => {
                  return (
                    <OrderByStore key={`order-by-store-container-${order.id}`} orderNo={order.id}
                      seller={order.seller!}>
                      <div className='p-2 divide-y divide-secondary-light'>
                        {
                          order.orderDetails!.map((orderDetail: OrderDetail) => {
                            return (
                              <OrderDetailsRow key={`order-details-${orderDetail.orderNo}-${orderDetail.product.id}`} orderDetail={orderDetail} />
                            )
                          })
                        }
                      </div>
                    </OrderByStore>
                  )
                })
              }
            </div>
          </div>
          <div className='bg-tertiary-dark p-8'>
            <div className='block w-96 ml-auto'>
              <div className='text-tertiary space-y-2'>
                <div className='space-y-2 pb-2 border-b border-tertiary'>

                  <div className='flex'>
                    <div className='flex-1'>SUBTOTAL</div>
                    <div className='flex-none w-auto'>
                      C&#36; <span className='text-default-dark'>{(228).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='flex-1'>SALES TAX</div>
                    <div className='flex-none w-auto'>
                      C&#36; <span className='text-default-dark'>{(25).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className='space-y-2 py-2 border-b border-tertiary'>
                  <div>SHIPPING &#38; HANDLING</div>
                  <div className='space-y-2 pl-2 pb-2'>
                    <div className='flex'>
                      <div className='flex-1'>No. of Boxes</div>
                      <div className='flex-none w-auto'>
                        <span>2</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex-1'>Unit Cost: Box 1</div>
                      <div className='flex-none w-auto'>
                        C&#36; <span>{(25).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex-1'>Unit Cost: Box 2</div>
                      <div className='flex-none w-auto'>
                        C&#36; <span>{(25).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='flex-1'>S&#38;H Tax</div>
                      <div className='flex-none w-auto'>4&#37;</div>
                    </div>
                    <div className='flex'>
                      <div className='flex-1'>Total Shipping Cost</div>
                      <div className='flex-none w-auto'>
                        C&#36; <span>{(25).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pb-2 border-b border-tertiary'>
                  <div className='flex'>
                    <div className='flex-1'>PH</div>
                    <div className='flex-none w-auto'>
                      <span>10&#37;</span>
                    </div>
                  </div>
                </div>
                <div className='pb-2'>
                  <div className='flex items-center'>
                    <div className='flex-1'>TOTAL</div>
                    <div className='flex-none w-auto text-[20px]'>
                      C&#36; <span>{(1025).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-2/5 m-auto block space-y-4'>
          <button className='block p-4 rounded text-white w-full bg-warning hover:bg-warning-light'>
            PRINT RECEIPT
          </button>
          <button className='block p-4 rounded w-full border border-warning hover:border-warning-light'>
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
}
