'use client';

import { getRefValue, useStateRef } from '@/app/_hooks/use_ref_hooks';
import { MouseEvent, useRef, useState } from 'react';
import { PointerEvent } from 'react';
import { CarouselItem } from '../_components/carousel_item';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// function getTouchEventData(
//   e:
//     | TouchEvent
//     | MouseEvent
//     | React.TouchEvent<HTMLElement>
//     | React.MouseEvent<HTMLElement>
// ) {
//   return 'changedTouches' in e ? e.changedTouches[0] : e;
// }

// const MIN_SWIPE_REQUIRED = 40;

export function Carousel() {
  const [carouselCurrentSlide, setCarouselCurrentSide] = useState<number>(0);
  const [currentDragTranslate, setCurrentDragTranslate] = useState<number>(0);
  // const containerRef = useRef<HTMLDivElement>(null);
  // const containerWidthRef = useRef(0);
  // const minOffsetXRef = useRef(0);
  // const currentOffsetXRef = useRef(0);
  // const startXRef = useRef(0);
  // const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  // const [isSwiping, setIsSwiping] = useState(false);
  // const [currentIdx, setCurrentIdx] = useState(0);

  // const onTouchMove = (e: TouchEvent | MouseEvent) => {
  //   const currentX = getTouchEventData(e).clientX;
  //   const diff = getRefValue(startXRef) - currentX;
  //   let newOffsetX = getRefValue(currentOffsetXRef) - diff;

  //   const maxOffsetX = 0;
  //   const minOffsetX = getRefValue(minOffsetXRef);

  //   if (newOffsetX > maxOffsetX) {
  //     newOffsetX = maxOffsetX;
  //   }

  //   if (newOffsetX < minOffsetX) {
  //     newOffsetX = minOffsetX;
  //   }

  //   setOffsetX(newOffsetX);
  // };
  // const onTouchEnd = () => {
  //   const currentOffsetX = getRefValue(currentOffsetXRef);
  //   const containerWidth = getRefValue(containerWidthRef);
  //   let newOffsetX = getRefValue(offsetXRef);

  //   const diff = currentOffsetX - newOffsetX;

  //   // we need to check difference in absolute/positive value (if diff is more than 40px)
  //   if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
  //     if (diff > 0) {
  //       // swipe to the right if diff is positive
  //       newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
  //     } else {
  //       // swipe to the left if diff is negative
  //       newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
  //     }
  //   } else {
  //     // remain in the current image
  //     newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
  //   }

  //   setIsSwiping(false);
  //   setOffsetX(newOffsetX);
  //   setCurrentIdx(Math.abs(newOffsetX / containerWidth));

  //   window.removeEventListener('touchend', onTouchEnd);
  //   window.removeEventListener('touchmove', onTouchMove);
  //   window.removeEventListener('mouseup', onTouchEnd);

  //   //@ts-ignore
  //   window.removeEventListener('mousemove', onTouchMove);
  // };
  // const onTouchStart = (
  //   e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  // ) => {
  //   setIsSwiping(true);

  //   currentOffsetXRef.current = getRefValue(offsetXRef);
  //   startXRef.current = getTouchEventData(e).clientX;

  //   const containerEl = getRefValue(containerRef);
  //   const containerWidth = containerEl.offsetWidth;

  //   containerWidthRef.current = containerWidth;
  //   minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

  //   window.addEventListener('touchmove', onTouchMove);
  //   window.addEventListener('touchend', onTouchEnd);
  //   //@ts-ignore
  //   window.addEventListener('mousemove', onTouchMove);
  //   window.addEventListener('mouseup', onTouchEnd);
  // };

  // const indicatorOnClick = (idx: number) => {
  //   const containerEl = getRefValue(containerRef);
  //   const containerWidth = containerEl.offsetWidth;

  //   setCurrentIdx(idx);
  //   setOffsetX(-(containerWidth * idx));
  // };

  return (
    <div className='flex-1 h-full w-full'>
      <div className='relative h-full w-full overflow-hidden'
        onMouseDown={(event: MouseEvent<HTMLDivElement>) => {
          console.log('client x', event.clientX);
          console.log('client y', event.clientY);
        }}
        onMouseMove={(event: MouseEvent<HTMLDivElement>) => {
          console.log('client x', event.clientX);
          console.log('client y', event.clientY);
        }}
        onMouseLeave={() => { }}
        onMouseUp={() => { }}
      >
        <div className='absolute top-[50%] left-[12px] z-20 text-white/100 cursor-pointer'
          onClick={() => {
            setCarouselCurrentSide((currentSlide: number) => {
              return currentSlide === 0 ? 2 : (currentSlide = currentSlide - 1);
            })
          }}>
          <FaChevronLeft className='w-6 h-6 block text-white/100' />
        </div>
        <div className='absolute top-[50%] right-[12px] z-20 text-white/100 cursor-pointer'
          onClick={() => {
            setCarouselCurrentSide((currentSlide: number) => {
              return currentSlide === 2 ? 0 : (currentSlide = currentSlide + 1);
            })
          }}>
          <FaChevronRight className='w-6 h-6 block' />
        </div>
        <div className='w-full relative h-full'
          style={{ transform: `translateX(${currentDragTranslate}%)` }}>
          <CarouselItem imgSrc='/static_images/carousel_image_two.jpg' imgAlt='carousel-img-1' index={0} currentSlide={carouselCurrentSlide} />
          <CarouselItem imgSrc='/static_images/estorephil_for_carousel.png' imgAlt='carousel-img-2' index={1} currentSlide={carouselCurrentSlide} />
          <CarouselItem imgSrc='/static_images/carousel_image_two.jpg' imgAlt='carousel-img-3' index={2} currentSlide={carouselCurrentSlide} />
        </div>
        <div className='absolute bottom-3 left-0 flex gap-2 items-center w-full justify-center'>
          {
            [0, 1, 2].map((value: number) => {
              return (
                <div key={`carousel-item-main-${value}`}
                  className={`h-1 w-6 rounded  cursor-pointer ${carouselCurrentSlide === value ? `bg-primary` : `bg-white`}`}
                  onClick={() => { setCarouselCurrentSide(value) }} />
              )
            })
          }

        </div>
      </div>
    </div>
  )
}