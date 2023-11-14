'use client';

import { Seller } from '@/models/seller';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { SellerItem } from '../../_components/seller_item';

export function OurSellers() {
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const innerSliderContainerRef = useRef<HTMLDivElement>(null);

  const sellers: Seller[] = [
    { id: 1, sellerImage: '/sellers/jollibee.png' },
    { id: 2, sellerImage: '/sellers/asianhome.png' },
    { id: 3, sellerImage: '/sellers/samsung.png' },
    { id: 4, sellerImage: '/sellers/jollibee.png' },
    { id: 5, sellerImage: '/sellers/asianhome.png' },
    { id: 6, sellerImage: '/sellers/samsung.png' },
    { id: 7, sellerImage: '/sellers/jollibee.png' },
    { id: 8, sellerImage: '/sellers/asianhome.png' },
    { id: 9, sellerImage: '/sellers/samsung.png' },
    { id: 10, sellerImage: '/sellers/jollibee.png' },
    { id: 11, sellerImage: '/sellers/asianhome.png' },
    { id: 12, sellerImage: '/sellers/samsung.png' },
    { id: 13, sellerImage: '/sellers/jollibee.png' },
    { id: 14, sellerImage: '/sellers/asianhome.png' },
    { id: 15, sellerImage: '/sellers/samsung.png' },
    { id: 16, sellerImage: '/sellers/jollibee.png' },
    { id: 17, sellerImage: '/sellers/samsung.png' },
    { id: 18, sellerImage: '/sellers/jollibee.png' },
  ];

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
    <div className='max-w-screen-2xl m-auto py-4 text-secondary h-auto'>
      <div className="flex mb-2">
        <div className="flex-1 font-[500] text-2xl">Our Sellers</div>
        <div className='w-auto flex-none space-x-1 self-center'>
          <FaChevronLeft className='w-5 h-5 inline-block' onClick={() => { moveSellersSlider(-140) }} />
          <FaChevronRight className='w-5 h-5 inline-block' onClick={() => { moveSellersSlider(140) }} />
        </div>
      </div>

      <div ref={sliderContainerRef} className='w-full overflow-hidden'>
        <div ref={innerSliderContainerRef} className="flex flex-nowrap gap-3 w-[150%]">
          {
            sellers.map((seller: Seller) => {
              return (<SellerItem key={`seller-${seller.id}`} seller={seller} />)
            })
          }
        </div>
      </div>
    </div>
  )
}