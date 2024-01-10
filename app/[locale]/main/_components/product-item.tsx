import { Products } from '@/models/products';
import Image from 'next/image';
import Link from 'next-intl/link';
import Rating from '../../_components/rating';
import StarRating from '../../_components/star-rating';
import { Product } from '@/models/product';

export function ProductItem({
  product,
  withRatingEvents,
}: {
  product: any
  withRatingEvents: boolean
}) {

  return (
    <div className='w-60 bg-white border border-tertiary-dark rounded overflow-hidden space-y-4'>
      <div className=' w-full h-60 overflow-hidden'>
        <div className='transition-all delay-200 ease-in hover:scale-125 h-full'>
          <Image alt={`product-image-${product.id}`}
            src={product.image ?? `https://www.odnetwork.org/global_graphics/default-store-350x350.jpg`}
            width={240}
            height={240}
            className='w-auto h-auto' />
        </div>
      </div>
      <div className='p-2'>
        <Link href={`/products/${product.id}`}
          className='font-bold block hover:text-primary cursor-pointer'>{product.name}</Link>
        <div className='block space-x-1'>
          <div className='inline-flex relative text-left cursor-default'>
            <StarRating activeState={product.rating!} id={product.id!} withRatingEvents={false} />
          </div>
          <span className='inline-block align-top'>&#40;{product.totalRaters}&#41;</span>
        </div>

        <div className='font-bold text-primary'>
          &#8369; {product?.price?.toFixed(2)}
        </div>
      </div>
    </div>
  )
}