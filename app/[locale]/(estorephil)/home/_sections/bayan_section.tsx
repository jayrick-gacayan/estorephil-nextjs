import Image from 'next/image';

export function BayanSection() {
  return (
    <div className='lg:block hidden w-64 flex-none space-y-2'>
      {
        ['balikbayan', 'alisbayan', 'shopnow'].map((value: string) => {
          return (
            <Image key={`${value}-image`} alt={`${value}-image`}
              src={`/static_images/${value}.png`}
              width={256}
              height={112}
              className='w-64 h-28' />
          )
        })
      }
    </div>
  )
}