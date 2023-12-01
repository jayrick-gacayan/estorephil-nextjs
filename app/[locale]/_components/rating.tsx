'use client';

import { useState, useRef, MouseEvent } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa6';

export default function Rating({
  id,
  rating,
  withRatingEvents,
}: {
  id: number;
  rating: number;
  withRatingEvents: boolean;
}) {
  const [activeStar, setActiveStar] = useState<number>(rating);
  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useRef<HTMLDivElement>(null);

  function calculateRating(event: MouseEvent) {
    let numberInStars = 0;

    if (ratingContainerRef.current) {
      const { width, left } = ratingContainerRef.current.getBoundingClientRect();
      let percent = (event.clientX - left) / width;
      numberInStars = percent * 5;
    }

    return Math.round(numberInStars * 100) / 100;
  }

  function handleRatingOnClick(event: MouseEvent<HTMLDivElement>) {
    if (withRatingEvents) {
      setActiveStar(calculateRating(event));
    }
  }

  function handleRatingMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (withRatingEvents) {
      setIsHovered(true);
      setHoverActiveStar(calculateRating(event));
    }
  };

  function handleMouseLeave(event: MouseEvent<HTMLDivElement>) {
    if (withRatingEvents) {
      setHoverActiveStar(-1); // Reset to default state
      setIsHovered(false);
    }
  };

  return (
    <div ref={ratingContainerRef}
      className={`inline-flex relative text-left ${withRatingEvents ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={handleRatingOnClick}
      onMouseMove={handleRatingMouseMove}
      onMouseLeave={handleMouseLeave}>
      {
        [...new Array(5)].map((value: any, index: number) => {

          const activeState = isHovered ? hoverActiveStar : activeStar;
          const showEmptyIcon = activeState < (index + 1);

          const isActiveRating = activeState !== 1;
          const isRatingWithPrecision = activeState % 1 !== 0;
          const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
          const showRatingWithPrecision = isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;
          return (
            <div key={`product-${id}-${index}`}
              className={`relative inline text-[#FAD115] ${withRatingEvents ? 'cursor-pointer' : 'cursor-default'}`}>
              <div className={`absolute overflow-hidden z-10`}
                style={{ width: showRatingWithPrecision ? `${(activeState % 1) * 100}%` : `0%` }}>
                <FaStar size={20} />
              </div>
              <div className='relative'>
                {showEmptyIcon ? <FaRegStar size={20} /> : <FaStar size={20} />}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}