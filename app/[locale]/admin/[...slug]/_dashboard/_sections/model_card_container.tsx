import { FaUsers, FaWarehouse } from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io';
import { AdminModelCard } from '../../_components/model_card';

export function ModelCardContainer() {
  return (
    <div className='flex lg:flex-row flex-col gap-4 mb-4'>
      <AdminModelCard text='sellers'
        icon={<FaWarehouse className='w-12 h-12 block m-auto' />}
        bgColor={'bg-blue-500'}
        count={4} />
      <AdminModelCard text='products'
        icon={<FaWarehouse className='w-12 h-12 block m-auto' />}
        bgColor={'bg-indigo-500'}
        count={6} />
      <AdminModelCard text='users'
        icon={<FaUsers className='w-12 h-12 block m-auto' />}
        bgColor={'bg-green-500'}
        count={4} />
      <AdminModelCard text='total orders'
        icon={<IoIosChatbubbles className='w-12 h-12 block m-auto' />}
        bgColor={'bg-orange-500'}
        count={4} />
    </div>
  )
}