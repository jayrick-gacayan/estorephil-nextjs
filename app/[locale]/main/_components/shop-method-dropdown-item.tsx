import { Products } from '@/models/products';
import Image from 'next/image';
import { FaRegTrashCan } from 'react-icons/fa6';

export default function ShopMethodDropdownItem(props: any & { onDelete: () => void }) {
  return (
    <div className='flex gap-2 items-center p-2 border-b border-b-secondary-light justify-between w-full'>
      <div className='relative flex-none w-12 h-12 rounded overflow-hidden'>
        <Image alt={`shop-method-name-${props.name}-${props.id}`} src={props.image_url} fill className='object-cover' />
      </div>
      <div className='text-black flex justify-around gap-4'>
        <div>{props.name}</div>
        <div className='flex-none text-black'>{props.price.toFixed(2)}</div>
      </div>
      <div className='flex-none text-black'>{props.quantity}</div>
      <div className='flex-none'>
        <FaRegTrashCan className='text-danger cursor-pointer' size={24} onClick={props.onDelete} />
      </div>
    </div>
  )
}