import { Product } from '@/models/product';
import Image from 'next/image';
import Link from 'next-intl/link';

export function ProductItem({
  product,
}: {
  product: Product;
}) {

  return (
    <Link href={`/products/${product.id}`}
      className='w-60 bg-white border border-neutral-200 rounded overflow-hidden cursor-pointer space-y-4'>
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
        <div className='font-bold'>{product.name}</div>
        <div className='block space-x-2'>
          <div className='w-20 inline-block relative'>
            <div className='relative z-0 block text-[20px] leading-0'>
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <div className='absolute flex top-0 left-0 text-[20px] overflow-hidden text-[#FAD115] z-10'
              style={{ width: Math.round((product.rating / 5) * 80) }}>
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
          </div>
          <span className='inline-block'>&#40;{product.raters}&#41;</span>
        </div>
        <div className='font-bold text-primary'>
          &#8369; {product.price.toFixed(2)}
        </div>
      </div>
    </Link>
  )
}