'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { Store } from '@/models/store';
import { StoreItem } from '../../_components/store-item';

export function OurSellers({ stores }: { stores: Store[] }) {
  const [pressDirection, setPressDirection] = useState('');
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const innerSliderContainerRef = useRef<HTMLDivElement>(null);
  function moveSellersSlider(moveTo: number) {
    if (sliderContainerRef.current) {
      if (innerSliderContainerRef.current) {
        console.log(moveTo)

        let sliderContainerGetBoundRect = sliderContainerRef.current.getBoundingClientRect();
        let innerSliderContainerGetBoundRect = sliderContainerRef.current.getBoundingClientRect();

        console.log('slider width', sliderContainerRef.current.scrollLeft)
        console.log('slider width', sliderContainerRef.current.scrollWidth)
        console.log('slider width', innerSliderContainerRef.current.clientWidth)
        console.log('slider width', innerSliderContainerGetBoundRect)
        console.log('slider width', sliderContainerGetBoundRect)
        if ((sliderContainerRef.current.scrollLeft + moveTo) < 0 ||
          (sliderContainerRef.current.scrollLeft >= (sliderContainerRef.current.scrollWidth - sliderContainerGetBoundRect.width) &&
            (moveTo > 0))) {
          console.log('stop')
          return;
        } else {
          console.log('move')
          sliderContainerRef.current.scrollTo({
            top: 0,
            left: sliderContainerRef.current.scrollLeft + moveTo,
            behavior: 'smooth'
          })
        }
      }
    }
  }
  function checkBoundary() {
    if (sliderContainerRef.current) {
      if (innerSliderContainerRef.current) {
        let sliderContainerGetBoundRect = sliderContainerRef.current.getBoundingClientRect();
        let innerSliderContainerGetBoundRect = sliderContainerRef.current.getBoundingClientRect();

        sliderContainerRef.current.scrollTo({
          top: 0,
          left: sliderContainerRef.current.scrollLeft + 140,
          behavior: 'smooth'
        })
        console.log('top', sliderContainerRef.current.offsetTop);
        console.log('left', sliderContainerGetBoundRect.width);
        console.log('scrollwidth', sliderContainerRef.current.scrollWidth);
        console.log('get bound rec', innerSliderContainerGetBoundRect.width);
        console.log('x', sliderContainerRef.current.scrollLeft)

      }
    }
  }

  return (
    <div className='max-w-screen-2xl m-auto py-4 h-auto'>
      <div className="flex mb-2">
        <div className="flex-1 font-[500] text-[28px] leading-0">Our Sellers</div>
        <div className='w-auto flex-none space-x-1 self-center'>
          <FaChevronLeft size={20} className='inline-block'
            onClick={() => { moveSellersSlider(-140) }}
          />
          <FaChevronRight size={20} className='inline-block'
            onClick={() => { moveSellersSlider(140) }} />
        </div>
      </div>

      <div ref={sliderContainerRef} className='w-full overflow-hidden'>
        <div ref={innerSliderContainerRef} className="flex flex-nowrap gap-3 w-[150%]">
          {
            stores.length === 0 ? (<div>No Stores</div>) :
              (
                <>
                  {stores.map((store: Store, index: number) => {
                    return <StoreItem store={store} key={`stores-main-${store.id}-${index}`} />
                  })}
                </>
              )
          }
        </div>
      </div>
    </div>
  )
}