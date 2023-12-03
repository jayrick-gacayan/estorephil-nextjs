import Image from 'next/image';

export function BayanSection() {
  return (
    <div className='lg:block hidden w-64 flex-none'>
      <div className='flex flex-col gap-2 w-full h-full'>
        {
          ['balikbayan', 'alisbayan', 'shopnow'].map((value: string) => {
            return (
              <div key={`${value}-image`} className='w-full relative h-full'>
                <Image alt={`${value}-image`}
                  src={`/static_images/${value}.png`}
                  fill
                  sizes="100vh"
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}