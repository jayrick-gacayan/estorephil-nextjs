import { Product } from '@/models/product';
import Image from 'next/image';
import Link from 'next-intl/link'; import { FaRegStar, FaStar } from 'react-icons/fa6';
0

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
        <div className='block space-x-1'>
          <div className='inline-flex relative cursor-pointer align-middle'>
            {
              [...new Array(5)].map((value: any, index: number) => {

                const activeState = product.rating;
                const showEmptyIcon = activeState < (index + 1);
                console.log('dsfjsdfd', index, activeState, showEmptyIcon, product.rating)

                const isActiveRating = activeState !== 1;
                const isRatingWithPrecision = activeState % 1 !== 0;
                const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
                const showRatingWithPrecision = isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;
                return (
                  <div key={`product-${product.id}-${index}`}
                    className='relative cursor-pointer inline text-[#FAD115]'>
                    <div className={`absolute overflow-hidden z-10`}
                      style={{ width: showRatingWithPrecision ? `${(activeState % 1) * 100}%` : `0%` }}>
                      <FaStar />
                    </div>
                    <div className={`relative`}>
                      {showEmptyIcon ? <FaRegStar /> : <FaStar />}
                    </div>
                  </div>
                )
              })
            }

            {/* <div className='block absolute z-10 top-0 left-0 overflow-hidden'>
              {
                Array.from({ length: 5 }, (_value, index: number) => {
                  return index + 1;
                }).map((value: number) => {
                  return <FaStar className="inline align-middle"
                    style={{
                      width: rating
                    }} />
                })
              }
            </div> */}
            {/* <div className='relative flex top-0 left-0 text-[20px] overflow-hidden text-[#FAD115] z-10'
              style={{ width: Math.round((product.rating / 5) * 80) }}>
              {
                Array.from({ length: 5 }, (_value, index: number) => {
                  return index + 1;
                }).map((value: number) => {
                  return <FaStar size={24} className="inline" />
                })
              }
            </div> */}
          </div>
          <span className='inline-block align-middle'>&#40;{product.raters}&#41;</span>
        </div>

        <div className='font-bold text-primary'>
          &#8369; {product.price.toFixed(2)}
        </div>
      </div>
    </Link>
  )
}