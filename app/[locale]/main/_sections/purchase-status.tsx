export default function PurchaseStatus({ status }: { status: string; }
) {
  return (
    <div className='max-w-screen-2xl m-auto p-8'>
      <div className='flex items-center justify-center'>
        <div className='flex-none w-auto text-center space-y-4'>
          <div className='w-72 h-72 relative m-auto block'>
            {/* <Image alt='empty-shop-method-alt'
              src='/others/shop_method_empty.svg'
              fill />
            <Image alt={`empty-method-${purchaseMethod}`}
              src={`/others/${purchaseMethod === 'Shopping Cart' ? `custom_cart` : `balik_box`}_icon.svg`}
              fill
              className='z-10' /> */}
          </div>
          {
            status !== '' &&
            (
              <h1 className={`${status === 'sucesss' ? 'text-success' :
                status === 'fail' ? 'text-danger' : ''} font-semibold text-[28px] leading-0`}>

                {status === 'success' ? 'Success' : status === 'fail' ? 'Failed' : ''}
              </h1>
            )
          }
          <div>Curabitur vulputate arcu odio, ac facilisis diam accumsan ut.
            Ut imperdiet et leo in vulputate.
            Sed eleifend lacus eu sapien sagittis imperdiet.
            Etiam tempor mollis augue, ut tincidunt ex interdum eu.
            Pellentesque rhoncus lectus sed posuere viverra.
            Vestibulum id turpis lectus.
            Donec rhoncus quis elit sed fermentum.
            Nullam sit amet ex enim. Fusce nec suscipit nulla.
            Maecenas porta mi vestibulum, lobortis est ac, hendrerit dui.
            Pellentesque auctor id enim sit amet molestie.
          </div>
          <button className='block p-4 rounded text-white w-full bg-warning hover:bg-warning-light'>
            CONTINUE SHOPPING
          </button>
          <button className='block p-4 rounded w-full border border-warning hover:border-warning-light'>
            VIEW ORDER
          </button>
        </div>
      </div>
    </div>
  )
}