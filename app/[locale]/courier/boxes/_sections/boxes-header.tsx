'use client';

import { AppDispatch } from "@/redux/store";
import CourierHeaderText from "../../_sections/courier-header-text";
import { useAppDispatch } from "@/app/_hooks/redux_hooks";
import { modalBoxesOpened } from "../_redux/courier-boxes-slice";

export default function BoxesHeader() {
  const dispatch: AppDispatch = useAppDispatch();
  return (
    <CourierHeaderText text="Box Management">
      <div className="flex-none w-auto">
        <div className='flex-none w-auto'>
          <button className='bg-info hover:bg-info-dark px-4 py-1.5 rounded w-fit text-white'
            onClick={() => {
              dispatch(modalBoxesOpened('createBox'));
            }}>
            Set Box Pricing
          </button>
        </div>
      </div>
    </CourierHeaderText>
  )
}