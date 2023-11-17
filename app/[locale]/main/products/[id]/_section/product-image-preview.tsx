'use client';

import { ImageProps } from '@/types/props/image_props';
import Image from 'next/image';
import { useState } from 'react';

export function ProductPreviewImage() {
  let previewImages: ImageProps[] = [
    { id: 1, src: '/products/frontview-laptop.webp', alt: `preview-image-1` },
    { id: 2, src: '/products/backview-laptop.jfif', alt: `preview-image-2` },
    { id: 3, src: '/products/frontview-laptop.webp', alt: `preview-image-3` },
    { id: 4, src: '/products/backview-laptop.jfif', alt: `preview-image-4` },
  ]

  const [currentPreviewImage, setCurrentPreviewImage] = useState<ImageProps>(previewImages[0])

  return (
    <div className='flex flex-col gap-y-4 h-full'>
      <div className='flex-1 relative overflow-hidden'>
        <Image alt={`current-product-${currentPreviewImage.alt}-${currentPreviewImage.id}`}
          src={currentPreviewImage.src}
          fill
          className='transition-all duration-100 object-fill hover:scale-150' />
      </div>
      <div className='flex-none h-36'>
        <div className='flex gap-4 flex-nowrap overflow-hidden'>
          {
            previewImages.map((previewImage: ImageProps, index: number) => {
              return (
                <div key={`preview-product-image-${previewImage.alt}-${index}`}
                  className={`w-full shadow-lg cursor-pointer overflow-hidden ${previewImage.id === currentPreviewImage.id ? `border border-primary rounded` : ``}`}
                  onClick={() => { setCurrentPreviewImage(previewImage) }}>
                  <div className='w-full h-32 relative overflow-hidden'>
                    <Image alt={previewImage.alt}
                      src={previewImage.src}
                      fill
                      className='transition duration-100 object-fill hover:scale-150' />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}