import { Seller } from '@/models/seller';
import Image from 'next/image';
import Link from 'next-intl/link';

export function Store({ store }: { store: any }) {
  return (
    <div className="w-32 h-32 flex-none">
      <Link href={`/stores/${store.id}`}
        className='block w-full h-full'>
        {
          <Image alt={`store-${store.id}`}
            src={store.main_image_url}
            width={128}
            height={128}
            className='w-full h-full'
          />
        }
      </Link>
    </div>
  )
}