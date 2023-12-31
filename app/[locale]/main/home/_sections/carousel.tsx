'use client';

import { useEffect, useRef, useState, MouseEvent, TouchEvent, useCallback } from 'react';
import { CarouselItem } from '../_components/carousel-item';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { CarouselItemProps } from '@/types/props/carousel-item-props';

const carouselItems: CarouselItemProps[] = [
  { index: 0, image: '/static_images/carousel_image_one.jpg' },
  { index: 1, image: '/static_images/carousel_image_two.png' },
  { index: 2, image: '/static_images/carousel_image_three.jpg' },
  { index: 3, image: '/static_images/carousel_image_four.jpg' },
  { index: 4, image: '/static_images/carousel_image_five.png' }
]

export function Carousel() {
  const carouselIntervalRef = useRef<any>(null);
  const [carouselCurrentSlide, setCarouselCurrentSide] = useState<number>(0);

  const carouselMoveToRight = useCallback(() => {
    setCarouselCurrentSide(carouselCurrentSlide === (carouselItems.length - 1) ? 0 : carouselCurrentSlide + 1)
  }, [setCarouselCurrentSide, carouselCurrentSlide]);

  const carouselMoveToLeft = useCallback(() => {
    setCarouselCurrentSide(carouselCurrentSlide === 0 ? (carouselItems.length - 1) : carouselCurrentSlide - 1);
  }, [setCarouselCurrentSide, carouselCurrentSlide])

  const clearCarouselInterval = useCallback(() => {
    clearInterval(carouselIntervalRef.current)
    carouselIntervalRef.current = null;
  }, [carouselIntervalRef])

  useEffect(() => {
    carouselIntervalRef.current = setInterval(() => {
      carouselMoveToRight();
    }, 3000);

    return () => {
      clearCarouselInterval();
    }
  }, [carouselMoveToRight, clearCarouselInterval]);


  function handlePointerEvent(event: MouseEvent | TouchEvent) {
    clearCarouselInterval();

    const card = event.target as HTMLDivElement;
    let offset = 0;
    const isTouchEvent = event.type === "touchstart";

    const initialX = isTouchEvent ? (event as TouchEvent).touches[0].clientX : (event as MouseEvent).clientX;

    document.addEventListener('mousemove', onPointerMove as (moveEvent: any) => void);
    document.addEventListener('mouseup', onPointerEnd);
    document.addEventListener('touchmove', onPointerMove as (moveEvent: any) => void);
    document.addEventListener('touchend', onPointerEnd);

    function onPointerMove(moveEvent: MouseEvent | TouchEvent) {
      offset = (isTouchEvent ? (moveEvent as TouchEvent).touches[0].clientX : (moveEvent as MouseEvent).clientX) - initialX;

      if (offset <= -200) {
        carouselMoveToRight();
        card.style.left = "0px";
        return;
      }

      if (offset >= 200) {
        carouselMoveToLeft();
        card.style.left = "0px";
        return;
      }

      card.style.left = `${offset}px`;
    }

    function onPointerEnd() {
      if (offset < 0 && offset > -200) {
        card.style.left = "0px";
      }
      if (offset > 0 && offset < 200) {
        card.style.left = "0px";
      }

      document.removeEventListener('mousemove', onPointerMove as (moveEvent: any) => void);
      document.removeEventListener('mouseup', onPointerEnd);
      document.removeEventListener('touchmove', onPointerMove as (moveEvent: any) => void);
      document.removeEventListener('touchend', onPointerEnd);
    }
  }

  return (
    <div className='flex-1 h-full w-full'>
      <div className='relative h-full w-full overflow-hidden'>
        <div className='absolute top-[50%] left-[12px] z-20 text-white/100 cursor-pointer'
          onClick={() => {
            clearCarouselInterval();
            carouselMoveToLeft();
          }}>
          <FaChevronLeft size={24} className='block text-white/100' />
        </div>
        <div className='absolute top-[50%] right-[12px] z-20 text-white/100 cursor-pointer'
          onClick={() => {
            clearCarouselInterval();
            carouselMoveToRight();
          }}>
          <FaChevronRight size={24} className='block' />
        </div>
        <div className='w-full relative h-full transition-all duration-100' >
          {
            carouselItems.map((carouselItem: CarouselItemProps) => {
              return (
                <CarouselItem key={`carousel-item-${carouselItem.index + 1}`}
                  imgSrc={carouselItem.image}
                  imgAlt={`carousel-img-${carouselItem.index + 1}`}
                  index={carouselItem.index}
                  currentSlide={carouselCurrentSlide}
                  onPointerEvent={handlePointerEvent} />
              )
            })
          }
        </div>
        <div className='absolute bottom-3 left-0 flex gap-2 items-center w-full justify-center'>
          {
            carouselItems.map((carouselItem: CarouselItemProps) => {
              return (
                <div key={`carousel-item-main-${carouselItem.index}`}
                  className={`h-1 w-6 rounded  cursor-pointer 
                  ${carouselCurrentSlide === carouselItem.index ? `bg-primary` : `bg-white`}`}
                  onClick={() => { setCarouselCurrentSide(carouselItem.index) }} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}