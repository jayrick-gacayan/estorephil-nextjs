import { Product } from '@/models/product';
import { ShopMethod } from '@/models/shop-method';
import Image from 'next/image';
import { FaRegTrashCan } from 'react-icons/fa6';

export default function ShopMethodDropdownItem(props: Product & { onDelete: () => void }) {
  return (
    <div className='flex gap-2 items-center p-2 border-b border-b-secondary-light'>
      <div className='relative flex-none w-12 h-12 rounded overflow-hidden'>
        <Image alt={`shop-method-name-${props.name}-${props.id}`} src={props.productImage} fill className='object-cover' />
      </div>
      <div className=''>
        {props.name}
      </div>
      <div className='flex-none'>{props.price.toFixed(2)}</div>
      <div className='flex-none'>
        <FaRegTrashCan className='text-danger w-6 h-6 cursor-pointer' sizes={25} onClick={props.onDelete} />
      </div>
    </div>
  )
}