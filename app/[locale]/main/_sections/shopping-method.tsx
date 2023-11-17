import Image from 'next/image';

export default function ShoppingMethod() {
  return (
    <div className="py-8 space-y-3 w-[512px] h-[448px] m-auto">
      <div className="flex justify-around items-center flex-col h-full w-full text-center">
        <h3 className="text-primary text-[32px] leading-0">Choose a Shopping Method</h3>
        <div className="flex items-center h-48">
          <div className="bg-primary-dark w-48 text-white space-y-8 h-full p-4">
            <Image alt='shopping-cart-method'
              src='/others/custom_cart_icon.png'
              width={96}
              height={96}
              className='w-24 flex-none h-24 m-auto block' />
            <div>
              <h4 className='font-semibold'>Shopping Cart</h4>
              <span className='block text-sm'>Shop by Product</span>
            </div>
          </div>
          <div className="bg-primary-light w-48 space-y-8 h-full p-4">
            <Image alt='shopping-cart-method'
              src='/others/custom_cart_icon.png'
              width={96}
              height={96}
              className='w-24 flex-none h-24 m-auto block' />
            <div>
              <h4 className='font-semibold'>Balikbayan Box</h4>
              <span className='block text-sm'>Select your Box Type</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 w-full">
          <button className='w-full p-3 rounded bg-warning hover:bg-warning-light text-white'
            onClick={() => {
              // dispatch(onModalProductDeliveryAddressOpened(''));

              // setTimeout(() => {
              //   dispatch(onModalProductDeliveryAddressOpened('changeAddress'));
              // }, 1000)
            }}>
            Next
          </button>
          <button className='w-full p-3 rounded bg-transparent underline font-[500] hover:no-underline'>
            Back
          </button>
        </div>
      </div>
    </div>
  )
}