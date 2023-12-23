import { FaRegStar, FaStar } from "react-icons/fa6";

export default function StarRating({
  id,
  activeState,
  withRatingEvents,
}: {
  activeState: number;
  id: number;
  withRatingEvents: boolean;
}) {
  return (
    <>
      {
        [...new Array(5)].map((value: any, index: number) => {

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
    </>
  )
}