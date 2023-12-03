import Image from 'next/image';

export function CarouselItem({
  imgSrc,
  imgAlt,
  index,
  currentSlide,
  onPointerEvent,
}: {
  imgSrc: string;
  imgAlt: string;
  index: number;
  currentSlide: number;
  onPointerEvent: (event: any) => void;
}) {
  return (
    <div className='h-full w-full absolute transition-all duration-150 overflow-hidden select-none'
      style={{ transform: `translateX(${100 * (Math.abs(index - currentSlide))}%)` }}
      onMouseDown={onPointerEvent}
      onTouchStart={onPointerEvent}>
      <Image alt={imgAlt}
        src={imgSrc}
        fill
        sizes="100vh"
        className='object-fill pointer-events-none'
        draggable={false} />
    </div>
  )
}