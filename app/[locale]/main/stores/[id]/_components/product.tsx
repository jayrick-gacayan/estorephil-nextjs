import Image from 'next/image';
import Link from 'next-intl/link';

export default function Product({
    product,
    withRatingEvents,
}: {
    product: any;
    withRatingEvents?: boolean;
}) {
    return (
        <div className='w-60 bg-white border border-neutral-200 rounded overflow-hidden space-y-4'>
            <div className=' w-full h-60 overflow-hidden'>
                <div className='transition-all delay-200 ease-in hover:scale-125 h-full'>
                    <Image alt={`product-image-${product.id}`}
                        src={product.main_image_url}
                        width={240}
                        height={240}
                        className='w-auto h-auto' />
                </div>
            </div>
            <div className='p-2 border-t-2 border-gray-200'>
                <Link href={`/products/${product.id}`}
                    className='font-bold block hover:text-primary cursor-pointer'>{product.name}
                </Link>
                {/* <div className='block space-x-1'>
                    <Rating id={product.id} rating={product.rating} withRatingEvents={withRatingEvents} />
                    <span className='inline-block align-top'>&#40;{product.raters}&#41;</span>
                </div> */}

                <div className='font-bold text-primary'>
                    &#8369; {product.price}
                </div>
            </div>
        </div>
    )
}