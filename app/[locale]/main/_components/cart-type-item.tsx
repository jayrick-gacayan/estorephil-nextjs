import Image from 'next/image';

export default function CartTypeItem({
  cartType,
  otherText,
  cartTypeImage,
  cartTypeActiveClass,
  onCartTypeSet,
}: {
  cartType: string;
  otherText: string;
  cartTypeImage: string;
  cartTypeActiveClass: (cartType: string) => string;
  onCartTypeSet: (cartType: string) => void;
}): JSX.Element {

  return (
    <div className={`transition-all duration-75 ${cartTypeActiveClass(cartType)} w-48 space-y-8 h-full p-4`}
      onClick={() => { onCartTypeSet(cartType); }}>
      <Image alt={`${cartTypeImage}-shopping-method`}
        src={`/others/${cartTypeImage}`}
        width={96}
        height={96}
        className='w-24 flex-none h-24 m-auto block' />
      <div>
        <h4 className='font-semibold'>{cartType}</h4>
        <span className='block text-sm'>{otherText}</span>
      </div>

    </div>
  )
}