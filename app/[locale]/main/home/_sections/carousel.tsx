'use client';

import { MouseEvent, useEffect, useRef, useState } from 'react';
import { CarouselItem } from '../_components/carousel-item';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';


export function Carousel() {
  const carouselIntervalRef = useRef<any>(null);
  const [carouselCurrentSlide, setCarouselCurrentSide] = useState<number>(0);
  const [currentDragTranslate, setCurrentDragTranslate] = useState<number>(0);
  let carouselTimeout: NodeJS.Timeout | null = null;
  useEffect(() => {
    carouselIntervalRef.current = setInterval(() => {
      setCarouselCurrentSide((currentSlide: number) => {
        return currentSlide === 2 ? 0 : (currentSlide = currentSlide + 1);
      })
    }, 5000);

    return () => {
      clearInterval(carouselIntervalRef.current!);
      carouselIntervalRef.current = null;
    }
  }, [carouselCurrentSlide])

  return (
    <div className='flex-1 h-full w-full'>
      <div className='relative h-full w-full overflow-hidden'
        onMouseDown={(event: MouseEvent<HTMLDivElement>) => {
          // console.log('client x', event.clientX);
          // console.log('client y', event.clientY);
        }}
        onMouseMove={(event: MouseEvent<HTMLDivElement>) => {
          // console.log('client x', event.clientX);
          // console.log('client y', event.clientY);
        }}
        onMouseLeave={() => { }}
        onMouseUp={() => { }}
      >
        <div className='absolute top-[50%] left-[12px] z-20 text-white/100 cursor-pointer'
          onClick={() => {
            clearInterval(carouselIntervalRef.current)
            setCarouselCurrentSide((currentSlide: number) => {
              return currentSlide === 0 ? 2 : (currentSlide = currentSlide - 1);
            })
          }}>
          <FaChevronLeft className='w-6 h-6 block text-white/100' />
        </div>
        <div className='absolute top-[50%] right-[12px] z-20 text-white/100 cursor-pointer'
          onClick={() => {
            setCarouselCurrentSide((currentSlide: number) => {
              clearInterval(carouselIntervalRef.current)
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