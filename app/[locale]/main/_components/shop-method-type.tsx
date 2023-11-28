import Image from 'next/image';

export default function PurchaseMethodType({
  purchaseMethodType,
  otherText,
  purchaseMethodImage,
  purchaseMethodActiveClass,
  onShoppingMethodSet,
}: {
  purchaseMethodType: string;
  otherText: string;
  purchaseMethodImage: string;
  purchaseMethodActiveClass: (purchaseMethodType: string) => string;
  onShoppingMethodSet: (purchaseMethodType: string) => void;
}): JSX.Element {

  return (
    <div className={`cursor-pointer hover:bg-primary transition-all duration-75 ${purchaseMethodActiveClass(purchaseMethodType)} w-48 space-y-8 h-full p-4`}
      onClick={() => { onShoppingMethodSet && onShoppingMethodSet(purchaseMethodType); }}>
      <Image alt={`${purchaseMethodImage}-shopping-method`}
        src={`/others/${purchaseMethodImage}`}
        width={96}
        height={96}
        className='w-24 flex-none h-24 m-auto block' />
      <div>
        <h4 className='font-semibold'>{purchaseMethodType}</h4>
        <span className='block text-sm'>{otherText}</span>
      </div>

    </div>
  )
}