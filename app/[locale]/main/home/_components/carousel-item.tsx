import Image from 'next/image';

export function CarouselItem({
  imgSrc,
  imgAlt,
  index,
  currentSlide,
}: {
  imgSrc: string;
  imgAlt: string;
  index: number;
  currentSlide: number;
}) {
  return (
    <div className='h-full w-full absolute transition-all duration-150'
      style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}>
      <Image alt={imgAlt} src={imgSrc} fill className='object-cover' draggable='false' />
    </div>
  )
}