'use client';

import CourierHeaderText from "../../../_sections/courier-header-text";

export default function StaffInfoHeader() {
  return (
    <CourierHeaderText text='Staff Details'>
      <div className='flex-none w-auto'>
        <button className='bg-info hover:bg-info-dark px-4 py-1.5 rounded w-fit text-white'
          onClick={() => {

          }}>
          Edit Staff
        </button>
      </div>
    </CourierHeaderText>
  )
}