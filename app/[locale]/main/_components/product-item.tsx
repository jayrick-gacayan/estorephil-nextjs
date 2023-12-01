import { Product } from '@/models/product';
import Image from 'next/image';
import Link from 'next-intl/link';
import Rating from '../../_components/rating';

export function ProductItem({
  product,
}: {
  product: Product;
}) {

  return (
    <div className='w-60 bg-white border border-neutral-200 rounded overflow-hidden cursor-pointer space-y-4'>
      <div className=' w-full h-60 overflow-hidden'>
        <div className='transition-all delay-200 ease-in hover:scale-125 h-full'>
          <Image alt={`product-image-${product.id}`}
            src={product.productImage}
            width={240}
            height={240}
            className='w-auto h-auto' />
        </div>
      </div>
      <div className='p-2'>
        <Link href={`/products/${product.id}`} className='font-bold block hover:text-primary'>{product.name}</Link>
        <div className='block space-x-1'>
          <Rating id={product.id} rating={product.rating} />
          <span className='inline-block align-top'>&#40;{product.raters}&#41;</span>
        </div>

        <div className='font-bold text-primary'>
          &#8369; {product.price.toFixed(2)}
        </div>
      </div>
    </div>
  )
}