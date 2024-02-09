'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { Store } from '@/models/store';
import { StoreItem } from '../../_components/store-item';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export function OurSellers({ stores }: { stores: Store[] }) {
  let tempStores = [
    { id: 1, mainImageUrl: `/sellers/asianhome.png` },
    { id: 2, mainImageUrl: `/sellers/jollibee.png` },
    { id: 3, mainImageUrl: `/sellers/samsung.png` },
    { id: 4, mainImageUrl: `/sellers/apple.png` },
    { id: 5, mainImageUrl: `/sellers/mcdonald.png` },
    { id: 6, mainImageUrl: `/sellers/asianhome.png` },
    { id: 7, mainImageUrl: `/sellers/jollibee.png` },
    { id: 8, mainImageUrl: `/sellers/samsung.png` },
    { id: 9, mainImageUrl: `/sellers/apple.png` },
    { id: 10, mainImageUrl: `/sellers/mcdonald.png` },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = useMotionValue(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    else {
      setCurrentIndex(tempStores.length - 1)
    }
  };

  const handleNext = () => {
    if (currentIndex < tempStores.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    else { setCurrentIndex(0); }
  };

  const x = useTransform(slideWidth, [0, stores.length - 1], ['0%', `${-100 * (stores.length - 1)}%`]);


  return (
    <div className='max-w-screen-2xl m-auto py-4 h-auto'>
      <div className="flex mb-2">
        <div className="flex-1 font-[500] text-[28px] leading-0">Our Sellers</div>
        <div className='w-auto flex-none space-x-1 self-center'>
          <FaChevronLeft size={20} className='inline-block cursor pointer'
            onClick={() => { handlePrev() }}
          />
          <FaChevronRight size={20} className='inline-block cursor pointer'
            onClick={() => { handleNext() }} />
        </div>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
        <div style={{ display: 'flex', width: '100%', transform: 'translateX(-' + currentIndex * 100 + '%)' }} className='transition-all delay-100'>
          {tempStores.map((slide, index) => (
            <motion.div
              className='h-64 text-white px-2'
              key={index}
              style={{ flex: '0 0 100%', maxWidth: '100%', position: 'relative' }}
            >
              <div className='bg-blue-500 w-full h-full'>
                {slide.id}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}