'use client';

import { MouseEvent, useEffect, useRef, useState } from 'react';
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
  const [currentDragTranslate, setCurrentDragTranslate] = useState<number>(0);
  let carouselTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    carouselIntervalRef.current = setInterval(() => {
      setCarouselCurrentSide((currentSlide: number) => {
        return currentSlide === (carouselItems.length - 1) ? 0 : (currentSlide = currentSlide + 1);
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
              return currentSlide === 0 ? (carouselItems.length - 1) : (currentSlide = currentSlide - 1);
            })
          }}>
          <FaChevronLeft className='w-6 h-6 block text-white/100' />
        </div>
        <div className='absolute top-[50%] right-[12px] z-20 text-white/100 cursor-pointer'
          onClick={() => {
            setCarouselCurrentSide((currentSlide: number) => {
              clearInterval(carouselIntervalRef.current)
              return currentSlide === (carouselItems.length - 1) ? 0 : (currentSlide = currentSlide + 1);
            })
          }}>
          <FaChevronRight className='w-6 h-6 block' />
        </div>
        <div className='w-full relative h-full'>
          {
            carouselItems.map((carouselItem: CarouselItemProps) => {
              return (
                <CarouselItem key={`carousel-item-${carouselItem.index + 1}`}
                  imgSrc={carouselItem.image}
                  imgAlt={`carousel-img-${carouselItem.index + 1}`}
                  index={carouselItem.index}
                  currentSlide={carouselCurrentSlide} />
              )
            })
          }
        </div>
        <div className='absolute bottom-3 left-0 flex gap-2 items-center w-full justify-center'>
          {
            carouselItems.map((carouselItem: CarouselItemProps) => {
              return (
                <div key={`carousel-item-main-${carouselItem.index}`}
                  className={`h-1 w-6 rounded  cursor-pointer ${carouselCurrentSlide === carouselItem.index ? `bg-primary` : `bg-white`}`}
                  onClick={() => { setCarouselCurrentSide(carouselItem.index) }} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}