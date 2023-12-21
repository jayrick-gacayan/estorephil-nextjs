import { Store } from '@/models/store';
import Link from 'next-intl/link'
import Image from 'next/image'

export function StoreItem({
  store
}: {
  store: Store
}) {
  return (
    <div className='w-32 h-32 flex-none'>
      <Link href={`/stores/${store.id}`}
        className='block w-full h-full'>
        {
          <Image alt={`store-${store.id}`}
            src={store.mainImageUrl!}
            width={128}
            height={128}
            className='w-full h-full'
          />
        }
      </Link>
    </div>
  )
}