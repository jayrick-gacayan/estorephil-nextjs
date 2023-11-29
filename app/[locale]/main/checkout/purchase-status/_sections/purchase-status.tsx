'use client';

import { useRouter } from 'next-intl/client';
import Image from 'next/image';
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';

export default function PurchaseStatus({ status }: { status: string; }
) {
  const router = useRouter();

  return (
    <div className='bg-[#F5F5F5]'>
      <div className='max-w-screen-2xl m-auto p-8'>
        <div className="w-[512px] block m-auto">
          <div className='flex flex-col h-[640px] items-center justify-between w-full'>
            <div className="relative flex-1 w-full">
              <Image alt='purchase-method-image-status-fg-alt'
                src='/others/purchase-status-image.svg'
                fill
                className='rounded-xl overflow-hidden' />
              <div className='relative py-6 z-10 h-full flex flex-col justify-between items-center'>
                <div className='flex-1 flex items-center'>
                  {
                    status === 'success' && <FaCircleCheck size={160} className='m-auto block text-success' />
                  }
                  {
                    status === 'fail' && <FaCircleXmark size={160} className='m-auto block text-danger' />
                  }
                </div>
                <div className='space-y-4 text-center'>
                  {
                    status !== '' &&
                    (
                      <h1 className={`${status === 'success' ? 'text-success' :
                        status === 'fail' ? 'text-danger' : ''} font-semibold text-[28px] leading-0`}>

                        {status === 'success' ? 'Success' : status === 'fail' ? 'Failed' : ''}
                      </h1>
                    )
                  }
                  <div className="text-sm">
                    Curabitur vulputate arcu odio, ac facilisis diam accumsan ut.
                    Ut imperdiet et leo in vulputate.
                    Sed eleifend lacus eu sapien sagittis imperdiet.
                    Etiam tempor mollis augue, ut tincidunt ex interdum eu.
                    Pellentesque rhoncus lectus sed posuere viverra.
                  </div>
                </div>
              </div>


            </div>
            <div className='flex-none w-full space-y-4'>
              <button onClick={() => {
                router.push('/')
              }}
                className='block p-4 rounded text-white w-full bg-warning hover:bg-warning-light'>
                CONTINUE SHOPPING
              </button>
              <button className='block p-4 rounded w-full border border-warning hover:border-warning-light'>
                VIEW ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}